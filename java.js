const container = document.querySelector('#container');
const sizeSquares = document.querySelector('#sizeSquares');
let selection = 16;

function grid(selection){
  for(let r = 0; r < selection; r++){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for(let r = 0; r < selection; r++){
      const column = document.createElement('div');
      column.classList.add('column');
      row.appendChild(column);

      //this code is for coloring the boxes of the grid
      const box = document.querySelectorAll('.column');
      box.forEach((box) =>{
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
        })
      });
    }
  }
}

grid(selection);

  //this part let you choose the size of your grid
  sizeSquares.addEventListener('click', () => {
    document.getElementById('container').innerHTML = "";
    selection = prompt ('Choose the size of your grid from 2 to 30 squares per side');
    grid(selection);
    })

