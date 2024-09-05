const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'gird');
    container.appendChild(div);

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    })
}


