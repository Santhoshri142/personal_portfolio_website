# Deployment Guide for Portfolio Website

This guide will help you deploy your portfolio website to various platforms.

## Prerequisites

1. Make sure your code is committed to a Git repository (GitHub, GitLab, or Bitbucket)
2. Have an account on your chosen deployment platform

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Vercel** is the easiest option with automatic deployments from GitHub.

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Your site URL:**
   - Vercel will give you a URL like: `your-portfolio.vercel.app`
   - You can add a custom domain later

---

### Option 2: Netlify

**Netlify** is another great option with similar ease of use.

#### Steps:

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Your site will be live in ~2 minutes!

3. **Your site URL:**
   - Netlify will give you a URL like: `your-portfolio.netlify.app`

---

### Option 3: GitHub Pages

**GitHub Pages** is free and works well for static sites.

#### Steps:

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js:**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Portfolio/' // Replace 'Portfolio' with your repo name
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://yourusername.github.io/Portfolio/`

---

## After Deployment - How to Update Your Website

### ✅ YES, you can update your website after deployment!

Here's how:

### Method 1: Automatic Updates (Vercel/Netlify)

**This is the easiest method!**

1. **Make changes locally:**
   ```bash
   # Edit your files
   # Test locally: npm run dev
   ```

2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

3. **Automatic deployment:**
   - Vercel/Netlify will automatically detect the push
   - They will rebuild and redeploy your site
   - Your changes will be live in 1-2 minutes!

**That's it!** No manual steps needed.

---

### Method 2: Manual Deployment

If you're using GitHub Pages or want manual control:

1. **Make your changes locally**

2. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy  # For GitHub Pages
   ```

---

## Updating Process Summary

### Quick Update Workflow:

```
1. Edit files locally
2. Test: npm run dev
3. Commit: git add . && git commit -m "Update"
4. Push: git push origin main
5. Wait 1-2 minutes
6. Your site is updated! ✨
```

---

## Custom Domain (Optional)

### Vercel:
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### Netlify:
- Go to Site Settings → Domain Management
- Add custom domain
- Configure DNS as instructed

---

## Troubleshooting

### Build Fails:
- Check console for errors
- Make sure all dependencies are in `package.json`
- Run `npm install` locally to test

### Site Not Updating:
- Clear browser cache (Ctrl+Shift+R)
- Check deployment logs in Vercel/Netlify dashboard
- Ensure you pushed to the correct branch

### 404 Errors:
- Make sure `vercel.json` or `netlify.toml` has redirect rules
- Check that `base` path in `vite.config.js` matches your repo name (for GitHub Pages)

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages Docs: https://pages.github.com

---

**Happy Deploying! 🚀**
