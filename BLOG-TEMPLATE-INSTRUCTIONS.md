# Blog Post Template with Like & Comment Functionality

## How to Set Up Disqus (One-Time Setup)

1. **Create a Disqus Account** (if you haven't already):
   - Go to https://disqus.com/
   - Sign up for a free account
   - Click "Get Started" and choose "I want to install Disqus on my site"

2. **Create a Site**:
   - Enter your website name (e.g., "Nishat Raihan")
   - Choose a unique Disqus shortname (e.g., "nishat-raihan")
   - Select the free "Basic" plan
   - Choose platform: "I don't see my platform listed, install manually with Universal Code"

3. **Update the Disqus Script**:
   - In all your blog post HTML files, find this line:
     ```javascript
     s.src = 'https://nishat-raihan.disqus.com/embed.js';
     ```
   - Replace `nishat-raihan` with YOUR actual Disqus shortname

4. **Enable Guest Commenting** (Optional but Recommended):
   - Go to your Disqus admin panel
   - Navigate to Settings > Community
   - Under "Guest Commenting", enable it
   - This allows people to comment without creating a Disqus account

## How to Add Like & Comment to New Blog Posts

### For the Blog Post Article Page (e.g., blog-post-yourpost.html)

Add this code BEFORE the closing `</article>` tag and AFTER your author bio:

```html
<!-- Like and Share Section -->
<div style="margin-top: 40px; padding: 30px; background: white; border-top: 2px solid #e0e0e0; display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 10px;">
        <button id="likeButton" style="background: #006633; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; font-size: 16px; display: flex; align-items: center; gap: 8px; transition: all 0.3s;">
            <span id="likeIcon">👍</span>
            <span>Like</span>
            <span id="likeCount" style="background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 12px; font-weight: bold;">0</span>
        </button>
    </div>
    <div style="color: #666; font-size: 14px;">
        Did you find this article helpful? Let me know!
    </div>
</div>
</article>

<!-- Comments Section -->
<div style="background: white; padding: 40px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-bottom: 30px;">
    <h2 style="color: #006633; font-size: 24px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #FFCC33;">Comments</h2>
    <div id="disqus_thread"></div>
    <noscript>Please enable JavaScript to view the comments.</noscript>
</div>
```

Add these scripts BEFORE the closing `</body>` tag:

```html
<!-- Like Button Script -->
<script>
    // Like functionality with localStorage
    const postId = 'YOUR-UNIQUE-POST-ID'; // CHANGE THIS for each post!
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    const likeIcon = document.getElementById('likeIcon');

    // Initialize like count from localStorage
    let likes = parseInt(localStorage.getItem(postId + '-likes')) || 0;
    let userLiked = localStorage.getItem(postId + '-userLiked') === 'true';

    // Update display
    function updateLikeButton() {
        likeCount.textContent = likes;
        if (userLiked) {
            likeButton.style.background = '#FFCC33';
            likeButton.style.color = '#006633';
            likeIcon.textContent = '❤️';
        } else {
            likeButton.style.background = '#006633';
            likeButton.style.color = 'white';
            likeIcon.textContent = '👍';
        }
    }

    updateLikeButton();

    // Handle like button click
    likeButton.addEventListener('click', function() {
        if (userLiked) {
            likes--;
            userLiked = false;
        } else {
            likes++;
            userLiked = true;
        }
        
        localStorage.setItem(postId + '-likes', likes);
        localStorage.setItem(postId + '-userLiked', userLiked);
        updateLikeButton();
    });

    // Hover effect
    likeButton.addEventListener('mouseenter', function() {
        if (!userLiked) {
            this.style.background = '#004d26';
        } else {
            this.style.background = '#e6b82e';
        }
    });

    likeButton.addEventListener('mouseleave', function() {
        if (!userLiked) {
            this.style.background = '#006633';
        } else {
            this.style.background = '#FFCC33';
        }
    });
</script>

<!-- Disqus Comments Script -->
<script>
    var disqus_config = function () {
        this.page.url = 'https://mraihan-gmu.github.io/YOUR-POST-FILENAME.html'; // CHANGE THIS!
        this.page.identifier = 'YOUR-UNIQUE-POST-ID'; // CHANGE THIS (same as postId above)!
        this.page.title = 'Your Blog Post Title'; // CHANGE THIS!
    };
    
    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://nishat-raihan.disqus.com/embed.js'; // Use YOUR Disqus shortname
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
```

**Important:** For each new blog post:
1. Choose a unique `postId` (e.g., 'my-second-post', 'ai-research-2025')
2. Update the Disqus page URL to match your actual file path
3. Update the Disqus identifier to match your postId
4. Update the blog post title in Disqus config

### For the Blog Listing Page (blog.html)

Add the like count display in the blog meta section:

```html
<div class="blog-meta">
    <span>📅 March 15, 2025</span>
    <span>👤 Nishat Raihan</span>
    <span>📖 8 min read</span>
    <span id="post-likes-YOUR-POST-ID">👍 <span class="like-count">0</span> likes</span>
</div>
```

Add this script at the bottom of blog.html (before `</body>`):

```html
<script>
    // Display like counts from localStorage on the blog listing page
    const postId1 = 'mhumaneval-blog-post';
    const likes1 = parseInt(localStorage.getItem(postId1 + '-likes')) || 0;
    const likeCountElement1 = document.querySelector('#post-likes-mhumaneval .like-count');
    if (likeCountElement1) {
        likeCountElement1.textContent = likes1;
    }

    // For your second post, add:
    // const postId2 = 'YOUR-SECOND-POST-ID';
    // const likes2 = parseInt(localStorage.getItem(postId2 + '-likes')) || 0;
    // const likeCountElement2 = document.querySelector('#post-likes-YOUR-SECOND-POST-ID .like-count');
    // if (likeCountElement2) {
    //     likeCountElement2.textContent = likes2;
    // }
</script>
```

## How It Works

### Like Functionality
- Uses browser's **localStorage** to store like counts
- Each blog post has a unique ID
- Likes are stored locally in the user's browser
- When a user clicks like, it toggles between liked (❤️) and not liked (👍)
- The count persists across page visits on the same browser

**Note:** Since this is client-side only:
- Likes are not synced across different browsers or devices
- Each user sees their own like state
- This is perfect for a static website without a backend

### Comment Functionality
- Uses **Disqus** (free service) for comments
- Allows guest commenting (no login required if you enable it)
- Comments are stored on Disqus servers
- Disqus provides moderation tools, spam protection, and notifications
- Comments are synced across all devices

## Styling Notes

The like button and comment section use your website's color scheme:
- Primary color: #006633 (green)
- Accent color: #FFCC33 (yellow)
- Background: white and #f8f9fa (light gray)

## Testing

1. After adding the code, open your blog post in a browser
2. Click the like button - it should change from 👍 to ❤️ and increment the count
3. Go back to the blog listing page - you should see the like count there too
4. The comments section will load after you set up Disqus

## Troubleshooting

### Comments not showing:
- Make sure you've created a Disqus account and site
- Check that the Disqus shortname in the script matches your actual shortname
- Wait a few seconds for Disqus to load

### Likes not working:
- Check browser console for errors (F12 > Console)
- Make sure each blog post has a unique `postId`
- Clear localStorage and try again: `localStorage.clear()` in browser console

### Likes not appearing on listing page:
- Make sure the `postId` in the blog post matches the one in blog.html script
- Make sure the element ID matches: `#post-likes-YOUR-POST-ID`
