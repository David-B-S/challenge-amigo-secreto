// Declaración de variables

let listaAmigos = [];

function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo');

    if ( nombreAmigo === " "){

        alert ("Por favor, inserte un nombre.");

    } else {

        listaAmigos.push(nombreAmigo);

    }

}