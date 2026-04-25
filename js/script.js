const saludar = document.querySelector('#btn-action');
saludar.addEventListener('click', () => {
    alert('Esto es un alert');
});

const dibujar = document.querySelector('.board-container');
dibujar.style.background= '#faf';
//dibujar.style.flexDirection='column';
//dibujar.style.justifyContent= 'center';
//dibujar.style.alignItems= 'center';
dibujar.insertAdjacentHTML(`beforeend`, `
    <div class="caja" style="border:3px solid yellow; width: 10rem; height: 3rem; position: absolute; top: 50%; left: 50%; transform:translate(-50%,-50%);">father is relative and song is absolute</div>
`);