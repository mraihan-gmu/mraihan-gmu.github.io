# md-nishat.com

Personal academic website for Nishat Raihan, incoming Provost's Postdoctoral
Fellow at the University of Notre Dame. Plain static HTML and CSS, no build
step, deployed through GitHub Pages with the custom domain in `CNAME`.

## Structure

```
index.html              Home: profile, about, research, selected publications
publications.html       Full publication list by category
education.html          Degrees
service.html            Organizing committees, reviewing, leadership, funding
experience.html         Research, industry, teaching, mentoring
honors-awards.html      Awards and bibliometrics
talks.html              Invited talks
personal.html           Notes beyond the CV, plus a Writing section
blog.html               Blog index (linked from the Personal page)
blog-post-mhumaneval.html   First blog post
assets/style.css        Shared design system (Notre Dame palette, light/dark)
assets/main.js          Theme toggle and mobile menu
media/                  cv.pdf, profile.jpg, logo.png
CNAME                   Custom domain (md-nishat.com)
.nojekyll               Tells GitHub Pages to serve files as-is
```

The top navigation is identical on every page: Home, Publications,
Education, Service, Experience, Honors & Awards, CV (the PDF in `media/`),
Talks, Personal.

## Deploy

The Git remote and `main` branch are already configured. To publish any
change:

```bash
git add -A
git commit -m "Update site"
git push origin main
```

GitHub Pages rebuilds automatically within a minute or two.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Common edits

**Replace the CV.** Overwrite `media/cv.pdf`. The CV tab and the buttons
on the Publications page point at that file.

**Replace the profile photo.** Overwrite `media/profile.jpg` with a square
image (about 640x640 is enough).

**Swap an institution badge for a real logo.** The badges are CSS, defined
once in `assets/style.css` under the `.crest` rules. To use an official
logo image instead, drop the file in `media/` and replace the matching
`<div class="crest ...">XX</div>` with an `<img>` in that page.

**Add a blog post.**

1. Copy `blog-post-mhumaneval.html` to a new file, for example
   `blog-post-yourtopic.html`.
2. Replace the title, date, and article body. Keep the surrounding
   nav, footer, and `<article>` structure.
3. In `blog.html`, add another `<article class="post-card">` block
   that links to the new file. Use the existing post as the template.

## Notes

- The dashes in date ranges (for example `Aug 2026 – 2028`) are en
  dashes, which is the correct typography for ranges. There are no em
  dashes anywhere in the site.
- Dark mode follows the system setting and can be toggled; the choice
  is stored in the browser.
