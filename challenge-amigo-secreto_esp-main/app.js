// Declaración de variables

let listaAmigos = [];

function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo');

    if ( nombreAmigo === " "){

        alert ("Por favor, inserte un nombre.");

    } else {

        listaAmigos.push(nombreAmigo);

    }

    limpiarCampoNombre ('amigo', 'Escribe un nombre');

    return;
}

function limpiarCampoNombre(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
    

}