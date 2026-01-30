/* ---------------- INTRO (once per session) ---------------- */

window.addEventListener("load", () => {

  const intro = document.getElementById("intro");

  if(!intro) return;

  if(sessionStorage.getItem("iz_intro_done")){
    intro.remove();
    return;
  }

  sessionStorage.setItem("iz_intro_done","1");

  setTimeout(()=>{
    intro.remove();
  },2000);

});

/* ---------------- HERO SLIDER ---------------- */

const slides = document.querySelectorAll(".hero-slide");
let current = 0;

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

if(slides.length){
  showSlide(0);

  setInterval(()=>{
    current = (current + 1) % slides.length;
    showSlide(current);
  },4000);
}

/* ---------------- NAV AUTO HIDE ---------------- */

const nav = document.querySelector(".nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {

  const y = window.scrollY;

  if(y > lastScroll && y > 120){
    nav.classList.add("hide");
  }else{
    nav.classList.remove("hide");
  }

  lastScroll = y;

});

/* ---------------- MOBILE MENU ---------------- */

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if(burger && mobileMenu){
  burger.addEventListener("click",()=>{
    mobileMenu.classList.toggle("show");
  });
}
