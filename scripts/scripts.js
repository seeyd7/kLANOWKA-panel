const go2Top = document.querySelector("#go2Top");
const menu = document.querySelector("#menu");
const navMenu = document.querySelector(".navbar-menu");
const menuToggler = document.querySelector(".menu-toggler");
const navbar = document.querySelector("nav");

// Ustawienia elementu "go to top" oraz nawigacji
addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
    go2Top.style.cursor = "pointer";
    navbar.style.height = "8vh";
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  } else {
    go2Top.style.opacity = 0;
    go2Top.style.cursor = "default";
    navbar.style.height = "10vh";
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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
});