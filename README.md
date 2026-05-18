# md-nishat.com

Personal academic website for Nishat Raihan, incoming Provost's Postdoctoral
Fellow at the University of Notre Dame. Plain static HTML and CSS, no build
step, deployed through GitHub Pages with the custom domain in `CNAME`.

## Structure

```
index.html              Home: profile + recent news (left), about, collaboration, research, selected publications
publications.html       Full publication list by category
education.html          Degrees
service.html            Organizing committees, reviewing, leadership, funding
experience.html         Research, industry, teaching, mentoring
honors-awards.html      Awards and bibliometrics
talks.html              Invited talks
personal.html           Books, Movie Theatre, Anime, Sports, Writing (left sub-nav)
blog.html               Blog index
blog-post-mhumaneval.html   First blog post
assets/style.css        Shared design system (Notre Dame palette, light/dark)
assets/main.js          Theme toggle, mobile menu, personal sub-tabs
media/                  cv.pdf, profile.jpg, logo.png
media/logos/            Institution logo tiles (PNG)
CNAME                   Custom domain (md-nishat.com)
.nojekyll               Tells GitHub Pages to serve files as-is
```

The top navigation is identical on every page: Home, Publications,
Education, Service, Experience, Honors & Awards, CV (the PDF in `media/`),
Talks, Personal. It collapses to a single menu button below 1180px wide.

## Deploy

The Git remote and `main` branch are already configured. To publish:

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

**Institution logos.** The files in `media/logos/` (`nd.png`, `gmu.png`,
`iut.png`, `samsung.png`, `uttara.png`, `duke.png`, `fresno.png`,
`pvamu.png`, `award.png`) are clean brand-colored placeholders. To use an
official logo, replace the file with the real PNG using the **same
filename**. Square images (about 256x256) look best. No HTML changes are
needed; Education, Experience, Talks, and Honors pick up the new file
automatically.

**Replace the CV.** Overwrite `media/cv.pdf`.

**Replace the profile photo.** Overwrite `media/profile.jpg` with a square
image (about 640x640).

**Recent news** lives in the left column of `index.html` inside
`<div class="profile-news">`. Add or edit `<div class="pn-item">` rows.

**Add a personal section item.** Open `personal.html`, find the relevant
`<div class="ppanel" id="panel-...">`, and add an `<li>` to a
`<ul class="plist">`. To add a whole new sub-tab, add one
`<button class="ptab-btn" data-tab="x">` in `.ptabs` and a matching
`<div class="ppanel" id="panel-x">`; the script wires it up by id.

**Add a blog post.**

1. Copy `blog-post-mhumaneval.html` to a new file.
2. Replace the title, date, and article body; keep the nav, footer,
   and `<article>` structure.
3. Add another `<article class="post-card">` block in `blog.html`.

## Notes

- Dashes in date ranges (for example `Aug 2026 – 2028`) are en dashes,
  the correct typography for ranges. There are no em dashes anywhere.
- Dark mode follows the system setting and can be toggled; the choice
  is stored in the browser.
