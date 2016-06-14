(function() {

  var revendications = ["NON",
  "STOP AU TRAVAIL",
  "DEHORS LE GOUVERNEMENT",
  "DEHORS LES PATRONS",
  "GREVE GENERALE",
  "BLOQUONS TOUT",
  "Y EN A MARRE",
  "DANS LA RUE",
  "LE POUVOIR A CELUI QUI CRIE LE PLUS FORT",
  "MORT AUX AUTRES",
  "C'EST LA LUTTE",
  "LA MOUSTACHE, C'EST LA VIE", // ça va pas marcher sur IE8 mais tant pis !
  ]; // To Be Continuede


  //Parce que la lutte, c'est souvent rouge
  //et que les communiqués avec du comic sans c'est classe
  setFondRouge();

  //Comme toute bonne contestation, il faut bloquer
  blockPage();



  function elementAuHazardFrom(liste){
    return liste[Math.floor(Math.random()*liste.length)];
  }

  function setBlocageAleatoire() {
    setTimeout(blockPage,Math.random() * (10000 - 1000) + 1000)
  }



  function blockPage(){
    ambianceSonore();
    alert(elementAuHazardFrom(revendications)+" !!!");
    setBlocageAleatoire();
  }



  function setFondRouge(){
    document.body.style.background = "red";
    document.body.style.fontFamily = "Comic Sans MS"
  }


  function ambianceSonore(){
    var son = new Audio("http://maxdow.github.io/cgt.js/ambiance.mp3");
    son.play();
  }

})()