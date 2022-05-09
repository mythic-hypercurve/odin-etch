let canvas = document.getElementById('canvas');
let cells = document.getElementsByClassName('canvasCell');

function buildCanvas(dimensions) {
  let cellCount = dimensions * dimensions;
  console.log(cellCount);
  for (i = 0; i < cellCount; i++) {
    let newCell = document.createElement('div');
    canvas.appendChild(newCell).className = 'cell';
  }
}

buildCanvas(16);
