# Media Folder Setup Guide

## Create this folder structure in your GitHub repository:

```
your-github-repo/
├── index.html
├── resume.html
├── publications.html
├── experiences.html
├── contact.html
├── blog.html
├── README.md
└── media/              ← CREATE THIS FOLDER
    ├── me.png          ← Your profile photo
    ├── logo.png        ← GMU logo
    ├── cv.pdf          ← Your CV
    └── resume.pdf      ← Your resume
```

## File Specifications:

### me.png (Your Profile Photo)
- **Format:** PNG or JPG
- **Recommended Size:** 200x200 pixels minimum (square)
- **Optimal:** 400x400 pixels for retina displays
- **What it's for:** Appears in the header of your home page

### logo.png (University Logo)
- **Format:** PNG (preferably with transparent background)
- **Recommended Height:** 50-80 pixels
- **What it's for:** Appears below your name on home page
- **Where to get GMU logo:** https://brand.gmu.edu/logos/

### cv.pdf (Full Curriculum Vitae)
- **Format:** PDF
- **What it's for:** Detailed academic CV with all publications, experience
- **Access:** "View CV" and "Download CV" buttons on Resume page

### resume.pdf (Short Resume)
- **Format:** PDF
- **What it's for:** Condensed 1-2 page resume
- **Access:** "View Resume" and "Download Resume" buttons on Resume page

## How to Upload to GitHub:

### Method 1: Via GitHub Website
1. In your repository, click "Add file" → "Create new file"
2. Type `media/me.png` in the filename box (this creates the folder)
3. Click "Choose your files" to upload me.png
4. Commit the file
5. Repeat for other files (logo.png, cv.pdf, resume.pdf)

### Method 2: Via Git Command Line
```bash
# In your local repository folder
mkdir media
# Copy your files into the media folder
git add media/
git commit -m "Add media files"
git push
```

### Method 3: Drag and Drop
1. Create a "media" folder on your computer
2. Put all 4 files inside it
3. In GitHub, click "Add file" → "Upload files"
4. Drag the entire media folder
5. Commit changes

## Testing Locally:

Before uploading to GitHub, test locally:
1. Create the media folder in the same directory as your HTML files
2. Add all 4 files
3. Open index.html in your browser
4. Check if your photo and logo appear
5. Click the PDF buttons on the Resume page to test

## Common Issues:

**Photo not showing:**
- Check file is named exactly `me.png` (lowercase)
- Check file is in `media/` folder
- Try clearing browser cache

**Logo not showing:**
- Check file is named exactly `logo.png` (lowercase)
- Check file is in `media/` folder
- Make sure PNG has transparent background for best results

**PDFs not opening:**
- Check files are named exactly `cv.pdf` and `resume.pdf`
- Check files are in `media/` folder
- Make sure PDFs are not corrupted

## Optional: Adding More Media

You can add more files to the media folder for your publications:
```
media/
├── me.png
├── logo.png
├── cv.pdf
├── resume.pdf
├── paper1.pdf          ← Add your paper PDFs
├── paper2.pdf
├── mhumaneval-slides.pdf
└── ...
```

Then link to them in your HTML:
```html
<a href="media/paper1.pdf" class="btn btn-secondary">PDF</a>
```

Good luck! 🚀
