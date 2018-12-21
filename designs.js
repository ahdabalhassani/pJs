const gColor = document.getElementById("colorPicker");
const gHeight = document.getElementById('inputHeight');
const gWidth = document.getElementById('inputWidth');
const gCanvas = document.getElementById('pixelCanvas');

function clickedBox(event) {
  const color = gColor.value;
  event.target.style.backgroundColor = color;
}

function makeGrid() {
  gCanvas.innerHTML = '';
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
  gCanvas.appendChild(fragment);
};

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});