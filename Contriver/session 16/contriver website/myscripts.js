
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});