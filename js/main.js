var pointUser = 0;
var pointOrdi = 0;



function player () {
  var play=prompt ("Choose a pseudo name ?");
  document.getElementById("pseudo").innerHTML="Take the good choice " + play;
}



//On crée une fonction avec les 2 choix qui retrournera le choix gagnant//
function comparer (choixUtilisateur) {

    var choixOrdi = Math.random(); //valeur aleatoire entre 0 et 1//

  //On traduit ce nombre aleatoire en un choix aleatoire entre pierre, papier, ciseaux//
    if (choixOrdi < 0.34) {
          	choixOrdi = "pierre";
            document.getElementById("imgOrdi").src="img/POrdi.jpg";

          }
            else if(choixOrdi <= 0.67) {
          	choixOrdi = "feuille";
            document.getElementById("imgOrdi").src="img/FOrdi.jpg";

          }

            else {
          	choixOrdi = "ciseaux";
            document.getElementById("imgOrdi").src="img/COrdi.jpg";
    
          }
//Affichage du resultat//
document.getElementById("resultat").innerHTML = "The computer had chosen :"  + choixOrdi;

//Si les 2 choix sont les même//
  if(choixOrdi === choixUtilisateur) {
        //  alert("Egalité !");
    }

//Sinon si le choix de l'ordi est pierre//
  else if(choixOrdi === "pierre") {

  if(choixUtilisateur === "ciseaux") {
    pointOrdi++;
    document.getElementById("score").innerHTML= "You" + " " + pointUser + "  /  " + pointOrdi + "  Computer";
    }
  else {
    pointUser++;
    document.getElementById("score").innerHTML= "You" + "  " + pointUser + "  /  " + pointOrdi + "  Computer";
    }
}

//sinon si le choix de l'ordi est feuille//
  else if(choixOrdi==="feuille") {

    if(choixUtilisateur==="pierre") {
      pointOrdi++;
      document.getElementById("score").innerHTML= "You" + "  " + pointUser + "  /  " + pointOrdi + "  Computer";
    }
    else {
      pointUser++;
      document.getElementById("score").innerHTML= "You" + "  " + pointUser + "  /  " + pointOrdi + "  Computer";
    }

}

//Sinon si le choix de l'ordi est ciseaux//
  else if(choixOrdi==="ciseaux") {

    if(choixUtilisateur==="pierre") {
      pointUser++;;
      document.getElementById("score").innerHTML= "You" + "  " + pointUser + "  /  " + pointOrdi + "  Computer";
    }
    else {
      pointOrdi++;
      document.getElementById("score").innerHTML= "You" + "  " + pointUser + "  /  " + pointOrdi + "  Computer";
    }

}

//Affichage des scores//
if (pointUser ==3 ) {
  alert("WINNER !") ;
  pointUser = 0;
  pointOrdi = 0;
  document.getElementById("score").innerHTML= "You" + "  " + pointUser + "  /  " + pointOrdi + " Computer";

}
if (pointOrdi ==3 ) {
  alert("LOOSER !") ;
  pointUser = 0;
  pointOrdi = 0;
  document.getElementById("score").innerHTML= "You" + "  " + pointUser + " /   " + pointOrdi + " Computer";
}

}
