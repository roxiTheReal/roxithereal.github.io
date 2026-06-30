// === LUCIDE ICONS ===
lucide.createIcons();

// if (window.location.hostname === "da-meower.es.eu.org") {
//   const notice = document.getElementById("mirror-notice");
//   notice.style.display = "block";

//   notice.addEventListener("click", () => {
//     notice.classList.add("hiding");
//     notice.addEventListener(
//       "animationend",
//       () => {
//         notice.style.display = "none";
//       },
//       { once: true },
//     );
//   });
// }

// === NAMES SETUP ===
const allNames = ["Roxi", "Kit", "Romi", "Junix"];
const subdomain = location.hostname.split(".")[0];
const primaryName =
  allNames.find((n) => n.toLowerCase() === subdomain.toLowerCase()) ?? "Roxi";
const orderedNames = [
  primaryName,
  ...allNames.filter((n) => n !== primaryName),
];

// === NAVBAR NAME ===
document.querySelectorAll(".link-full").forEach((el) => {
  el.textContent = el.textContent.replaceAll("roxi", primaryName.toLowerCase());
});

// === OTHER NAMES FOR ABOUT ===
const others = orderedNames.slice(1);
const othersText = others.slice(0, -1).join(", ") + " and " + others.at(-1);
document.querySelector(".other-names").textContent = othersText;

// === NAVBAR ===
document.fonts.ready.then(() => {
  document.querySelectorAll(".nav-link").forEach((link) => {
    const full = link.querySelector(".link-full");
    const style = window.getComputedStyle(link);
    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);

    const shortWidth = link.getBoundingClientRect().width;
    const fullWidth = full.scrollWidth + paddingLeft + paddingRight;

    link.style.width = shortWidth + "px";

    link.addEventListener("mouseenter", () => {
      link.style.width = fullWidth + "px";
    });

    link.addEventListener("mouseleave", () => {
      link.style.width = shortWidth + "px";
    });
  });
});

// === HERO NAME TYPEWRITER ===
const base = primaryName;
const extra = "/" + orderedNames.slice(1).join("/");
const full = base + extra;

document.querySelectorAll(".hero-name").forEach((heroName) => {
  heroName.textContent = primaryName;

  let interval;

  heroName.addEventListener("mouseenter", () => {
    clearInterval(interval);
    let i = base.length;
    interval = setInterval(() => {
      heroName.textContent = full.slice(0, i + 1);
      i++;
      if (i === full.length) clearInterval(interval);
    }, 80);
  });

  heroName.addEventListener("mouseleave", () => {
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

document.title = `${full.toLowerCase()}'s page :3`;

// === CURRENT YEAR ===
document.getElementById("currentYear").textContent = new Date().getFullYear();

// === TAGLINES (commented out — not used on about page) ===
// const taglines = [ ... ];
// let lastIndex = -1;
// function setRandomTagline() { ... }
// setRandomTagline();
// setInterval(setRandomTagline, 7000);
