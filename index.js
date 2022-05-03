window.onload = inicio;
const nombreCorrecto="perrear"


function inicio(){
 document.getElementById("boton1").onclick=leer;
}

function leer(){
  let nombre=(document.querySelector("#campo").value).toLowerCase();
  if(nombre==nombreCorrecto){
    document.getElementById("caja").innerHTML=`  Correcto Hoy se perrea 🐕💃 hasta abajo 👇  😁`
  }
  else if(nombre=="dormir temprano"){
    document.getElementById("caja").innerHTML=` No!`
  }
  else 
  {
    document.getElementById("caja").innerHTML="🤮";
    document.getElementById("campo").value="";
    document.getElementById("campo").focus();
  }


  

}