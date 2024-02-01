var light = document.getElementById("light");
var body = document.getElementById("body");

body.addEventListener("mousemove", function (e) {
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
});