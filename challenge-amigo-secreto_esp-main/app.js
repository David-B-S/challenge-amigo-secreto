// Declaración de variables

let listaAmigos = [];

function agregarAmigo() {
    
    let nombreAmigo = document.querySelector('#amigo').value;

    if ( nombreAmigo === ""){

        alert ("Por favor, inserte un nombre.");

    } else {

        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
        limpiarCampoNombre ('#amigo', '');
        
    }
    

    return;
}

function limpiarCampoNombre(elemento, texto) {

    document.querySelector(elemento).value = texto;
    return;

}