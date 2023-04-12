const container = document.querySelector('#container');
let selection = 16;

for(let r = 0; r < selection; r++){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for(let c= 0; c < selection; c++){
      const column = document.createElement('div');
      column.classList.add('column');
      row.appendChild(column);
    }
}

