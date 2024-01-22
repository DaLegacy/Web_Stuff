var light = document.getElementById("light");
var hex_container = document.getElementById("hex-container");

hex_container.addEventListener("mousemove", function (e) {
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
});