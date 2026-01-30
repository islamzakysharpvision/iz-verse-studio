let lastScroll = 0;
const navbar = document.querySelector(".navbar");
const socialBar = document.querySelector(".social-bar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.top = "-80px";
    socialBar.style.transform = "translateY(100%)";
  } else {
    navbar.style.top = "0";
    socialBar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// Modal
function openModal() {
  document.getElementById("legalModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("legalModal").style.display = "none";
}

// PWA Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const service = document.getElementById("service").value;

    const mailBody = `Name: ${name}%0AEmail: ${email}%0AMobile: ${mobile}%0AService Needed: ${service}`;

    window.location.href = `mailto:islam.zaky.verse@gmail.com?subject=New Inquiry - I.Z. Verse Studio&body=${mailBody}`;

    const modal = document.getElementById("successModal");
    modal.style.display = "flex";

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  });
}

function clearForm() {
  document.getElementById("contactForm").reset();
}
const transition = document.getElementById("page-transition");
const links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    const target = this.getAttribute("href");

    if (!target.startsWith("#") && !target.startsWith("mailto")) {
      e.preventDefault();
      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = target;
      }, 600);
    }
  });
});

window.addEventListener("load", () => {
  if (transition) {
    transition.classList.remove("active");
  }
});
