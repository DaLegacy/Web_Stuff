var hexContainer = document.getElementById("hex-container");
var light = document.getElementById("light");

hexContainer.addEventListener("mousemove", function (e) {
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
});