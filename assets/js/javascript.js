function reproducir(){
  var reproducir =document.getElementById("audio");
  var avance=document.getElementById("avance");
  reproducir.play();
  avance.max = document.getElementById("audio").duration;
}

function pausar(){
  var pausar=document.getElementById("audio");
  pausar.pause();
}

function parar(){
  var detener = document.getElementById("audio");
  detener.pause();
  detener.currentTime = 0;
}

function subirVolumen(){
  var player = document.getElementById("audio");
  if(player.volume<1){
    player.volume+=0.1
  }

}

function bajarVolumen(){
   var player = document.getElementById("audio");
   if(player.volume>=0.1){
     player.volume-=0.1
   }
}

function adelantar(){
  var adelanta=document.getElementById("audio")
  adelanta.currentTime+=5;
}

function retroceder(){
  var retroceso=document.getElementById("audio")
  retroceso.currentTime-=5;
}

function avanceBarra(){
  var avance=document.getElementById("avance");
  //console.log(avance);
  avance.value = document.getElementById("audio").currentTime;
}


function subirYBajarVolumen(){
  var audio = document.getElementById("audio");
  var volumen = document.getElementById("volumen").value/100;
  console.log(volumen);
  audio.volume =volumen;
}


function cambiarCancion(){
  var listaCancion = document.getElementById("audio");
  var imagenCancion = document.getElementById("imagenCancion");
  var cancion = parseInt(document.getElementById("selecCancion").value);
  console.log(typeof cancion);

  console.log(cancion);
  switch (cancion) {
    case 1:
      listaCancion.src="assets/audios/CumbiaNinjaSubirealinfierno-FeatHAASH.mp3";
      imagenCancion.src="assets/images/CUMBIA-NINJA.jpg";
      imagenCancion.style.display ="block";
      break;
    case 2:
      listaCancion.src="assets/audios/AlejandraGuzmán-AunqueMeMientas.mp3";
      imagenCancion.src="assets/images/AunqueMeMientas.jpg";
      imagenCancion.style.display ="block";
      break;
    case 3:
      listaCancion.src="assets/audios/Aural-TeQuierolyrics.mp3";
      imagenCancion.src="assets/images/Aural-TeQuierolyrics.jpg";
      imagenCancion.style.display ="block";
      break;
    case 4:
      listaCancion.src="assets/audios/DavidBisbal-DiezMilManeras.mp3";
      imagenCancion.src="assets/images/DavidBisbal-DiezMilManeras.jpg";
      imagenCancion.style.display ="block";
      break;
    case 5:
        listaCancion.src="assets/audios/KatyPerry-Roar.mp3";
        imagenCancion.src="assets/images/KatyPerry-Roar.jpg";
        imagenCancion.style.display ="block";
        break;
    default:
      imagenCancion.style.display ="none";
  }
}
