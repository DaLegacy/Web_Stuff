window.addEventListener('scroll', activateSticky);

var header = document.getElementById("header");
var sticky = header.offsetTop;

function activateSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}