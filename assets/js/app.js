/* ================= INTRO (once per session) ================= */

const intro = document.getElementById("intro");

if (intro) {
  if (sessionStorage.getItem("iz_intro_played")) {
    intro.remove();
  } else {
    sessionStorage.setItem("iz_intro_played", "1");

    setTimeout(() => {
      intro.style.display = "none";
    }, 2200);
  }
}


/* ================= MOBILE MENU ================= */

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}


/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

if (slides.length) {

  slides[0].classList.add("active");

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);
}
/* ================= SHARE ================= */

const shareBtn = document.getElementById("shareBtn");

if (shareBtn && navigator.share) {
  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.share({
        title: document.title,
        url: window.location.href
      });
    } catch(e){}
  });
}


/* ================= THEME ================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
}


/* ================= LEGAL MODAL ================= */

const legalPulse = document.getElementById("legalPulse");
const legalModal = document.getElementById("legalModal");
const legalClose = document.getElementById("legalClose");

if (legalPulse && legalModal && legalClose) {

  legalPulse.addEventListener("click", () => {
    legalModal.classList.add("show");
  });

  legalClose.addEventListener("click", () => {
    legalModal.classList.remove("show");
  });

}

/* ================= NEWSLETTER ================= */

const newsletterForm = document.getElementById("newsletterForm");

if(newsletterForm){

  newsletterForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("newsletterEmail").value.trim();

    if(!email) return;

    alert("Thank you for subscribing to I.Z. Verse Studio.");

    newsletterForm.reset();

    /*
      IMPORTANT:
      GitHub Pages is static.
      To actually send to:
      islamzakysico@gmail.com

      we will connect this later to:
      - Formspree OR
      - Google Forms OR
      - Serverless mail endpoint
    */
  });

}

