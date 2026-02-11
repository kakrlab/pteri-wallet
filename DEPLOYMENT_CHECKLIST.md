# PTERI Deployment Checklist

## Quick Reference for Google Cloud Deployment

### 1. Pre-Deployment Verification
```bash
# Install dependencies
npm install

# Run development server to test
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 2. Google Cloud Configuration

#### Update nuxt.config.ts
```typescript
export default defineNuxtConfig({
  // ... existing config
  nitro: {
    preset: 'node-server', // or 'gcp' for Cloud Functions
    // Add security headers
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
        }
      }
    }
  }
})
```

### 3. Cloud Run Deployment

```bash
# Build Docker image
gcloud builds submit --tag gcr.io/[PROJECT-ID]/pteri-website

# Deploy to Cloud Run
gcloud run deploy pteri-website \
  --image gcr.io/[PROJECT-ID]/pteri-website \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --min-instances 1 \
  --max-instances 10 \
  --memory 512Mi \
  --cpu 1

# Map custom domain
gcloud run domain-mappings create \
  --service pteri-website \
  --domain pteri.kakr.org \
  --region us-central1
```

### 4. Dockerfile (if needed)
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080

CMD ["node", ".output/server/index.mjs"]
```

### 5. Post-Deployment Tests

#### Test URLs
- [ ] https://pteri.kakr.org (homepage)
- [ ] https://pteri.kakr.org/features
- [ ] https://pteri.kakr.org/security
- [ ] https://pteri.kakr.org/download
- [ ] https://pteri.kakr.org/web
- [ ] https://pteri.kakr.org/privacy
- [ ] https://pteri.kakr.org/terms
- [ ] https://pteri.kakr.org/support/faq
- [ ] https://pteri.kakr.org/developers/playground
- [ ] https://pteri.kakr.org/developers/sdk
- [ ] https://pteri.kakr.org/developers/status
- [ ] https://pteri.kakr.org/developers/faq

#### Test Download Links
- [ ] iOS App Store link works
- [ ] Google Play link works
- [ ] Web wallet link works

#### Test Social Cards
- [ ] Share on Twitter/X - preview shows correctly
- [ ] Share on LinkedIn - preview shows correctly
- [ ] Share on Facebook - preview shows correctly
- [ ] Share on Slack - preview shows correctly

#### Test Performance
```bash
# Run Lighthouse audit
npx lighthouse https://pteri.kakr.org --view

# Check Core Web Vitals
# - LCP (Largest Contentful Paint) < 2.5s
# - FID (First Input Delay) < 100ms
# - CLS (Cumulative Layout Shift) < 0.1
```

### 6. Monitoring Setup

#### Google Cloud Monitoring
```bash
# Enable Cloud Monitoring
gcloud services enable monitoring.googleapis.com

# Create uptime check
gcloud monitoring uptime-checks create https://pteri.kakr.org \
  --display-name="PTERI Website" \
  --check-interval=60s
```

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: pteri.kakr.org
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: https://pteri.kakr.org/sitemap.xml

### 7. Security Verification

#### SSL Certificate
```bash
# Check SSL certificate
openssl s_client -connect pteri.kakr.org:443 -servername pteri.kakr.org

# Verify HTTPS redirect
curl -I http://pteri.kakr.org
# Should return 301/302 to https://
```

#### Security Headers
```bash
# Check security headers
curl -I https://pteri.kakr.org

# Should include:
# - Strict-Transport-Security
# - X-Frame-Options
# - X-Content-Type-Options
# - X-XSS-Protection
```

### 8. Analytics Verification

#### Google Analytics
1. Visit https://pteri.kakr.org
2. Check Google Analytics Real-Time dashboard
3. Verify events are being tracked
4. Confirm GA4 ID: G-8YD9CV3WHL

### 9. Rollback Plan

```bash
# If issues occur, rollback to previous version
gcloud run services update-traffic pteri-website \
  --to-revisions=PREVIOUS_REVISION=100 \
  --region us-central1

# Or rollback via console:
# Cloud Run > pteri-website > Revisions > Manage Traffic
```

### 10. Final Verification

- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Footer links work on all pages
- [ ] Download buttons work
- [ ] Forms submit correctly (if any)
- [ ] Mobile responsive on all pages
- [ ] No console errors in browser
- [ ] No 404 errors in logs
- [ ] Analytics tracking works
- [ ] Social cards display correctly
- [ ] SSL certificate valid
- [ ] Security headers present
- [ ] Performance metrics acceptable

---

## Emergency Contacts

- **Technical Issues:** dev-support@kakrlabs.com
- **Security Issues:** security@kakrlabs.com
- **General Support:** contact@kakrlabs.com

## Useful Commands

```bash
# Check build size
npm run build
du -sh .output

# Analyze bundle
npx nuxi analyze

# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Clear cache and rebuild
rm -rf .nuxt .output node_modules
npm install
npm run build
```
