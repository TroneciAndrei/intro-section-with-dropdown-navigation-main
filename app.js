const openNav = document.querySelector(".open-menu");
const closeNav = document.querySelector(".close-menu");
const nav = document.querySelector("nav");
const openDropwdown = document.querySelectorAll(".open-dropdown");
const body = document.querySelector("body");

openNav.addEventListener("click", () => {
  nav.classList.add("openNav");
  body.classList.add("overlay");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("openNav");
  body.classList.remove("overlay");
});

openDropwdown.forEach((menu) => {
  menu.addEventListener("click", function () {
    const nextNode = this.nextElementSibling;
    if (!nextNode.classList.contains("active")) {
      nextNode.classList.add("active");
    } else {
      nextNode.classList.remove("active");
    }
  });
});
