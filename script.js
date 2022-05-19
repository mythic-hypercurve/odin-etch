let canvas = document.getElementById('canvas');
buildCanvas(18);

function buildCanvas(dimensions) {
  for (let i = 0; i < dimensions; i++) {
    console.log('buildCanvas', i, dimensions);
    canvas.appendChild(buildRow(dimensions));
  }
}

function buildRow(columns) {
  let row = document.createElement('div');
  for (let i = 0; i < columns; i++) {
    console.log('buildRows', i, columns);
    let newCell = document.createElement('div');
    newCell.classList.add('noMark');
    newCell.addEventListener('click', e => markCanvas(e.srcElement));
    row.appendChild(newCell);
  }
  return row;
}

function markCanvas(cell) {
  if (cell.classList.contains('noMark')) {
    cell.classList.add('mark');
    cell.classList.remove('noMark');
  } else {
    cell.classList.remove('mark');
    cell.classList.add('noMark');
  }
}
