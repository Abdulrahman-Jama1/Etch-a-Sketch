const body = document.querySelector('body');
const container = document.querySelector('.container');

const btn = document.createElement('btn');
btn.textContent = 'Change Grid';
body.insertBefore(btn, container);
btn.setAttribute('class', 'btn');

let flexGrid = (row, column) => {
let grid = row * column;

for(let i = 0; i < grid; i++) {
   let cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    container.appendChild(cell);

    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'blue';
        })

}

}


flexGrid(16, 16);


btn.addEventListener('click', () => {
    container.remove();
    let row = parseInt(prompt('enter squares per row'));
    let  column = parseInt(prompt('enter number of squares per column'));
    
    if(row > 100 || column > 100) {
        alert('the limit number of squares is 100, please insert a number below that.');
    } else {
        let grid = row * column;

        const containerTwo = document.createElement('div');
    containerTwo.setAttribute('class', 'containerTwo');
   body.appendChild(containerTwo);

   for(let i = 0; i < grid; i++) {
    let cellTwo = document.createElement('div');

    cellTwo.style.flexBasis = `${945 / row}px`;
    cellTwo.style.height = `${945 / column}px`;
     cellTwo.setAttribute('class', 'cellTwo');
     containerTwo.appendChild(cellTwo);
     
 
     cellTwo.addEventListener('mouseover', () => {
         cellTwo.style.backgroundColor = 'blue';
         })
 
 }
    }
    
    
})