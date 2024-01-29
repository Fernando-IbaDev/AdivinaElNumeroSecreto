let numeroSecreto=0;
let maximoIntentos=5;
let intentos=1;
let numeroUsuario;



function validarIntento(){

    let numeroUsuario= parseInt(document.querySelector("#valorUsuario").value);
    

    if (numeroUsuario<=10 && numeroUsuario != NaN){

                if(numeroSecreto===numeroUsuario){
                    //Acertó el numero
                    asignarTextoElemento("p",`Haz acertado en ${intentos} ${(intentos===1) ? "intento" : "intentos"}`);
                    limpiarCampo();
                    document.querySelector("#reiniciar").removeAttribute("disabled");
                    document.querySelector("#validar").setAttribute("disabled",true);

                }else{
                    //NO se acertó el numero
                    if(numeroUsuario>numeroSecreto){

                        asignarTextoElemento("p","El numero es menor");
                    }else{

                        asignarTextoElemento("p","El numero es mayor");
                    }
                    
                    limpiarCampo();
                    intentos++;


                    if(intentos>maximoIntentos){

                        asignarTextoElemento("p",`Haz superado el numero de intentos maximos posibles que es igual: ${maximoIntentos}`);
                        document.querySelector("#reiniciar").removeAttribute("disabled");
                        document.querySelector("#validar").setAttribute("disabled",true);
                    }

                }
                
                return;

            }else{
                
                asignarTextoElemento("p",`Error!!! ${numeroUsuario > 10  ? "El numero que ingresaste es mayor a 10..." : "Lo que ingresaste no es un numero"} Intentalo de nuevo`);
                intentos ++;         
    }


limpiarCampo();


}





function reiniciarJuego(){
//limpiar cajas
limpiarCampo();
//indicar intervalos
condicionesIniciales();
//Resetear intentos
//generar el numero aleatorio
//Deshabilitar el boton de nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled", true);
}


function limpiarCampo(){

    document.querySelector("#valorUsuario").value="";
}


function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}


function generarNumeroAleatorio() {
    return Math.round(Math.random() * (10 - 1) + 1);  //Math.round(Math.random() * (max - min) + min); 
}

function condicionesIniciales(){

    asignarTextoElemento("h1","Juego del Numero Secreto");
    asignarTextoElemento("p","Adivina el numero que estoy pensando entre 1 y 10");
    document.querySelector("#validar").removeAttribute("disabled");
    document.querySelector("#reiniciar").setAttribute("disabled",true);
    numeroSecreto=generarNumeroAleatorio();
    intentos=1;

}


condicionesIniciales();



