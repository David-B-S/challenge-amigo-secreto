// Declaración de variables

let listaDeAmigos = [];

function agregarAmigo() {
    
    let nombreAmigo = document.querySelector('#amigo').value;

    if ( nombreAmigo === ""){

        alert ("Por favor, inserte un nombre.");

    } else {

        listaDeAmigos.push(nombreAmigo);
        console.log(listaDeAmigos);
        limpiarCampoNombre ('#amigo', '');
        agregarNombres(listaDeAmigos);
        
    }
    
    
    return;
}

function limpiarCampoNombre(elemento, texto) {
    
    document.querySelector(elemento).value = texto;
    return;

}

function agregarNombres(amigos){
    
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigos[i];
        lista.appendChild(nuevoLi);
        console.log(lista);
        
    }
}
    
