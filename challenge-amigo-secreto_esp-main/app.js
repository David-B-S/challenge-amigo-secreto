// Declaración de variables

let listaDeAmigos = [];
let lista ;

//Creación de Funciones

function agregarAmigo() {    
    let nombreAmigo = document.querySelector('#amigo').value;
    if ( nombreAmigo === ""){        
        alert ("Por favor, inserte un nombre.");        
    } else {       
        listaDeAmigos.push(nombreAmigo);
        limpiarCampoNombre ('#amigo', '');
        agregarNombres(listaDeAmigos);
    }
    return;
}


function limpiarCampoNombre(elemento, texto) {
    document.querySelector(elemento).value = texto;
    return;   
}

function limpiarListaAmigos(){
    lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    return;
}

function agregarNombres(amigos){
    limpiarListaAmigos();
    for (let i = 0; i < amigos.length; i++) {
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigos[i];
        lista.appendChild(nuevoLi);
    }
    return;
}

function sortearAmigo(){
    if (listaDeAmigos == ""){        
        alert ('No se registra ningún amigo');        
    }else {
        limpiarListaAmigos();
        let amigoSorteado = document.querySelector('#resultado');
        amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${listaDeAmigos [Math.floor(Math.random()*listaDeAmigos.length)+1]}`;        
    }    
}