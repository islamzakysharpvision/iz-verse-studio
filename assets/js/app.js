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
