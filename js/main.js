'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let idTimer = null;
let currentIndex = 0;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onClickPrecedent(){
    
    container[currentIndex].classList.toggle("active");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = longueurTableau - 1;
    }
    container[currentIndex].classList.toggle("active");
    console.log("on click  precedent");
}

function onClickSuivant(){
    
    container[currentIndex].classList.toggle("active");
    currentIndex++;
    if (currentIndex >= longueurTableau) {
        currentIndex = 0;
    }
    container[currentIndex].classList.toggle("active");
    console.log("on click  suivant");
}



function onClickPlay(){
    idTimer = window.setInterval(onClickSuivant, 1000);

}

function onClickPause(){
    window.clearInterval(idTimer);  
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


const container = document.querySelectorAll('main.projection #boite img');
console.log("container: ", container);
const longueurTableau = container.length;
console.log("longueur Tableau: ", longueurTableau);


document.querySelector('main.projection button#precedent').addEventListener('click', onClickPrecedent);
document.querySelector('main.projection button#suivant').addEventListener('click', onClickSuivant);

document.querySelector('main.projection button#play').addEventListener('click', onClickPlay);
document.querySelector('main.projection button#pause').addEventListener('click', onClickPause);

