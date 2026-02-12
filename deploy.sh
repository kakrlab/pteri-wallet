#!/bin/bash

# PTERI Website Deployment Script
# This script builds and deploys the site

echo "🚀 Starting PTERI Website Deployment..."

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .output .vercel/output dist

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Build the project
echo "🔨 Building project..."
npm run generate

# Step 4: Check if build was successful
if [ -d ".vercel/output/static" ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in: .vercel/output/static"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to https://vercel.com/new"
    echo "2. Click 'Import Project'"
    echo "3. Select 'Import from Git Repository'"
    echo "4. Choose: dev-bikash-roy/pteri-wallet"
    echo "5. Framework Preset: Nuxt.js"
    echo "6. Click 'Deploy'"
    echo ""
    echo "OR upload the .vercel/output/static folder to any static host"
else
    echo "❌ Build failed!"
    exit 1
fi
