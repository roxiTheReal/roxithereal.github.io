// === LUCIDE ICONS ===
lucide.createIcons();

// === NAVBAR ===
document.fonts.ready.then(() => {
  document.querySelectorAll('.nav-link').forEach(link => {
    const full = link.querySelector('.link-full');
    const style = window.getComputedStyle(link);
    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);

    const shortWidth = link.getBoundingClientRect().width;
    const fullWidth = full.scrollWidth + paddingLeft + paddingRight;

    link.style.width = shortWidth + 'px';

    link.addEventListener('mouseenter', () => {
      link.style.width = fullWidth + 'px';
    });

    link.addEventListener('mouseleave', () => {
      link.style.width = shortWidth + 'px';
    });
  });
});

// === HERO NAME TYPEWRITER ===
const base = 'Roxi';
const extra = '/Kit/Romi';
const full = base + extra;

document.querySelectorAll('.hero-name').forEach(heroName => {
  let interval;

  heroName.addEventListener('mouseenter', () => {
    clearInterval(interval);
    let i = base.length;
    interval = setInterval(() => {
      heroName.textContent = full.slice(0, i + 1);
      i++;
      if (i === full.length) clearInterval(interval);
    }, 80);
  });

  heroName.addEventListener('mouseleave', () => {
    clearInterval(interval);
    let i = Math.max(heroName.textContent.length, base.length);
    interval = setInterval(() => {
      heroName.textContent = full.slice(0, i - 1);
      i--;
      if (i <= base.length) {
        heroName.textContent = base;
        clearInterval(interval);
      }
    }, 80);
  });
});

// === CURRENT YEAR ===
document.getElementById('currentYear').textContent = new Date().getFullYear();

// === TAGLINES (commented out — not used on about page) ===
// const taglines = [ ... ];
// let lastIndex = -1;
// function setRandomTagline() { ... }
// setRandomTagline();
// setInterval(setRandomTagline, 7000);

fetch('/blog/posts.json')
  .then(res => res.json())
  .then(posts => {
    const list = document.getElementById('postList');
    posts.forEach(post => {
      list.innerHTML += `
        <li class="post-item">
          <a href="/blog/post.html?slug=${post.slug}" class="post-link">
            <span class="post-title">${post.title}</span>
            <span class="post-meta">
              <span class="post-date"><i data-lucide="calendar-days"></i> ${post.date}</span>
              <span class="post-read-time"><i data-lucide="clock"></i> ${post.readTime}</span>
            </span>
          </a>
        </li>
      `;
    });
    lucide.createIcons();
  });

// === POPULATE POST.HTML WITH BLOG POST ===
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

fetch(`/blog/posts.json`)
  .then(res => res.json())
  .then(posts => {
    const post = posts.find(p => p.slug === slug);
    if (!post) {
      document.getElementById('post-content').innerHTML = '<p>post not found.</p>';
      return;
    }

    fetch(`/blog/posts/${slug}.md`)
      .then(res => res.text())
      .then(md => {
        document.getElementById('post-content').innerHTML = `
          <a href="/blog/" class="post-back"><i data-lucide="arrow-left"></i> <span>back to blog</span></a>
          <header class="post-header">
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">
              <span><i data-lucide="calendar-days"></i> <span>${post.date}</span></span>
              <span><i data-lucide="clock"></i> <span>${post.readTime}</span></span>
            </div>
          </header>
          <div class="post-body">${marked.parse(md)}</div>
        `;
        lucide.createIcons();
      });
  });