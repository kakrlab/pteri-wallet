/**
 * Wallet Connector Module
 * 
 * Usage:
 * 1. Include this script in your HTML
 * 2. Create a WalletConnector instance with your config
 * 3. Bind your buttons to the connector methods
 * 
 * Example:
 * const connector = new WalletConnector({
 *   serverUrl: 'https://your-server.com',
 *   walletOrigin: 'https://your-wallet.com',
 *   connectPath: '/connect',
 *   signPath: '/signMessage'
 * });
 * 
 * document.getElementById('connectBtn').addEventListener('click', () => connector.connect());
 * document.getElementById('signBtn').addEventListener('click', () => connector.sign('your message'));
 */

  // const SERVER_URL = "http://localhost:3024"; 
   const SERVER_URL = "https://pteriwalletapixx121.pteri.org";
  // Must be HTTP/HTTPS URL for handshake

  const RELAY_PATH = "/relay";


 const WALLET_ORIGIN = "https://wallet.pteri.org"; // your wallet URL (must match the one used in the wallet's relay connection)

  // const WALLET_ORIGIN = "http://localhost:3000";

  const CONNECTPATH = '/connect';
  const SIGNPATH = '/signMessage';

class WalletConnector {
  /**
   * @param {Object} config - Configuration options
   * @param {Function} [config.onConnect] - Callback when connected (receives address)
   * @param {Function} [config.onSign] - Callback when signed (receives signature)
   * @param {Function} [config.onStatus] - Callback for status updates
   * @param {Function} [config.onLog] - Callback for logging
   */
  constructor(config = {}) {
    // Default configuration (hardcoded for Pteri Wallet)
    this.serverUrl = SERVER_URL;
    this.walletOrigin = WALLET_ORIGIN;
    this.connectPath = CONNECTPATH;
    this.signPath = SIGNPATH;
    this.relayPath = RELAY_PATH;
    
    // Callbacks
    this.onConnect = config.onConnect || (() => {});
    this.onSign = config.onSign || (() => {});
    this.onStatus = config.onStatus || (() => {});
    this.onLog = config.onLog || (() => {});
  }

  /**
   * Set status message
   * @private
   */
  _setStatus(message) {
    this.onStatus(message);
  }

  /**
   * Log message
   * @private
   */
  _log(...args) {
    this.onLog(...args);
  }

  /**
   * Open wallet in popup
   * @private
   */
  _openWallet(path, topic) {
    const width = 600;
    const height = 600;
    const left = window.screen.availWidth - width - 20;
    const top = 50;

    const url = new URL(path, this.walletOrigin);
    url.hash = `t-${topic}`;

    window.open(
      url.href,
      'wallet-popup',
      `left=${left},top=${top},width=${width},height=${height},` +
      'toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes,noopener,noreferrer'
    );
  }

  /**
   * Run a session (connect or sign)
   * @private
   */
  async _runSession({ method, params, walletPath, onResult }) {
    return new Promise((resolve, reject) => {
      const topic = crypto.randomUUID();
      const requestId = crypto.randomUUID();
      let gotReply = false;
      let resendTimer;

      this._setStatus(`Connecting to relay for ${method}…`);

      // Check if Socket.IO is available
      if (typeof io !== 'function') {
        reject(new Error('Socket.IO client library is required. Include: <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>'));
        return;
      }

      // Connect with Socket.IO
      const socket = io(this.serverUrl, {
        path: this.relayPath,
        transports: ['websocket', 'polling'],
        reconnection: false,
        timeout: 10000,
      });

      socket.on('connect', () => {
        this._log('Connected to relay, socket ID:', socket.id);

        socket.on('ping', () => {
          socket.emit('pong');
        });

        // Bind as dapp
        socket.emit(
          'message',
          JSON.stringify({
            type: 'BIND',
            topic,
            role: 'dapp',
          })
        );
        this._log('→ BIND sent', topic);

        // Send JSON-RPC request with retry
        const sendRequest = () => {
          const frame = {
            jsonrpc: '2.0',
            id: requestId,
            method,
            params,
          };
          socket.emit('message', JSON.stringify(frame));
          this._log('→', method.toUpperCase(), JSON.stringify(frame));
        };

        setTimeout(sendRequest, 100);

        resendTimer = setInterval(() => {
          if (!gotReply) sendRequest();
        }, 1000);

        // Open wallet
        this._openWallet(walletPath, topic);
        this._setStatus(`Waiting for wallet to ${method}…`);
      });

      socket.on('message', (data) => {
        let msg;
        try {
          msg = JSON.parse(data);
        } catch (e) {
          this._log('← Invalid JSON:', data);
          return;
        }

        this._log('← recv', JSON.stringify(msg));

        if (
          msg.jsonrpc === '2.0' &&
          msg.id === requestId &&
          (msg.result?.address || msg.result?.signature)
        ) {
          gotReply = true;
          clearInterval(resendTimer);

          console.log('Success:', msg.result);
          onResult?.(msg.result);

          this._setStatus(
            `${method.charAt(0).toUpperCase() + method.slice(1)} successful`
          );
          socket.disconnect();
          resolve(msg.result);
        }
      });

      socket.on('connect_error', (err) => {
        clearInterval(resendTimer);
        this._log('Connection error:', err.message);
        this._setStatus('Connection failed');
        reject(err);
      });

      socket.on('disconnect', (reason) => {
        clearInterval(resendTimer);
        this._log('[socket] disconnected:', reason);
        if (!gotReply) {
          this._setStatus('Disconnected before response');
        }
      });
    });
  }

  /**
   * Connect to wallet
   * @returns {Promise<Object>} Result containing address
   */
  async connect() {
    try {
      const result = await this._runSession({
        method: 'connect',
        params: { origin: location.origin, ver: 'v3' },
        walletPath: this.connectPath,
        onResult: (res) => {
          const address = res?.address || null;
          this.onConnect(address);
        },
      });
      this._log('connect result:', JSON.stringify(result));
      return result;
    } catch (e) {
      this._setStatus('Connect failed');
      this._log('connect error:', e?.message || e);
      throw e;
    }
  }

  /**
   * Sign a message
   * @param {string} message - Message to sign
   * @returns {Promise<Object>} Result containing signature
   */
  async sign(message) {
    if (!message || !message.trim()) {
      throw new Error('Message is required');
    }

    try {
      const result = await this._runSession({
        method: 'sign',
        params: { origin: location.origin, ver: 'v3', message: message.trim() },
        walletPath: this.signPath,
        onResult: (res) => {
          const signature = res?.signature || null;
          this.onSign(signature);
        },
      });
      this._log('sign result:', JSON.stringify(result));
      return result;
    } catch (e) {
      this._setStatus('Sign failed');
      this._log('sign error:', e?.message || e);
      throw e;
    }
  }
}

// Make it globally available
window.WalletConnector = WalletConnector;

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WalletConnector;
}