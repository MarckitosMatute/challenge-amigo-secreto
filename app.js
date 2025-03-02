// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
        let addAmigo = document.getElementById('amigo');
        let nombreAmigo = addAmigo.value.trim();
    if (nombreAmigo === "") {
        alert("Por favor ingresa un nombre valido");
        return ;
        } 

        amigos.push(nombreAmigo);
        listado();
        limpiarCaja();
        console.log(amigos);
}

function listado() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; // Limpia la lista antes de agregar nuevos elementos

    for (let fila = 0; fila < amigos.length; fila++) {
        let filaLista = document.createElement("li");
        filaLista.textContent = amigos[fila];
        lista.appendChild(filaLista);
    }
}

/*function listado() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; // Limpia la lista antes de agregar nuevos elementos
    amigos.forEach(elemento => {
        let filaLista = document.createElement("li"); //se crea una variable con un elemento html en este casi li
        filaLista.textContent = elemento; // se le asigna la variable filaLista a cada elemento de array
        lista.appendChild(filaLista); 
    });
}
*/