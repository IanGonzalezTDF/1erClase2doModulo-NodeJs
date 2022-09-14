//==============
//==============
//==============
/*console.log("Hola desde node");

let readlineSync = require('readline-sync');
let alturaPersona = readlineSync.question("Indique la altura de la persona: ");
console.log(alturaPersona);*/


//==============
//=======DIAPO 1=======
//==============

// let mensaje = "Hola de nuevo";
// console.log(mensaje);

/*
let altura = 5;
let base = 6;
function multiplicacion(){
    let resultado = altura*base;
    console.log(resultado)
}
multiplicacion();/*

//==============
//==============*/
//==============
// ====Diapo 2
//==============
//==============

let readlineSync = require('readline-sync');

let vueltaUno = readlineSync.questionInt('Ingrese vuelta uno: ');
let vueltaDos = readlineSync.questionInt('Ingrese vuelta dos: ');
let vueltaTres = readlineSync.questionInt('Ingrese vuelta tres: ');
let vueltaCuatro = readlineSync.questionInt('Ingrese vuelta cuatro: ');

function sumaTiempo(a, b, c, d){
    vueltas = a + b + c + d;
    return vueltas;
}
function promedio(a, b, c, d){
    promedio = (a + b + c + d) / 4;
    return promedio;
}

let tiempo = sumaTiempo(vueltaUno, vueltaDos, vueltaTres, vueltaCuatro);
let totalPromedio = promedio(vueltaUno, vueltaDos, vueltaTres, vueltaCuatro);
console.log('El tiempo total es:', tiempo);
console.log('El promedio p/v es:', totalPromedio);