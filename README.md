# Your Academic Website

## Files Included:
1. **index.html** - Home page with profile photo, announcement, news, and selected publications
2. **resume.html** - Complete CV with education, experience, awards, and skills
3. **publications.html** - All publications organized by year with buttons for papers/PDFs/code
4. **experiences.html** - Research, teaching, and industry experience
5. **transcript.html** - Academic coursework and grades
6. **contact.html** - Contact information and social links
7. **blog.html** - Blog posts about research and PhD life

## How to Customize:

### 1. Replace Your Photo:
In **index.html**, find this line:
```html
<img src="https://via.placeholder.com/200" alt="Nishat Raihan">
```
Replace with:
```html
<img src="your-photo.jpg" alt="Nishat Raihan">
```
(Put your photo file in the same folder as the HTML files)

### 2. Update Links for Papers/PDFs:
Look for buttons like this:
```html
<a href="#" class="btn btn-secondary">PDF</a>
```
Replace `#` with your actual PDF link:
```html
<a href="papers/mhumaneval.pdf" class="btn btn-secondary">PDF</a>
```

### 3. Add Your Information:
- Search for `[your-email]`, `[Advisor Name]`, `[Professor Name]`, etc.
- Replace with your actual information
- Update author names in publications
- Fill in office location, phone number

### 4. Update Colors (Optional):
If you want SMU colors instead of GMU:
- Find `#006633` (green) → Replace with `#C8102E` (SMU red)
- Find `#FFCC33` (gold) → Replace with `#0033A0` (SMU blue)

### 5. Social Media Links:
In **contact.html**, update these:
```html
<a href="#" class="social-btn" target="_blank">
```
Replace `#` with your GitHub, LinkedIn, Twitter URLs

## Deployment Options:

### Option 1: GitHub Pages (FREE)
1. Create account at github.com
2. Create repository named `yourusername.github.io`
3. Upload all HTML files
4. Visit `https://yourusername.github.io`

### Option 2: Netlify Drop (EASIEST)
1. Go to netlify.com/drop
2. Drag and drop all files
3. Get instant URL (customize later)

### Option 3: Vercel
1. Sign up at vercel.com
2. Import your files
3. Deploy in seconds

### Custom Domain:
All three options above support custom domains (md-nishat.com).
Just update your DNS settings to point to your hosting provider.

## Tips:
- Keep all HTML files in the same folder
- If you add images/PDFs, keep them in the same folder or create a subfolder
- Test locally by opening index.html in your browser before deploying
- Use "Find and Replace" in any text editor to quickly update repeated information

## Need Help?
- All styling is in the `<style>` tags at the top of each file
- Colors, fonts, and spacing can be easily adjusted
- The design is responsive (works on mobile automatically)

Good luck with your website! 🚀
