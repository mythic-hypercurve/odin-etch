let canvas = document.getElementById('canvas');
let cells = document.getElementsByClassName('canvasCell');

function buildCanvas(dimensions) {
  for (let i = 0; i < dimensions; i++) {
    console.log('buildCanvas', i, dimensions);
    canvas.appendChild(buildRow(dimensions));
  }
}

buildCanvas(18);

function buildRow(columns) {
  let row = document.createElement('div');
  for (let i = 0; i < columns; i++) {
    console.log('buildRows', i, columns);
    let newCell = document.createElement('div');
    row.appendChild(newCell);
  }
  return row;
}
