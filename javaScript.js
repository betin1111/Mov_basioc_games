//obter elemento canvas e se contexto 2d
var canvas = document.getElementById("canvas");
var ctx = canvas.getcontext("2");

//definir as dimensões do canvas
const quadradoTamanho = 50;

//posição inicial (centralizada)
let posX = (canvas.width - quadradoTamanho) / 2;
let PosY = (canvas.height - quadradoTamanho) /2;

//velocidade de movimento
const velocidade = 5;

//teclas Pressionadas

const teclas = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

//Resistrar eventos de teclado
window.addEventListener('keydown', function(e){
    if(teclas.hasOwnProperty(e.key)){
        teclas[e.key] = true;
        e.preventeDefault();
    }
})