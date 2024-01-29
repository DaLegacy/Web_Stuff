var circleContainer = document.getElementById('body');
var circle = document.getElementById('circle');
const circleObj = {x:0, y:0, dx:1, dy:1, velocity:1, isEnabled: true};

window.addEventListener("load", move);

function move(){
  if (!circleObj.isEnabled){
    return;
  }

  if (circleObj.x > circleContainer.offsetWidth - circle.offsetWidth || circleObj.x < 0){
    circleObj.dx *= -1;
  }

  if (circleObj.y > circleContainer.offsetHeight - circle.offsetHeight || circleObj.y < 0){
    circleObj.dy *= -1;
  }

  circleObj.x += circleObj.dx * circleObj.velocity;
  circleObj.y += circleObj.dy * circleObj.velocity;

  circle.style.left = `${circleObj.x}px`;
  circle.style.top = `${circleObj.y}px`;

  requestAnimationFrame(move);
}