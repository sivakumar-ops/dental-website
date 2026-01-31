# Deployment Guide for Dental 128 Website

This guide provides step-by-step instructions for deploying your Dental 128 website to various hosting platforms.

## Table of Contents

1. [Vercel Deployment](#vercel-deployment)
2. [Netlify Deployment](#netlify-deployment)
3. [GitHub Pages Deployment](#github-pages-deployment)
4. [Custom Server Deployment](#custom-server-deployment)
5. [Environment Variables](#environment-variables)
6. [Performance Optimization](#performance-optimization)

---

## Vercel Deployment

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Custom Domain Setup (Vercel)

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

---

## Netlify Deployment

### Method 1: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Method 2: Using Netlify Dashboard

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Choose your repository
5. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click "Deploy site"

### Custom Domain Setup (Netlify)

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

---

## GitHub Pages Deployment

### Setup

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these lines:
   ```json
   {
     "homepage": "https://yourusername.github.io/dental-128",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/dental-128/', // Your repo name
     plugins: [react()],
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository settings
   - Navigate to "Pages"
   - Select "gh-pages" branch
   - Save

---

## Custom Server Deployment

### Using Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create nginx.conf**
   ```nginx
   server {
     listen 80;
     server_name localhost;
     root /usr/share/nginx/html;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }

     gzip on;
     gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

3. **Build and Run**
   ```bash
   docker build -t dental-website .
   docker run -p 80:80 dental-website
   ```

### Using PM2 with Express

1. **Install dependencies**
   ```bash
   npm install express compression
   npm install -g pm2
   ```

2. **Create server.js**
   ```javascript
   const express = require('express');
   const compression = require('compression');
   const path = require('path');

   const app = express();
   const PORT = process.env.PORT || 3000;

   app.use(compression());
   app.use(express.static(path.join(__dirname, 'dist')));

   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
   });

   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

3. **Start with PM2**
   ```bash
   npm run build
   pm2 start server.js --name dental-website
   pm2 save
   pm2 startup
   ```

---

## Environment Variables

### Development

Create `.env.local`:
```
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

### Production

Set environment variables in your hosting platform:

**Vercel:**
- Go to Settings → Environment Variables
- Add variables

**Netlify:**
- Go to Site settings → Build & deploy → Environment
- Add variables

**Access in code:**
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Performance Optimization

### Pre-deployment Checklist

1. **Optimize Images**
   - Use WebP format where possible
   - Compress images (TinyPNG, ImageOptim)
   - Implement lazy loading

2. **Code Splitting**
   - Already implemented via Vite
   - Verify chunk sizes: `npm run build -- --report`

3. **Enable Compression**
   - Gzip/Brotli enabled by default on Vercel/Netlify
   - For custom servers, configure in nginx/server

4. **Cache Headers**
   - Set appropriate cache headers for static assets
   - Implemented in deployment configs

5. **Lighthouse Audit**
   ```bash
   npm install -g lighthouse
   lighthouse https://your-site.com --view
   ```

### Performance Metrics to Monitor

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1

---

## SSL/HTTPS

All recommended platforms (Vercel, Netlify, GitHub Pages) provide free SSL certificates automatically.

For custom servers:
- Use Let's Encrypt for free SSL
- Configure with Certbot

---

## Monitoring & Analytics

### Google Analytics

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

Consider integrating:
- Sentry
- LogRocket
- Rollbar

---

## Troubleshooting

### Build Fails

- Clear cache: `rm -rf node_modules && npm install`
- Check Node version: `node -v` (should be 16+)
- Verify all dependencies are installed

### 404 on Refresh

- Ensure redirects are configured (see platform configs)
- Check `netlify.toml` or `vercel.json`

### Slow Performance

- Enable compression
- Optimize images
- Review bundle size
- Check CDN configuration

---

## Post-Deployment

1. **Test all pages and links**
2. **Verify forms work correctly**
3. **Check mobile responsiveness**
4. **Run Lighthouse audit**
5. **Test on multiple browsers**
6. **Set up analytics**
7. **Monitor error logs**

---

## Support

For deployment issues:
- Vercel: [docs.vercel.com](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)

---

**Last Updated**: January 2026
