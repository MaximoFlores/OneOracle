let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos>1?"veces":"vez"}`);
    }
    else {
    if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento("p","El numero secreto es menor");
    }
    else{
        asignarTextoElemento("p","El numero secreto es mayor");      
        }
    intentos++;
    limpiarCaja();    
    }
    return;
}
function limpiarCaja(){
    document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);