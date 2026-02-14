/* =========================================================
   I.Z. VERSE STUDIO – GLOBAL JS
   Clean • Stable • Production Ready
========================================================= */


/* ================= INTRO (ONCE PER SESSION) ================= */

window.addEventListener("load", () => {

  const intro = document.getElementById("intro");
  if (!intro) return;

  const alreadyPlayed = sessionStorage.getItem("izIntroPlayed");

  if (alreadyPlayed) {
    intro.remove();
    return;
  }

  sessionStorage.setItem("izIntroPlayed", "true");

  setTimeout(() => {
    intro.classList.add("fade-out");
    setTimeout(() => intro.remove(), 600);
  }, 2500);

});


/* ================= NAV HIDE WHEN SCROLLING ================= */

const nav = document.querySelector(".nav");

if (nav) {

  let lastScroll = 0;

  window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if (currentScroll > 20) {
      nav.classList.add("hide");
    } else {
      nav.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });

}


/* ================= MOBILE MENU ================= */

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("show");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  });

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      mobileMenu.classList.remove("show");
    }
  });

}


/* ================= HERO SLIDER (FASTER + SMOOTH) ================= */

const slides = document.querySelectorAll(".hero-slide");

if (slides.length > 0) {

  let current = 0;
  slides[current].classList.add("active");

  setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  }, 1500); // Faster transition (1.5s)

}


/* ================= SHARE BUTTON ================= */

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

  shareBtn.addEventListener("click", async () => {

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check out I.Z. Verse Studio",
          url: window.location.href
        });
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard.");
    }

  });

}


/* ================= THEME TOGGLE ================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

  const savedTheme = localStorage.getItem("izTheme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("izTheme", "light");
    } else {
      localStorage.setItem("izTheme", "dark");
    }

  });

}


/* ================= LEGAL MODAL ================= */

const legalPulse = document.getElementById("legalPulse");
const legalModal = document.getElementById("legalModal");
const legalClose = document.getElementById("legalClose");

if (legalPulse && legalModal) {

  legalPulse.addEventListener("click", () => {
    legalModal.classList.add("show");
  });

}

if (legalClose && legalModal) {

  legalClose.addEventListener("click", () => {
    legalModal.classList.remove("show");
  });

}

window.addEventListener("click", (e) => {
  if (e.target === legalModal) {
    legalModal.classList.remove("show");
  }
});

