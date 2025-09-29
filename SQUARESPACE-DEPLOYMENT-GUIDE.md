# Sellers Studio Pre-Website - Squarespace Deployment Guide

## 📋 What You Have

In the `sadie-pre-website` folder:
- `squarespace-content.html` - HTML content (no html/head/body tags)
- `squarespace-styles.css` - Complete CSS styling
- `squarespace-script.js` - JavaScript for slide animation
- `script-logo-brown.png` - Brown logo
- `SellersStudio-ScriptLogo-background.jpg` - Background image
- `Afrah-Light.otf` - Custom font

---

## 🚀 Deployment Steps

### Step 1: Create Your Squarespace Site

1. Go to https://account.squarespace.com/domains/managed/sellersstudio.com
2. Click **"GET STARTED"** or **"CONNECT EXISTING WEBSITE"**
3. Choose a blank template (any will work since we're using custom code)
4. Complete the setup wizard

### Step 2: Upload Assets

1. In your Squarespace site, go to **Design** → **Custom CSS**
2. Click **"Manage Custom Files"**
3. Upload these three files:
   - `Afrah-Light.otf`
   - `script-logo-brown.png`
   - `SellersStudio-ScriptLogo-background.jpg`
4. **Copy the URLs** Squarespace gives you for each file (you'll need these!)

### Step 3: Add Custom CSS

1. Still in **Design** → **Custom CSS**
2. Open `squarespace-styles.css`
3. **IMPORTANT**: Update these three URLs with your actual Squarespace file URLs:
   ```css
   src: url('/s/Afrah-Light.otf')  /* Replace with your actual URL */
   background-image: url('/s/SellersStudio-ScriptLogo-background.jpg')  /* Replace */
   src="/s/script-logo-brown.png"  /* Also update in HTML */
   ```
4. Paste the entire CSS into the Custom CSS panel
5. Click **Save**

### Step 4: Create a Blank Page

1. Go to **Pages**
2. Click **"+"** to add a new page
3. Choose **"Blank"** page type
4. Name it "Home" or "Coming Soon"

### Step 5: Add Your HTML Content

1. On your blank page, click **"+"** to add a block
2. Choose **"Code"** block
3. Open `squarespace-content.html`
4. **IMPORTANT**: Find this line:
   ```html
   <img src="/s/script-logo-brown.png" alt="Sellers Studio" class="ss-logo">
   ```
   Replace `/s/script-logo-brown.png` with your actual Squarespace logo URL
5. Paste the entire HTML into the code block
6. Click **Apply**

### Step 6: Add JavaScript

1. Go to **Settings** → **Advanced** → **Code Injection**
2. Scroll to **Footer** section
3. Add opening and closing script tags with the JavaScript:
   ```html
   <script>
   // Paste contents of squarespace-script.js here
   </script>
   ```
4. Click **Save**

### Step 7: Set as Homepage

1. Go to **Pages**
2. Find your "Coming Soon" page
3. Click the gear icon ⚙️
4. Select **"Set as Homepage"**
5. Click **Save**

### Step 8: Publish!

1. Click **"Save"** on all changes
2. Click **"Publish"** in the top right
3. Visit https://sellersstudio.com to see your site!

---

## 🎨 Alternative: Simple Method (Code Block Only)

If you want a quicker setup:

1. Create a **Cover Page** instead
2. Add a **Code Block**
3. Paste this all-in-one code:
   ```html
   <style>
   /* Paste squarespace-styles.css here */
   </style>
   
   <!-- Paste squarespace-content.html here -->
   
   <script>
   // Paste squarespace-script.js here
   </script>
   ```
4. Upload assets and update URLs as described above

---

## ✅ Checklist

- [ ] Uploaded font file (Afrah-Light.otf)
- [ ] Uploaded logo (script-logo-brown.png)
- [ ] Uploaded background (SellersStudio-ScriptLogo-background.jpg)
- [ ] Updated CSS with actual file URLs
- [ ] Updated HTML img src with actual logo URL
- [ ] Added CSS to Design > Custom CSS
- [ ] Added HTML to Code Block
- [ ] Added JavaScript to Code Injection > Footer
- [ ] Set page as Homepage
- [ ] Published site
- [ ] Tested on desktop and mobile
- [ ] Tested form submission

---

## 🔧 Troubleshooting

**Background not showing?**
- Make sure the URL in CSS matches the uploaded file URL exactly
- Check that background-attachment: fixed is supported by your browser

**Font not loading?**
- Verify the font URL in @font-face rule
- Check browser console for 404 errors

**Slide animation not working?**
- Make sure JavaScript is in Footer Code Injection
- Check browser console for errors
- Verify all element IDs match (landing, inquiryPanel, inquireBtn, backBtn)

**Form not submitting?**
- Formspree link is already configured (xvgrvbko)
- Update `_next` URL to your thank-you page if needed

---

## 📞 Support

If you need help:
- Squarespace Support: https://support.squarespace.com
- Formspree Support: https://formspree.io/help

---

## 🎉 You're Done!

Your beautiful pre-website should now be live at **sellersstudio.com**!

The site features:
✅ Custom brown logo matching your brand
✅ Elegant Afrah font
✅ Smooth slide-in inquiry form
✅ Fully functional contact form via Formspree
✅ Mobile responsive design
✅ Fixed background with animated content

