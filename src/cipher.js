window.cipher = {
  encode: (offset, text) => {
    let resultado = "";
    let mensajeFinal = "";
    for (let i = 0; i < text.length; i++) {
      resultado = text.charCodeAt(i);
      if (resultado === 32) {
        mensajeFinal += " ";
      } else {
        mensajeFinal += String.fromCharCode((resultado - 65 + offset) % 26 + 65);
      }
    }
    return mensajeFinal;
  },
  //ahora el 2do metodo de el Objeto cipher
  decode: (offset, text) => {
    let resultado = "";
    let mensajeFinal = "";
    for (let i = 0; i < text.length; i++) {
      resultado = text.charCodeAt(i);
      if (resultado === 32) {
        mensajeFinal = mensajeFinal + " ";
      } else {
        mensajeFinal += String.fromCharCode((resultado - 90 - offset) % 26 + 90);
        //console.log(mensajeFinal);
      }
    }
    return mensajeFinal;
  }
}
