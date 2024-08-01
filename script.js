var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
  this.classList.toggle("click");
  nav.classList.toggle("open");
});

var typed = new Typed(".input", {
  strings: ["Lerner","Developer","Curious"],
  typedSpeed: 5,
  backSpeed: 95,
  loop: true
})