# Your Academic Website

## Files Included:
1. **index.html** - Home page with profile photo, announcement, news, selected publications, and contact section with professional networks
2. **resume.html** - Complete CV with education, experience, awards, and skills (includes PDF viewer buttons)
3. **publications.html** - All publications organized by year with buttons for papers/PDFs/code
4. **experiences.html** - Research, teaching, and industry experience
5. **contact.html** - Detailed contact information and collaboration info
6. **blog.html** - Blog with one featured post

## Media Folder Structure:
Create a folder called **media** in your repository with these files:
- **me.png** - Your profile photo (recommended: 200x200px or larger, square)
- **logo.png** - GMU logo (recommended: transparent PNG)
- **cv.pdf** - Your full CV document
- **resume.pdf** - Your resume document

Your folder structure should look like:
```
your-repo/
├── index.html
├── resume.html
├── publications.html
├── experiences.html
├── contact.html
├── blog.html
├── README.md
└── media/
    ├── me.png
    ├── logo.png
    ├── cv.pdf
    └── resume.pdf
```

## How to Customize:

### 1. Add Your Media Files:
- Upload your photos and PDFs to the **media** folder
- The website is already configured to use these paths
- PDFs will open in browser's built-in viewer when clicked

### 2. Update Links for Papers/PDFs:
Look for buttons like this:
```html
<a href="#" class="btn btn-secondary">PDF</a>
```
Replace `#` with your actual PDF link:
```html
<a href="media/paper-name.pdf" class="btn btn-secondary">PDF</a>
```
Or use external links:
```html
<a href="https://arxiv.org/pdf/..." class="btn btn-secondary">PDF</a>
```

### 3. Add Your Information:
- Search for `[your-email]`, `[Advisor Name]`, `[Professor Name]`, etc.
- Replace with your actual information
- Update author names in publications
- Fill in office location, phone number

### 4. Update Social Media Links:
In the Contact section on **index.html**, update these:
```html
<a href="#" style="...">
```
Replace `#` with your actual URLs:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Twitter: `https://twitter.com/yourhandle`
- ORCID: `https://orcid.org/0000-0000-0000-0000`
- ResearchGate: `https://researchgate.net/profile/yourprofile`

### 5. Update Colors (Optional):
If you want SMU colors instead of GMU:
- Find `#006633` (green) → Replace with `#C8102E` (SMU red)
- Find `#FFCC33` (gold) → Replace with `#0033A0` (SMU blue)

## Deployment to GitHub Pages:

### Step 1: Create Repository
1. Go to github.com and create account
2. Create new repository: `yourusername.github.io`
3. Make it Public

### Step 2: Upload Files
Upload all files maintaining this structure:
```
yourusername.github.io/
├── index.html
├── resume.html
├── publications.html
├── experiences.html
├── contact.html
├── blog.html
├── README.md
└── media/
    ├── me.png
    ├── logo.png
    ├── cv.pdf
    └── resume.pdf
```

### Step 3: Enable GitHub Pages
1. Go to Settings → Pages
2. Source: Deploy from branch "main"
3. Save

### Step 4: Connect Custom Domain (md-nishat.com)
1. In Settings → Pages, add custom domain: `md-nishat.com`
2. Create file named `CNAME` (no extension) with content: `md-nishat.com`
3. Update DNS at your domain registrar:
   - Add 4 A records pointing to GitHub's IPs (see main deployment guide)
   - Add CNAME record for www

## PDF Viewer Features:
- **"View CV/Resume (PDF)"** buttons open PDFs in browser
- **"Download CV/Resume"** buttons download directly
- Works on all modern browsers
- Mobile-friendly

## Tips:
- Keep folder structure exactly as shown
- Use lowercase for all filenames
- PNG format recommended for images (supports transparency)
- PDF files can be any size, but smaller is better for loading speed
- Test locally by opening index.html in browser

## Need Help?
- All styling is in the `<style>` tags at top of each file
- Colors, fonts, and spacing can be easily adjusted
- The design is responsive (works on mobile automatically)
- Professional Networks buttons are now on the home page under Contact

Good luck with your website! 🚀
