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

// === TAGLINES ===
const taglines = [
  "meow :3",
  "i eat cement",
  "nothing to look at here",
  "<span class=\"trans\">tramsgrendrer</span>",
  "cool bug facts!<br />one day you will have to answer for your actions...<br />and god... may not be so... merciful.",
  "WOMEM,,,,",
  "<del>6 7</del> we don't do that shit here",
  "<em>you, yes you! you are- VEEEERY good!!</em> -heavy tf2"
];

let lastIndex = -1;

function setRandomTagline() {
  let index;
  do {
    index = Math.floor(Math.random() * taglines.length);
  } while (index === lastIndex);
  lastIndex = index;
  document.querySelector('.hero-tagline').innerHTML = taglines[index];
}

setRandomTagline();
setInterval(setRandomTagline, 7000);

// === CURRENT YEAR ===
document.getElementById('currentYear').textContent = new Date().getFullYear();