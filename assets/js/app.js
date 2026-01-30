/* ======================================================
   GLOBAL HEADER (Injected once – all pages)
   ====================================================== */

const header = document.getElementById("site-header");

header.innerHTML = `
<nav class="main-nav">
  <div class="nav-inner">

    <a href="index.html" class="brand">
      <img src="assets/images/logo.png" alt="I.Z. Verse Studio">
    </a>

    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="who-we-are.html">Who We Are</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="ai-gifts.html">AI Gifts</a></li>
    </ul>

    <button class="mobile-burger" aria-label="menu">☰</button>

  </div>
</nav>

<div class="mobile-menu">
  <a href="index.html">Home</a>
  <a href="who-we-are.html">Who We Are</a>
  <a href="services.html">Services</a>
  <a href="portfolio.html">Portfolio</a>
  <a href="contact.html">Contact</a>
  <a href="ai-gifts.html">AI Gifts</a>
</div>

<div class="mobile-utilities">
  <button class="util-theme">Theme</button>
  <button class="util-lang">EN / AR</button>
  <button class="util-close">✕</button>
</div>
`;


/* ======================================================
   NAV BEHAVIOR
   ====================================================== */

const nav = document.querySelector(".main-nav");
const burger = document.querySelector(".mobile-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileUtilities = document.querySelector(".mobile-utilities");

let lastScroll = 0;

/* hide on scroll down – show only when reaching top */
window.addEventListener("scroll", () => {

  const y = window.scrollY;

  if (y > lastScroll && y > 80) {
    nav.classList.add("nav-hidden");
  } else {
    if (y < 10) nav.classList.remove("nav-hidden");
  }

  lastScroll = y;
});

/* mobile menu toggle */
burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

/* mobile utilities bar – once per session */
if (window.innerWidth <= 768) {

  if (!sessionStorage.getItem("mobileUtilsClosed")) {

    mobileUtilities.classList.add("show");

    setTimeout(() => {
      mobileUtilities.classList.remove("show");
      sessionStorage.setItem("mobileUtilsClosed", "1");
    }, 5000);

  }
}

/* close utilities */
document.querySelector(".util-close").addEventListener("click", () => {
  mobileUtilities.classList.remove("show");
  sessionStorage.setItem("mobileUtilsClosed", "1");
});
