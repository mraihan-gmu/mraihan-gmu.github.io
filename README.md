# Website Updates - Summary

## Changes Made

### 1. Publications Page (`publications.html`)
- ✅ **Removed per-paper citation counts** - Only overall citation stats are shown in the header (308 citations, h-index: 9, i10-index: 8)
- ✅ **More condensed layout** - Reduced padding and margins throughout
- ✅ **Smaller fonts** - Font sizes reduced for better information density
- ✅ **Only buttons with available URLs** - Removed all placeholder buttons; only showing PDF, Paper, Code, Dataset, and Model buttons where actual URLs exist
- ✅ All publication data accurately updated from your CV

### 2. Experience Page
- ✅ **Completely removed** - The experiences.html page is no longer linked
- ✅ **Navigation updated** - All navigation menus across all pages have been updated to remove the "Experiences" link

### 3. Blog Page (`blog.html`)
- ✅ **Updated navigation** - Removed "Experiences" link
- ✅ **Working blog post** - The placeholder post now links to a full article
- ✅ **Like count display** - Shows the number of likes for each blog post

### 4. New Blog Post Page (`blog-post-mhumaneval.html`)
- ✅ **Full article created** - A comprehensive 8-minute read about building mHumanEval
- ✅ **Professional layout** - Clean, readable design with proper sections
- ✅ **Working "Read More" button** - Clicking "Read More" on the blog page opens the full article
- ✅ **Like functionality** - Interactive like button that tracks user likes (no login required)
- ✅ **Comment system** - Disqus integration for anonymous comments (no login required)
- ✅ **Actual content** - ~2000+ words of original content about:
  - The genesis and motivation behind mHumanEval
  - Technical challenges of 204-language translation
  - Surprising research findings
  - Key technical decisions
  - Lessons for the research community
  - Future directions
- ✅ **Links to paper and GitHub** - Includes actual links to the arXiv paper and GitHub repository

### 5. Other Pages Updated
- ✅ `index.html` - Navigation updated (Experiences link removed)
- ✅ `resume.html` - Navigation updated (Experiences link removed)
- ✅ `contact.html` - Navigation updated (Experiences link removed)

## New Features: Like & Comment System

### Like Functionality
- **No login required** - Users can like posts anonymously
- **Visual feedback** - Button changes from 👍 to ❤️ when liked
- **Like counter** - Shows total likes on both the blog post and listing page
- **Toggle support** - Users can unlike by clicking again
- **Persistent** - Likes are saved in browser's localStorage

### Comment System (Disqus)
- **Guest commenting enabled** - Users can comment without creating an account
- **Spam protection** - Disqus provides automatic spam filtering
- **Moderation tools** - You can moderate comments from Disqus dashboard
- **Notifications** - Get notified when someone comments

## Files Included

1. `index.html` - Homepage (navigation updated)
2. `resume.html` - Resume/CV page (navigation updated)
3. `publications.html` - Publications page (condensed, no per-paper citations, clean buttons)
4. `contact.html` - Contact page (navigation updated)
5. `blog.html` - Blog listing page (with like counts and working link to article)
6. `blog-post-mhumaneval.html` - Full blog post article with like and comment functionality (NEW)
7. `BLOG-TEMPLATE-INSTRUCTIONS.md` - Complete guide for adding like/comment to future posts (NEW)
8. `README.md` - This file

## How to Use

1. Replace your existing HTML files with these updated versions
2. Make sure `blog-post-mhumaneval.html` is in the same directory as the other HTML files
3. All navigation links should work correctly
4. The "Read More" button on the blog page will now open the full article

### Setting Up Disqus (One-Time - Required for Comments)

1. Go to https://disqus.com/ and create a free account
2. Create a new site for your blog
3. Get your Disqus "shortname" (e.g., "nishat-raihan")
4. In `blog-post-mhumaneval.html`, find this line:
   ```javascript
   s.src = 'https://nishat-raihan.disqus.com/embed.js';
   ```
5. Replace `nishat-raihan` with YOUR actual Disqus shortname
6. Enable "Guest Commenting" in your Disqus settings (Settings > Community)

### For Future Blog Posts

See `BLOG-TEMPLATE-INSTRUCTIONS.md` for detailed instructions on adding like and comment functionality to new blog posts.

## Notes

- The Experience page has been completely removed from the site navigation
- Per-paper citation counts have been removed from the publications page
- Only the overall citation statistics (308 citations, h-index: 9, i10-index: 8) are displayed
- All buttons on the publications page now link to actual URLs (no more placeholders)
- The blog now has actual content - a detailed article about the mHumanEval benchmark
- Like and comment functionality is fully integrated and requires no user registration
