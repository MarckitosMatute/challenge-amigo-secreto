// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
        let addAmigo = document.getElementById('amigo');
        let nombreAmigo = addAmigo.value.trim();
    if (nombreAmigo == "") {
        alert("Por favor ingresa un nombre valido");

            return false;
        } 
        amigos.push(nombreAmigo);
        limpiarCaja();
        console.log(amigos);
        console.log(amigos);
}

