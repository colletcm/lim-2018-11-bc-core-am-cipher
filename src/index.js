const offset = document.getElementById("patron");
const mensaje1 = document.getElementById("mensajito1");
const botonCifrado = document.getElementById("encriptar");
const mensaje2 = document.getElementById("mensajito2");
const botonRespuesta = document.getElementById("desencriptar");
  botonCifrado.addEventListener("click", function(){
   mensaje2.value = cipher.encode(mensaje1.value,parseInt(offset.value));
  })
  botonRespuesta.addEventListener("click", function(){
  mensaje1.value = cipher.decode(mensaje2.value,parseInt(offset.value));
  })
