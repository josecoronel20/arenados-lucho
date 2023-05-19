const dolar = parseInt(prompt("ingrese el precio del dolar hoy"));


let constante = 3.9;// 10.5
let constanteCuadradoRevestir = constante * 1.12;// 11.6 
let constanteCuadradoPiezas = constante * 1.20 // 12.7  
let constanteLineal = constante * 0.59 // 6.1 


let tipo = prompt("ingrese el tipo de trabajo( pintura / revestir / piezas / lineal)");

let altoMetros = parseInt(prompt("ingrese el número de el largo en metros"));
let anchoMetros = parseInt(prompt("ingrese el número de el ancho en metros"));

if (tipo === "pintura") {
    metroCuadrado = constante * dolar;
    metrosTotal = (altoMetros * anchoMetros) + (((altoMetros * 2) + (anchoMetros * 2)) * 1.5);
} else if(tipo === "revestir"){
    metroCuadrado = constanteCuadradoRevestir * dolar;
    metrosTotal = (altoMetros * anchoMetros) + (((altoMetros * 2) + (anchoMetros * 2)) * 1.5);
} else if(tipo === "piezas"){
    metroCuadrado = constanteCuadradoPiezas * dolar;
    metrosTotal = altoMetros * anchoMetros;
} else if(tipo === "lineal"){
    metroCuadrado = constanteLineal * dolar;
    metrosTotal = altoMetros * anchoMetros;
} else {
    alert(`no escribiste bien el tipo intentalo de nuevo`);
    let tipo = prompt("ingrese el tipo de trabajo( pintura / revestir / piezas / lineal");
}

let precioFinal = Math.round(metrosTotal * metroCuadrado);

alert(`el precio final es de $${precioFinal}`);