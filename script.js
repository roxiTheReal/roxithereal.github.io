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

const prides = [
  "trans",
  "enby",
  "aroace",
];

const fyis = [
  "AI",
  "Elon Musk",
  "Donald Trump",
  "ICE",
  "MAGAs",
];

// === TAGLINES ===
const taglines = [
  "meow :3",
  "i eat cement",
  "nothing to look at here",
  "<span class=\"trans\">tramsgrendrer</span>",
  "cool bug facts!<br />one day you will have to answer for your actions...<br />and god... may not be so... merciful.",
  "<del>6 7</del> we don't do that shit here",
  "<em>you, yes you! you are- VEEEERY good!!</em> -heavy tf2",
  "please do not the cat",
  "<b>the fog is coming. you need to run.</b>",
  "i be <span class=\"trans\">transing</span> my <span class=\"trans\">gender</span> :3",
  "also try Minecraft!",
  "also try Terraria!",
  "you've got mail!<br /><small>(it's a pipe bomb)</small>",
  () => `be <span class="${prides[Math.floor(Math.random() * prides.length)]}">gay</span>, do crime >:3`,
  () => `fuck ${fyis[Math.floor(Math.random() * fyis.length)]}`,
  "hey Vsauce, michael here! your home security is great...<br /><em>or is it?</em>",
  "my source is that i made it the fuck up",
  "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
  "*cat noises*",
];

function resolveTagline(tagline) {
  return typeof tagline === "function" ? tagline() : tagline;
}

let lastIndex = -1;

function setRandomTagline() {
  let index;
  do {
    index = Math.floor(Math.random() * taglines.length);
  } while (index === lastIndex);
  lastIndex = index;

  const raw = taglines[index];
  const resolved = resolveTagline(raw);

  document.querySelector('.hero-tagline').innerHTML = resolved;
}

setRandomTagline();
setInterval(setRandomTagline, 7000);

// === CURRENT YEAR ===
document.getElementById('currentYear').textContent = new Date().getFullYear();