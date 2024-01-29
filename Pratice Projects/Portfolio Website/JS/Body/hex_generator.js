var body = document.getElementById("body");
var hexFillerContainer = document.getElementById("hex-filler-container");
var hexContainer = document.getElementById("hex-container");

window.addEventListener("load", generateHexagonsOnScreen);
window.addEventListener("resize", generateHexagonsOnScreen);

const hexHeight = 93;
const hexWidth = 80;

function generateHexagonsOnScreen() {
  var numRows = Math.ceil(hexFillerContainer.offsetHeight / hexHeight);
  var numShapesPerRow = Math.ceil(hexFillerContainer.offsetWidth / hexWidth) + 4;
  var requiredNumOfShapes = getRequiredNumberOfHexagonsNeededToFillScreen(numRows, numShapesPerRow);

  if (requiredNumOfShapes == hexContainer.children.length) {
    return;
  }

  if (requiredNumOfShapes <= hexContainer.children.length) {
    while (hexContainer.children.length >= requiredNumOfShapes) {
      hexContainer.removeChild(hexContainer.lastChild);
    }
    log(numRows, numShapesPerRow, requiredNumOfShapes);
    return;
  }

  for (i = 0; i <= numRows; i++) {
    for (j = 0; j <= numShapesPerRow; j++) {
      var newDiv = document.createElement("div");
      newDiv.classList.add("hex");
      hexContainer.appendChild(newDiv);
    }
  }

  log(numRows, numShapesPerRow, requiredNumOfShapes);
}

function getRequiredNumberOfHexagonsNeededToFillScreen(numRows, numShapesPerRow) {
  return numRows * numShapesPerRow;
}

function log(numRows, numShapesPerRow, requiredNumOfShapes) {
  // console.log(`OffsetHeight = ${main.offsetHeight} / OffsetWidth = ${main.offsetWidth}`);
  // console.log(`Number of Rows: ${numRows}`);
  // console.log(`Number of Shapes per row: ${numShapesPerRow}`);
  // console.log(`Required num of shapes: ${requiredNumOfShapes}`);             
  // console.log(`Current Num of children in Hex_Container: ${hex_container.children.length}`)
}