# md-nishat.com

Personal academic website for Nishat Raihan, incoming Provost's Postdoctoral
Fellow at the University of Notre Dame. Plain static HTML and CSS, no build
step, deployed through GitHub Pages with the custom domain in `CNAME`.

Design: pure white background with the Notre Dame palette (Blue `#0C2340`,
Dome Gold `#C99700`) used for text, lines, and accents. Light mode only.

## Structure

```
index.html            Home: profile, about (with dissertation button), research boxes, recent news
research.html         Funding (with co-PI call-out) + the four research threads with major papers
publications.html     Full publication list with colored area pills, matching the CV tags
cv.html               The whole CV in HTML: appointments, education, awards, talks,
                      experience, teaching, grants, mentoring, service, industry
personal.html         Books (with covers), Movie Theatre, Anime, Sports, Writing
blog.html             Blog index (not in the top nav)
blog-post-mhumaneval.html   First blog post
education.html, experience.html, service.html,
honors-awards.html, talks.html              Redirect stubs into cv.html sections
assets/style.css      Shared design system
assets/main.js        Mobile menu, personal sub-tabs, dissertation modal, cover fallback
media/                cv.pdf, profile.png, mybook.png, logo.png
media/logos/          Institution and team logo tiles (PNG)
media/covers/         Optional local book covers (see the README inside)
CNAME                 Custom domain (md-nishat.com)
.nojekyll             Tells GitHub Pages to serve files as-is
```

The top navigation is identical on every page: Home, Research, Publications,
CV, Personal. It collapses to a single menu button below 880px wide.

## Deploy

The Git remote and `main` branch are already configured. To publish:

```bash
git add -A
git commit -m "Redesign: white background, five tabs, updated content"
git push origin main
```

GitHub Pages rebuilds automatically within a minute or two.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Common edits

**Dissertation link.** The "Read my dissertation" button on the home page
currently opens an "In progress" pop-up. When the ProQuest link is live,
open `index.html`, find the HTML comment above the button, and swap the
`<button class="btn js-diss">` block for the `<a class="btn" href="...">`
shown in that comment. The pop-up markup at the bottom of the file can then
be deleted.

**Recent news.** Lives in `index.html` inside `<div class="newslist">`.
Add a `<div class="news-item">` at the top; newest first.

**Book covers.** Covers on the Personal page try `media/covers/<name>.jpg`
first, then a hosted image (Open Library or Project Gutenberg, set in the
`data-alt` attribute), then a styled navy placeholder with the title and
author. To pin any cover, drop a JPG into `media/covers/` with the filename
listed in `media/covers/README.txt`. No HTML changes needed.

**Team logos.** The Sports tab loads the official Warriors and Manchester
United crests from Wikipedia. If either link ever breaks, the page falls
back to the local placeholder badges `media/logos/warriors.png` and
`media/logos/manutd.png`; overwrite those files (square PNG, about 256x256)
to change the fallback, or edit the `src` in `personal.html` to serve a
local file directly. The institution tiles (`nd.png`, `gmu.png`, `iut.png`,
`samsung.png`, `uttara.png`, `duke.png`, `fresno.png`, `pvamu.png`,
`award.png`) are placeholder monograms; replace each under the same
filename.

**Novella cover.** `media/mybook.png` is the cover of Nothing Leaves the
Island. Overwrite the file under the same name to update it.

**Replace the CV.** Overwrite `media/cv.pdf`.

**Replace the profile photo.** Overwrite `media/profile.png`.

**Add a personal item.** Open `personal.html`, find the relevant
`<div class="ppanel" id="panel-...">`, and add to the `bookgrid`,
`ranklist`, or `plist` inside it.

## Notes

- Dashes in date ranges (for example `2026 – 2028`) are en dashes, the
  correct typography for ranges. There are no em dashes anywhere.
- The publication area pills use one class per area in `assets/style.css`
  (`cat-code`, `cat-nlp`, `cat-safety`, `cat-edu`, `cat-vision`,
  `cat-time`, `cat-mltest`); recolor them there.
