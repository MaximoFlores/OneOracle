let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = []
let numeroMaximo = 10;
let numeroMinimo = 1;

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
        document.getElementById("reiniciar").removeAttribute("disabled");
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
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+numeroMinimo;
    if(listaNumeroSorteados.length==numeroMaximo){
        asignarTextoElemento("p","Ya se asignaron todos los numeros");
    }
    else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.includes(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del ${numeroMinimo} al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensajes de intervalo de numeros
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");

}


condicionesIniciales();