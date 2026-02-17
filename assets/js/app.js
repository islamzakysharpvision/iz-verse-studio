/* =========================================================
   I.Z. VERSE STUDIO – MASTER JS
   Production Ready – Clean & Stable
========================================================= */


/* ================= INTRO (ONCE PER SESSION) ================= */

window.addEventListener("load", () => {

  const intro = document.getElementById("intro");
  if (!intro) return;

  const played = sessionStorage.getItem("izIntroPlayed");

  if (played) {
    intro.remove();
    return;
  }

  sessionStorage.setItem("izIntroPlayed", "true");

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity .6s ease";
    setTimeout(() => intro.remove(), 600);
  }, 2500);

});


/* ================= NAV HIDE ON SCROLL ================= */

const nav = document.querySelector(".nav");

if (nav) {

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("hide");
    } else {
      nav.classList.remove("hide");
    }
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

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      mobileMenu.classList.remove("show");
    }
  });

}


/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".hero-slide");

if (slides.length > 0) {

  let current = 0;
  slides[current].classList.add("active");

  setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  }, 4000);

}


/* ================= SHARE BUTTON ================= */

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

  shareBtn.addEventListener("click", async () => {

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Explore I.Z. Verse Studio",
          url: window.location.href
        });
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard.");
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


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


/* ================= PORTFOLIO VIDEO SAFETY ================= */

const portfolioVideos = document.querySelectorAll(".portfolio-item video");

portfolioVideos.forEach(video => {
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;

  // Attempt play (mobile compatibility)
  video.play().catch(() => {});
});
