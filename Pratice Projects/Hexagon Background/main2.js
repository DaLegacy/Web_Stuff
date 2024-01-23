var light = document.getElementById("light");

hex_container.addEventListener("mousemove", function (e) {
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
});