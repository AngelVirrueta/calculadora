//Traemos los elementos del HTML

var primerValor = document.querySelector("#primerValor");
var segundoValor = document.querySelector("#segundoValor");
var botonSumar = document.querySelector("#sumar");
var botonRestar = document.querySelector("#restar");
var botonMultiplicar = document.querySelector("#multiplicar");
var botonDividir = document.querySelector("#dividir");
var botonResetear = document.querySelector("#resetear");
var resultado = document.querySelector("#resultado");
var valorResultado = 0;


// Definimos las funciones
function sumar(){
    valorResultado = Number(primerValor.value) + Number(segundoValor.value);
    resultado.innerHTML = valorResultado;
}

function restar(){
    valorResultado = Number(primerValor.value) - Number(segundoValor.value);
    resultado.innerHTML = valorResultado;
}

function multiplicar(){
    valorResultado = Number(primerValor.value) * Number(segundoValor.value);
    resultado.innerHTML = valorResultado;
}

function dividir(){
    if (segundoValor.value == 0){ // Una comparación porque no es posible dividir si el segundo valor es 0
        alert("Error: No es posible dividir entre 0.");
    }else{
        valorResultado = Number(primerValor.value) / Number(segundoValor.value);
        resultado.innerHTML = valorResultado;
    }
}

function resetear(){
    valorResultado = "0";
    primerValor.value="";
    segundoValor.value="";
    resultado.innerHTML = valorResultado;
}

// Agregamos lo eventos a los elementos de HTML para disparar las funciones
botonSumar.addEventListener("click", sumar);
botonRestar.addEventListener("click", restar);
botonMultiplicar.addEventListener("click", multiplicar);
botonDividir.addEventListener("click", dividir);
botonResetear.addEventListener("click", resetear);

console.log(botonDividir);