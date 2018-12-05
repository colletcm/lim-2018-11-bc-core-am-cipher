const offset = document.getElementById("patron");
const mensaje1 = document.getElementById("mensajito1");
const botonCifrado = document.getElementById("encriptar");
const mensaje2 = document.getElementById("mensajito2");
const botonRespuesta = document.getElementById("desencriptar");
botonCifrado.addEventListener("click", function () {
  mensaje2.value = cipher.encode(parseInt(offset.value), (mensaje1.value).toUpperCase());
})
botonRespuesta.addEventListener("click", function () {
  mensaje1.value = cipher.decode(parseInt(offset.value), (mensaje2.value).toUpperCase());
})
