# GitHub Pages Deployment Guide
## Sellers Studio Pre-Website

GitHub Pages is **100% FREE** and perfect for hosting your static website!

---

## 🚀 Step-by-Step Deployment

### Step 1: Create GitHub Account (if needed)
1. Go to https://github.com
2. Click **"Sign up"**
3. Follow the registration steps (it's free!)

### Step 2: Create a New Repository

1. Click the **"+"** icon in top right → **"New repository"**
2. **Repository name**: `sellersstudio-presite` (or any name you want)
3. **Description**: "Sellers Studio Coming Soon Page"
4. Select **"Public"** (required for free GitHub Pages)
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

### Step 3: Upload Your Files

**Option A: Via Web Interface (Easiest)**

1. In your repository, click **"Add file"** → **"Upload files"**
2. Upload these files from `sadie-pre-website` folder:
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `script.js`
   - ✅ `thank-you.html`
   - ✅ `script-logo-brown.png`
   - ✅ `SellersStudio-ScriptLogo-background.jpg`
   - ✅ `Afrah-Light.otf`

3. **Commit message**: "Initial commit - Coming Soon page"
4. Click **"Commit changes"**

**Option B: Via Git Command Line** (if you prefer)

```bash
cd /Users/b407404/Desktop/Misc/sadie-pre-website
git init
git add index.html styles.css script.js thank-you.html script-logo-brown.png SellersStudio-ScriptLogo-background.jpg Afrah-Light.otf
git commit -m "Initial commit - Coming Soon page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sellersstudio-presite.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, click **"Settings"** (top menu)
2. Scroll down to **"Pages"** in left sidebar
3. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **"Save"**
5. 🎉 GitHub will build your site! (takes 1-2 minutes)
6. You'll see: **"Your site is published at https://YOUR-USERNAME.github.io/sellersstudio-presite/"**

### Step 5: Test Your Site

1. Click the link GitHub provides
2. Test that everything works:
   - ✅ Logo displays
   - ✅ Background shows
   - ✅ Font loads correctly
   - ✅ "INQUIRE NOW" slides in the form
   - ✅ Form submits successfully

---

## 🌐 Connect Your Custom Domain (sellersstudio.com)

### In GitHub:

1. Still in **Settings** → **Pages**
2. Under **"Custom domain"**, enter: `sellersstudio.com`
3. Click **"Save"**
4. ✅ Check **"Enforce HTTPS"** (wait a few minutes for this option to appear)

### In Squarespace:

1. Go to https://account.squarespace.com/domains/managed/sellersstudio.com
2. Click **"DNS Settings"**
3. **Delete any existing A records or CNAME for @ and www**
4. Add these DNS records:

#### A Records (add all 4):
```
Type: A
Host: @
Points to: 185.199.108.153

Type: A
Host: @
Points to: 185.199.109.153

Type: A
Host: @
Points to: 185.199.110.153

Type: A
Host: @
Points to: 185.199.111.153
```

#### CNAME Record:
```
Type: CNAME
Host: www
Points to: YOUR-USERNAME.github.io.
```
*(Replace YOUR-USERNAME with your actual GitHub username)*

5. Click **"Save"**

### Create CNAME file in GitHub:

1. In your repository, click **"Add file"** → **"Create new file"**
2. Name it: `CNAME` (all caps, no extension)
3. Content: Just one line: `sellersstudio.com`
4. Click **"Commit changes"**

---

## ⏰ DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes 10-30 minutes
- Check status at: https://www.whatsmydns.net/#A/sellersstudio.com

---

## ✅ Final Checklist

- [ ] GitHub account created
- [ ] Repository created
- [ ] Files uploaded (index.html, styles.css, script.js, images, font)
- [ ] GitHub Pages enabled
- [ ] Site works at github.io URL
- [ ] CNAME file created in repository
- [ ] DNS A records added in Squarespace
- [ ] DNS CNAME record added in Squarespace
- [ ] Custom domain added in GitHub Pages settings
- [ ] HTTPS enforced
- [ ] Tested at sellersstudio.com

---

## 🔧 Troubleshooting

**Site not loading?**
- Wait 5 minutes after enabling GitHub Pages
- Check Actions tab in GitHub for build status
- Make sure `index.html` is in root directory

**Custom domain not working?**
- Wait 30 minutes for DNS propagation
- Verify DNS records are correct (no typos!)
- Make sure CNAME file exists in repository
- Check GitHub Pages settings show your domain

**Images/fonts not loading?**
- Make sure files are uploaded to repository
- Check file names match exactly (case-sensitive!)
- Clear browser cache and try again

**Form not submitting?**
- Formspree is already configured
- Check Formspree dashboard at https://formspree.io/forms/xvgrvbko

---

## 💰 Cost Breakdown

- **GitHub Pages**: FREE ✅
- **Squarespace Domain**: ~$20/year (just the domain, no hosting)
- **Total**: $20/year (vs. $200+/year for full Squarespace)

---

## 🔄 Making Updates

Whenever you want to update your site:

1. Go to your repository on GitHub
2. Click the file you want to edit
3. Click the pencil icon ✏️ to edit
4. Make your changes
5. Click **"Commit changes"**
6. Changes go live in 1-2 minutes!

---

## 🎉 You're Done!

Your site will be live at **https://sellersstudio.com** in about 30 minutes!

**Next Steps:**
1. Upload files to GitHub
2. Enable Pages
3. Configure DNS
4. Wait for propagation
5. Celebrate! 🎊

Questions? The GitHub Pages documentation is excellent:
https://docs.github.com/en/pages

