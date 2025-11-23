# Files to Include in GitHub Repository

This guide shows exactly what files should be in your GitHub repository.

---

## ✅ FILES TO INCLUDE (Commit These)

### 📁 Source Code Files
```
src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── components/
│   ├── About.jsx
│   ├── Achievements.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── utils/
│   └── constants.js
└── assets/
    └── react.svg
```

### 📁 Public Files (Images, Static Assets)
```
public/
├── images/
│   ├── certificates/
│   │   ├── *.jpg (all certificate images)
│   │   └── internships/
│   │       └── *.jpg (all internship certificates)
│   └── profile/
│       └── *.jpg (profile images)
└── vite.svg
```

### 📁 Configuration Files
```
├── package.json          ✅ MUST HAVE
├── package-lock.json    ✅ MUST HAVE
├── vite.config.js       ✅ MUST HAVE
├── eslint.config.js     ✅ MUST HAVE
├── index.html           ✅ MUST HAVE
├── vercel.json          ✅ For Vercel deployment
├── netlify.toml         ✅ For Netlify deployment
└── .gitignore           ✅ MUST HAVE
```

### 📁 Documentation
```
├── README.md            ✅ Recommended
├── DEPLOYMENT.md        ✅ Optional but helpful
└── GITHUB_REPO_GUIDE.md ✅ Optional
```

---

## ❌ FILES TO EXCLUDE (Already in .gitignore)

These files are **automatically excluded** by `.gitignore`:

```
❌ node_modules/          (Dependencies - too large)
❌ dist/                  (Build output - generated)
❌ dist-ssr/              (Build output)
❌ *.log                  (Log files)
❌ .env                   (Environment variables - sensitive)
❌ .env.local             (Local environment)
❌ .DS_Store              (Mac system files)
❌ .vscode/               (Editor settings)
❌ .idea/                 (IDE settings)
```

**You don't need to manually exclude these - `.gitignore` handles it!**

---

## 📋 Quick Checklist Before Pushing

Before pushing to GitHub, make sure you have:

- [x] All source code files (`src/` folder)
- [x] All images (`public/images/` folder)
- [x] `package.json` and `package-lock.json`
- [x] `vite.config.js`
- [x] `index.html`
- [x] `.gitignore` file
- [x] `vercel.json` (for Vercel)
- [x] `netlify.toml` (for Netlify)
- [x] `README.md` (optional but recommended)

---

## 🚀 How to Push to GitHub

### Step 1: Initialize Git (if not done)
```bash
git init
```

### Step 2: Add All Files
```bash
git add .
```
This will add all files EXCEPT those in `.gitignore`

### Step 3: Check What Will Be Committed
```bash
git status
```
This shows you what files will be committed. Make sure `node_modules` and `dist` are NOT listed.

### Step 4: Commit
```bash
git commit -m "Initial commit - Portfolio website"
```

### Step 5: Connect to GitHub
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/yourusername/Portfolio.git
```

### Step 6: Push
```bash
git push -u origin main
```

---

## 📊 Expected Repository Size

- **With source code only**: ~1-5 MB
- **With images**: ~10-50 MB (depends on image sizes)
- **Without node_modules**: Much smaller and faster!

---

## ⚠️ Important Notes

1. **Never commit `node_modules/`** - It's huge and unnecessary
2. **Never commit `.env` files** - They contain sensitive data
3. **Never commit `dist/`** - It's generated during build
4. **Always commit `package.json`** - Vercel/Netlify need it to install dependencies
5. **Always commit images** - They're part of your portfolio

---

## 🔍 Verify Your Repository

After pushing, check your GitHub repository. You should see:

✅ `src/` folder
✅ `public/` folder  
✅ `package.json`
✅ `vite.config.js`
✅ `index.html`
✅ `.gitignore`
✅ `vercel.json`
✅ `netlify.toml`

❌ NO `node_modules/` folder
❌ NO `dist/` folder
❌ NO `.env` files

---

## 💡 Pro Tip

If you accidentally committed files you shouldn't have:

```bash
# Remove from git (but keep locally)
git rm -r --cached node_modules/
git rm -r --cached dist/

# Commit the removal
git commit -m "Remove node_modules and dist from git"

# Push
git push
```

---

**Your repository is ready for deployment! 🎉**








