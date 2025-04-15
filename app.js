
let numerosecreto = 0;
let intentos = 0;
let listanumerosorteado = [];
let numeromaximo = 10;

function asignarTextoelemento(elemento, texto) {
    let elememtoHTML = document.querySelector(elemento);
    elememtoHTML.innerHTML = texto;
    return//para retornar 
}

function verificarintento() {
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);
    console.log(intentos);
    if (numerodeusuario == numerosecreto) {
        asignarTextoelemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento ' : 'intentos'} `)
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        if (numerodeusuario > numerosecreto) {
            asignarTextoelemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoelemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja() {
    let valorcaja = document.querySelector('#valorusuario');// document.querySelector('#valorusuario').value=''; tambien se puede poner asi como para reducir el codigo 
    valorcaja.value = '';
}

function generarnumerosecreto() {
    let numerogenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numerogenerado);
    console.log(listanumerosorteado);
    if (listanumerosorteado.length == numeromaximo) {
        asignarTextoelemento('p', 'Ya se sortearon todos los numeros');
    } else {
        if (listanumerosorteado.includes(numerogenerado)) {
            return generarnumerosecreto();

        } else {
            listanumerosorteado.push(numerogenerado);
            return numerogenerado;
        }
    }


}

function condicionesiniciales() {
    asignarTextoelemento('h1', 'Juego del numero secerto');// para llamar la funcion que se creo 
    asignarTextoelemento('p', `Indica un numero del 1 al ${numeromaximo}`);
    numerosecreto = generarnumerosecreto();
    intentos = 1;
}

function reiniciarjuego() {
    //limpiar caja 
    limpiarcaja();
    // mensaje de inicio numeros y condiciones iniciales 
    condicionesiniciales();

    //deshabilitar el boton de nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

condicionesiniciales();
