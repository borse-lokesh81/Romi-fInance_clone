document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    if (navbar.style.display === "none" || navbar.style.display === "") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  });
});
