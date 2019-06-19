const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle("menu--open");

  // Animation to slide out menu panel
  // ***** Animation to slide panel back not working
  if (menu.classList.contains("menu--closed")) {
    // menu.style.display = "block";
    menu.style.animation = "menuSlideOut 1s";
    menu.classList.toggle("menu--open");
    menu.classList.toggle("menu--closed");
  } else {
    menu.classList.toggle("menu--open");
    menu.classList.toggle("menu--closed");
    // menu.style.animation = "menuSlideIn 1s";
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
