window.cipher = {
  encode: function(mensaje,clave){
let resultado = "";
let mensajeFinal = "";
  for(let i=0; i<mensaje.length; i++){
    resultado = mensaje.charCodeAt(i);
    if(resultado===32){
      mensajeFinal+=" ";
    }else{
      mensajeFinal += String.fromCharCode((resultado-65+clave)%26+65);
  }
}
 return mensajeFinal;
},
//ahora el 2do metodo de el Objeto cipher
 decode: function(mensaje,clave){
   let resultado = "";
   let mensajeFinal = "";
      for(let i=0; i<mensaje.length; i++){
        resultado = mensaje.charCodeAt(i);
      if(resultado===32){
        mensajeFinal = mensajeFinal+" ";
      }else{
        mensajeFinal += String.fromCharCode((resultado-90-clave)%26+90);
       //console.log(mensajeFinal);
      }
      }
   return mensajeFinal;
 }
}
