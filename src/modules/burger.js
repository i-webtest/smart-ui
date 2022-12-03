const burger = document.querySelector(".burger");
const menu = document.querySelector(".navbar");
const headerSocial = document.querySelector(".header__social");
const headerSocialLinks = document.querySelectorAll(".header__social-link");

const toggleMenu = () => {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("navbar_active");
  headerSocial.classList.toggle("header__social_active");
};

burger.addEventListener("click", toggleMenu);

menu.addEventListener("click", ({ target }) => {
  console.log("target: ", target);
  if (target.classList.contains("header__navbar-link")) {
    burger.classList.remove("burger_active");
    menu.classList.remove("navbar_active");
    headerSocial.classList.remove("header__social_active");
  }
});

headerSocialLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
