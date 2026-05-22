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