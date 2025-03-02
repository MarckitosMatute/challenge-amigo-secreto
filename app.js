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

function sortearAmigo() {
    
    if (amigos.length === 0) {
      document.getElementById("resultado").innerHTML = "No hay amigos para sortear."; //Validamos que haya amigos disponibles si no mandamos mensaje
      return;
    }   
  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; //Obtenemos el nombre sorteado en base al indice
    document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigoSorteado; //Mostramos el mensaje de quien fue el amigo
  }

