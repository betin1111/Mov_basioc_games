//obter elemento canvas e se contexto 2d
const canvas = document.getElementById('meuCanva');
const ctx = canvas.getContext('2d');

//tamanho do quadrado
const square = 50;

//posição do quadrado
let posX = (canvas.width - square) / 2;
let posY = (canvas.height - square) / 2;

//velocidade do quadrado 
const speed = 5;

// implementação das teclas
const teclas = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};


//adicionar eventos de teclado "apertar tecla"
window.addEventListener('keydown', (e) => {
    if (teclas.hasOwnProperty(e.key)) {
        teclas[e.key] = true;
        e.preventDefault();
    }
});

//adicionar evento de teclado "soltar tecla"
window.addEventListener('keyup', (e) => {
    if (teclas.hasOwnProperty(e.key)) {
        teclas[e.key] = false;
        e.preventDefault();
    }
});

//função de atualização
function atualizar() {

    //limpa canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //mover quadrado

    if (teclas.ArrowUp && posY > 0) posY -= speed;
    if (teclas.ArrowDown && posY < canvas.height - square) posY += speed;
    if (teclas.ArrowLeft && posX > 0) posX -= speed;
    if (teclas.ArrowRight && posX < canvas.width - square) posX += speed;



    // Desenha o quadrado
    ctx.fillStyle = 'red';
    ctx.fillRect(posX, posY, square, square);

    // Continua o loop de animação
    requestAnimationFrame(atualizar);
}

// Inicia a animação
atualizar();