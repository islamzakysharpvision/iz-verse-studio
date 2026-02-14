/* ================= INTRO (once per session) ================= */

window.addEventListener("load", () => {

  const intro = document.getElementById("intro");

  if(!intro) return;

  if(sessionStorage.getItem("izIntroPlayed")){
    intro.remove();
    return;
  }

  sessionStorage.setItem("izIntroPlayed","true");

  setTimeout(() => {
    intro.remove();
  }, 2600);

});


/* ================= NAV HIDE / SHOW (only at top) ================= */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

  if(!nav) return;

  if(window.scrollY > 10){
    nav.classList.add("hide");
  }else{
    nav.classList.remove("hide");
  }

});


/* ================= MOBILE MENU ================= */

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if(burger && mobileMenu){

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  mobileMenu.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>{
      mobileMenu.classList.remove("show");
    });
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
  }, 2500); // was slower before, now 2.5s
}
/* ================= SHARE BUTTON ================= */

const shareBtn = document.getElementById("shareBtn");

if(shareBtn && navigator.share){

  shareBtn.addEventListener("click", async () => {

    try{
      await navigator.share({
        title: document.title,
        url: window.location.href
      });
    }catch(e){}

  });

}

