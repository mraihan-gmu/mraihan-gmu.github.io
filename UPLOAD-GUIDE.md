# 📦 Complete File List - Upload to GitHub

## ✅ All Files Ready for Upload

### **Essential Website Files (7 files):**
1. **index.html** - Home page
2. **resume.html** - Resume/CV page
3. **publications.html** - Publications page
4. **experiences.html** - Experiences page
5. **contact.html** - Contact page
6. **blog.html** - Blog page
7. **CNAME** - Domain configuration (IMPORTANT!)

### **Documentation (3 files):**
8. **README.md** - Setup instructions
9. **MEDIA-SETUP-GUIDE.md** - Media folder guide
10. **CHANGES-SUMMARY.md** - What changed

---

## 🚀 UPLOAD INSTRUCTIONS

### Step 1: Upload Main Files
1. Go to: `https://github.com/yourusername/yourusername.github.io`
2. Click **"Add file" → "Upload files"**
3. **Drag and drop these 7 files:**
   - index.html
   - resume.html
   - publications.html
   - experiences.html
   - contact.html
   - blog.html
   - CNAME ← **VERY IMPORTANT!**
4. Add commit message: "Upload new website"
5. Click **"Commit changes"**

### Step 2: Upload Documentation (Optional but Recommended)
1. Click **"Add file" → "Upload files"**
2. Drag and drop:
   - README.md
   - MEDIA-SETUP-GUIDE.md
   - CHANGES-SUMMARY.md
3. Click **"Commit changes"**

### Step 3: Create Media Folder
1. On your computer, create a folder called `media`
2. Put these 4 files inside:
   - **me.png** - Your profile photo (200x200px minimum)
   - **logo.png** - GMU logo
   - **cv.pdf** - Your full CV
   - **resume.pdf** - Your resume

3. In GitHub, click **"Add file" → "Upload files"**
4. Drag the entire `media` folder
5. Click **"Commit changes"**

---

## 📁 Final Repository Structure

Your repo should look exactly like this:
```
yourusername.github.io/
├── CNAME                    ← Must contain: md-nishat.com
├── index.html
├── resume.html
├── publications.html
├── experiences.html
├── contact.html
├── blog.html
├── README.md
├── MEDIA-SETUP-GUIDE.md
├── CHANGES-SUMMARY.md
└── media/
    ├── me.png               ← Your photo
    ├── logo.png             ← GMU logo
    ├── cv.pdf               ← Your CV
    └── resume.pdf           ← Your resume
```

---

## ⚙️ Configure GitHub Pages

After uploading:

1. Go to **Settings** (top right)
2. Click **"Pages"** (left sidebar)
3. Under **"Source"**: 
   - Branch: **main**
   - Folder: **/ (root)**
   - Click **"Save"**
4. Under **"Custom domain"**:
   - Type: `md-nishat.com`
   - Click **"Save"**
5. Wait for DNS check to complete
6. Check **"Enforce HTTPS"** (after 24 hours)

---

## 🌐 DNS Configuration

Make sure your domain registrar (GoDaddy, Namecheap, etc.) has:

**4 A Records:**
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

**1 CNAME Record:**
```
Type: CNAME    Name: www    Value: yourusername.github.io
```

---

## ✅ Verification

After everything is uploaded and configured:

1. ✅ Visit `https://yourusername.github.io` - Should load your site
2. ✅ Check CNAME file exists in repo with `md-nishat.com` inside
3. ✅ Check media folder has 4 files
4. ✅ Photo appears on home page
5. ✅ GMU logo appears below name
6. ✅ Navigation has 6 items (no Transcript)
7. ✅ Contact section with social buttons at bottom of home page
8. ✅ Blog has only 1 post
9. ✅ Resume page has 4 PDF buttons
10. ✅ After 24-48 hours: `https://md-nishat.com` works

---

## 🆘 Troubleshooting

**Changes not showing:**
- Wait 2-3 minutes for GitHub Pages to rebuild
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check "Actions" tab to see if build completed

**Photo/Logo not showing:**
- Verify files are in `media/` folder (not root)
- Check exact filenames: `me.png` and `logo.png` (lowercase)

**Domain not working:**
- Check CNAME file exists with `md-nishat.com`
- Check DNS settings at your registrar
- Wait 24-48 hours for DNS propagation

**PDFs not opening:**
- Verify files are in `media/` folder
- Check exact filenames: `cv.pdf` and `resume.pdf`

---

## 📥 Download Links

All files are ready to download:
- Click each file link below
- Right-click → "Save As" or just click to view
- Upload to GitHub as instructed above

Good luck! 🚀
