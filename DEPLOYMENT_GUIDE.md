# PTERI Website - Simple Deployment Guide

## Problem
- Multiple Vercel accounts causing conflicts
- Permission issues with deployments
- Site showing blank or 404 errors

## Solution: Fresh Start

### Option 1: Deploy via Vercel Dashboard (EASIEST - RECOMMENDED)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Log in with the account you want to use (bk@pteri.org or bikash@kakr.io)

2. **Import Git Repository**
   - Click "Import Project"
   - Select "Import Git Repository"
   - Choose: `dev-bikash-roy/pteri-wallet` (the SOURCE CODE repo, not pteri-wallet-site)
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Nuxt.js** (should auto-detect)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.output` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live!

5. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `pteri.kakr.org`
   - Update DNS as instructed

---

### Option 2: Use Netlify (Alternative)

If Vercel continues to have issues:

1. **Go to Netlify**
   - Visit: https://app.netlify.com/start
   - Log in or sign up

2. **Import from Git**
   - Click "Import from Git"
   - Choose GitHub
   - Select: `dev-bikash-roy/pteri-wallet`

3. **Build Settings**
   - Build command: `npm run generate`
   - Publish directory: `.vercel/output/static`
   - Click "Deploy"

4. **Add Custom Domain**
   - Site Settings → Domain Management
   - Add `pteri.kakr.org`

---

### Option 3: Manual Upload to Any Static Host

1. **Build Locally**
   ```bash
   npm install
   npm run generate
   ```

2. **Upload Files**
   - Upload everything from `.vercel/output/static/` folder to:
     - Netlify Drop
     - GitHub Pages
     - Cloudflare Pages
     - Any static hosting service

---

## Current Repository Structure

- **Source Code**: `dev-bikash-roy/pteri-wallet`
  - Contains: components, pages, nuxt.config.ts, etc.
  - This is what you should deploy

- **Built Files**: `dev-bikash-roy/pteri-wallet-site`
  - Contains: HTML, CSS, JS output
  - Don't use this for deployment (causes issues)

---

## Recommended: Start Fresh

1. **Log out of all Vercel accounts**
   ```bash
   vercel logout
   ```

2. **Log in with ONE account**
   ```bash
   vercel login
   ```
   - Use: bk@pteri.org or bikash@kakr.io (choose one)

3. **Deploy from source**
   ```bash
   vercel --prod
   ```

---

## What We've Done Today

✅ Complete enterprise readiness updates
✅ SEO optimization on all 12 pages
✅ Open Graph social cards
✅ Web wallet buttons linking to wallet.pteri.org
✅ All FAQs updated
✅ Navigation consistent
✅ Build successful

❌ Deployment blocked by Vercel permission issues

---

## Quick Fix: Use Vercel Dashboard

**The easiest solution is to deploy via Vercel Dashboard (Option 1 above)**

This bypasses all CLI permission issues and gives you full control.

---

## Need Help?

If you're still stuck:
1. Screenshot the error
2. Check which Vercel account owns the domain
3. Make sure you're logged into that account
4. Try Netlify as an alternative (it's actually easier)
