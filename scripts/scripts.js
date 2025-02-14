const go2Top = document.querySelector("#go2Top");
const menu = document.querySelector("#menu");
const navMenu = document.querySelector(".navbar-menu");
const menuToggler = document.querySelector(".menu-toggler");
const navbar = document.querySelector("nav");
const blackOverlay = document.querySelector(".black-overlay");

// Ustawienia elementu "go to top" oraz nawigacji
addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
    go2Top.style.cursor = "pointer";
  } else {
    go2Top.style.opacity = 0;
    go2Top.style.cursor = "default";
  }
});

// Obsługa przycisku "go to top"
go2Top.addEventListener("click", () => {
  if (go2Top.style.opacity != 0) window.scrollTo(0, 0);
});

// Obsługa przycisku menu
menuToggler.addEventListener("click", () => {
  menuToggler.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Ustawienie opacity dla black-overlay
  blackOverlay.style.opacity = blackOverlay.style.opacity === "1" ? "0" : "1";
  blackOverlay.style.pointerEvents = blackOverlay.style.opacity === "1" ? "auto" : "none"; // Zapobiega kliknięciom, gdy opacity = 0
});

// Zamknięcie menu po kliknięciu poza nim
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navMenu.contains(event.target) || menuToggler.contains(event.target);

  if (!isClickInsideMenu) {
    navMenu.classList.remove("active");
    menuToggler.classList.remove("active");
    
    blackOverlay.style.opacity = "0";
    blackOverlay.style.pointerEvents = "none";
  }
});