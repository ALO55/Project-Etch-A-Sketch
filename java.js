const container = document.querySelector('#container');
const containerh = document.querySelector('#containerh');

for(let number = 0; number < 16; number++){
    const divs = document.createElement('div');
    divs.classList.add('box');
    container.appendChild(divs);
}

for(let number = 0; number < 16; number++){
    const divsh = document.createElement('div');
    divsh.classList.add('box2');
    container.appendChild(divsh);
}