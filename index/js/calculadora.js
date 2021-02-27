var operador1;
var operador2;
var operador;

function iniciar(){
    

var resultado = document.getElementById("resultado");
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');
var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
var division = document.getElementById('division');
var igual = document.getElementById('igual');
var borrar = document.getElementById('borrar');
var borrar1 = document.getElementById('borrar1');
var punto = document.getElementById('punto');

uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";

}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}

cero.onclick = function(e){
     resultado.textContent = resultado.textContent + "0";
}

punto.onclick = function(e){
     resultado.textContent = resultado.textContent + ".";
}
borrar.onclick = function(e){
       resetear ();
}

borrar1.onclick = function(e){
       resetear ();
}
 suma.onclick = function (e){
     operador1 = resultado.textContent;
     operador = "+";
     limpiar ();
 }

resta.onclick = function (e){
    operador1 = resultado.textContent;
    operador = "-";
    limpiar ();
}

multiplicacion.onclick = function(e){
    operador1 = resultado.textContent;
    operador = "*";
    limpiar();
}

division.onclick = function(e){
    operador1 = resultado.textContent;
    operador = "/";
    limpiar ();
}
igual.onclick = function(e){
    operador2 = resultado.textContent;
    resolver();
}

}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operador="";
    operador1=0;
    operador2=0;
}

function resolver(){
    var res=0;
    switch(operador){
        case "+":
            res= parseFloat(operador1) + parseFloat(operador2);
            break;
        case "-":
            res= parseFloat(operador1) - parseFloat(operador2);
            break;
        case "*":
              res = parseFloat(operador1) * parseFloat(operador2);
              break;
        case "/":
                res = parseFloat(operador1) / parseFloat(operador2);
                break;            
    }
    resetear();
    resultado.textContent=res;
}