console.log("Script is running");

// document.addEventListener("DOMContentLoaded", function () {
//   
//   document.querySelector("main").style.display = "none";

//   
//   document.querySelector(".loader-container").style.display = "block";

//   
//   window.addEventListener("load", function () {
//     
//     setTimeout(function () {
//       document.querySelector(".loader-container").style.display = "none";
//       
//       document.querySelector("main").style.display = "block";
//     }, 1000); 
//   });
// });


const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav__menu");
let isMenuOpen = false;

const toggleMenu = () => {
  isMenuOpen ? closeMenu() : openMenu();
};

const openMenu = () => {
  navMenu.style.right = "0";
  isMenuOpen = true;
};

const closeMenu = () => {
  navMenu.style.right = "-100%";
  isMenuOpen = false;
};

document.addEventListener("DOMContentLoaded", function () {
  closeMenu(); 
});

navToggle.addEventListener("click", toggleMenu);
// document.addEventListener("DOMContentLoaded", function () {
//   const homeLink = document.getElementById("home-link");

//   if (homeLink) {
//     homeLink.addEventListener("click", function (e) {
//       e.preventDefault();
//       window.location.reload();
//     });
//   }
// });



document.addEventListener("DOMContentLoaded", function () {
  const projectsLink = document.getElementById("home-link");
  const projectsSection = document.getElementById("home");

  projectsLink.addEventListener("click", function (event) {
    event.preventDefault();
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectsLink = document.getElementById("about-link");
  const projectsSection = document.getElementById("about");

  projectsLink.addEventListener("click", function (event) {
    event.preventDefault();
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectsLink = document.getElementById("projects-link");
  const projectsSection = document.getElementById("projects");

  projectsLink.addEventListener("click", function (event) {
    event.preventDefault();
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
});






