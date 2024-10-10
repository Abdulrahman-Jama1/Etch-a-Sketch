const container = document.querySelector('.container');

function createGrid(row, column) {
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



createGrid(16, 16);

