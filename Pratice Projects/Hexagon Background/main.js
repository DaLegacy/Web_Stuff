var body = document.getElementById("body");
var main = document.getElementById("hex-filler-container");
var hex_container = document.getElementById("hex-container");

window.addEventListener("load", generateHexagonsOnScreen);
window.addEventListener("resize", generateHexagonsOnScreen);

const hexHeight = 115;
const hexWidth = 100;

function generateHexagonsOnScreen() {
  var numRows = Math.ceil(main.offsetHeight / hexHeight);
  var numShapesPerRow = Math.ceil(main.offsetWidth / hexWidth) + 4;
  var requiredNumOfShapes = getRequiredNumberOfHexagonsNeededToFillScreen(numRows, numShapesPerRow);

  if (requiredNumOfShapes == hex_container.children.length) {
    return;
  }

  if (requiredNumOfShapes <= hex_container.children.length) {
    while (hex_container.children.length >= requiredNumOfShapes) {
      hex_container.removeChild(hex_container.lastChild);
    }
    log(numRows, numShapesPerRow, requiredNumOfShapes, numShapesCreated);
    return;
  }

  for (i = 0; i <= numRows; i++) {
    for (j = 0; j <= numShapesPerRow; j++) {
      var newDiv = document.createElement("div");
      newDiv.classList.add("hex");
      hex_container.appendChild(newDiv);
    }
  }

  log(numRows, numShapesPerRow, requiredNumOfShapes);
}

function getRequiredNumberOfHexagonsNeededToFillScreen(numRows, numShapesPerRow) {
  return numRows * numShapesPerRow;
}

function log(numRows, numShapesPerRow, requiredNumOfShapes) {
  console.log(`OffsetHeight = ${main.offsetHeight} / OffsetWidth = ${main.offsetWidth}`);
  console.log(`Number of Rows: ${numRows}`);
  console.log(`Number of Shapes per row: ${numShapesPerRow}`);
  console.log(`Required num of shapes: ${requiredNumOfShapes}`);             
  console.log(`Current Num of children in Hex_Container: ${hex_container.children.length}`)
}