let backtotop = document.querySelector(".backtotop");
let navbar = document.querySelector(".second_nav");
console.log(navbar);
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backtotop.style = "display:flex";
    navbar.style.backgroundColor = "#0c0c0c";
  } else {
    backtotop.style = "display:none";
    navbar.style.backgroundColor = "transparent";
  }
});

backtotop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
