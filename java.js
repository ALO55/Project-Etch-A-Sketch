const container = document.querySelector('#container');
const sizeSquares = document.querySelector('#sizeSquares');
const colorInput = document.querySelector('#color');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const size =  document.querySelector('#size');
let color = "#050505";
let selection = 16;
let row = '';
let column = '';
let box = '';
let randomColor = false;


function grid(selection){
  for(let r = 0; r < selection; r++){
    row = document.createElement('div');
    row.classList.add('row');
    

    for(let r = 0; r < selection; r++){
      column = document.createElement('div');
      column.classList.add('column');
      row.appendChild(column);
    }
    container.appendChild(row); 
  }

  box = document.querySelectorAll('.column');
  box.forEach((box) =>{
  box.addEventListener('mouseover', () => {
    if(randomColor === true){
      box.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    } else {box.style.backgroundColor = color;}
    
    })
  });
  size.textContent = selection + 'x' + selection; 
}

grid(selection);

//this code is for coloring the boxes of the grid
colorInput.addEventListener('input', () => {
  randomColor = false;
  color = colorInput.value;
});

rainbow.addEventListener('click', () => {
  randomColor = true;
});

eraser.addEventListener('click', () => {
  randomColor = false;
  color = '#fafafa';
});

clear.addEventListener('click', () => {
  box.forEach((box) => {
    box.style.backgroundColor = '#fafafa';
  })
});

//this part let you choose the size of your grid
sizeSquares.addEventListener('click', () => {
  document.getElementById('container').innerHTML = "";
  selection = Number(prompt('Choose the size of your grid from 2 to 100 squares per side'));

  while(selection > 100 || selection < 2){
    selection = Number(prompt('Choose the size of your grid from 2 to 100 squares per side'));
  }
  grid(selection);
});

