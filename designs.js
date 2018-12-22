//  Here we select color input
const gColor = document.getElementById("colorPicker");
//  Here we select size input
const gHeight = document.getElementById('inputHeight');
const gWidth = document.getElementById('inputWidth');
const gCanvas = document.getElementById('pixelCanvas');

// Here When we clicked the box, color it in
function clickedBox(event) {
  const color = gColor.value;
  event.target.style.backgroundColor = color;
}

// Here When we the user submitted the size, call makeGrid()
function makeGrid() {
  gCanvas.innerHTML = '';
// Here we Create fragment to build (the rows and columns) - to make table on
  const fragment = document.createDocumentFragment();

  for (let r = 0; r < gHeight.value; r++) {
    const tr = document.createElement('tr');
    for (let c = 0; c < gWidth.value; c++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
    tr.addEventListener('click', clickedBox);
    fragment.appendChild(tr);
  }
  // Here we Push fragment onto DOM
  gCanvas.appendChild(fragment);
};

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});