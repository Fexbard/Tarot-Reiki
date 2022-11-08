function vermas(id){
if(id=="mas"){
document.getElementById("desplegar").style.display="block";
document.getElementById("mas").style.display="none";
}
else if(id=="mas2"){
  document.getElementById("desplegar2").style.display="block";
  document.getElementById("mas2").style.display="none";
}
else if(id=="mas3"){
  document.getElementById("desplegar3").style.display="block";
  document.getElementById("mas3").style.display="none";
}
else if(id=="mas4"){
  document.getElementById("desplegar4").style.display="block";
  document.getElementById("mas4").style.display="none";
}
else{
document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
}
function vermenos(id){
if(id=="menos"){
document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
else if(id=="menos2"){
document.getElementById("desplegar2").style.display="none";
document.getElementById("mas2").style.display="inline";
}
else if(id=="menos3"){
document.getElementById("desplegar3").style.display="none";
document.getElementById("mas3").style.display="inline";
}
else if(id=="menos4"){
document.getElementById("desplegar4").style.display="none";
document.getElementById("mas4").style.display="inline";
}

else{
document.getElementById("desplegar").style.display="block";
document.getElementById("menos").style.display="inline";
}
}
