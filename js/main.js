'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let idTimer = null;
let currentIndex = 0;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function  onClickLapuce(event){
    console.log("on click lapuce", event.eventTarget);
    // const clickedDot = event.eventTarget;
    // const newIndex = clickedDot.dataset.index;
    // currentIndex = newIndex;
    // // refresh();
    // location.reload(true);
}

function onClickPrecedent(){
    
    container[currentIndex].classList.toggle("active");
    puce[currentIndex].classList.toggle("gros");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = longueurTableau - 1;
    }
    container[currentIndex].classList.toggle("active");
    puce[currentIndex].classList.toggle("gros");
    console.log("on click  precedent");
}

function onClickSuivant(){
    
    container[currentIndex].classList.toggle("active");
    puce[currentIndex].classList.toggle("gros");
    currentIndex++;
    if (currentIndex >= longueurTableau) {
        currentIndex = 0;
    }
    container[currentIndex].classList.toggle("active");
    puce[currentIndex].classList.toggle("gros");

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


const container = document.querySelectorAll('main.Projection #boite img');
console.log("container: ", container);
const longueurTableau = container.length;
console.log("longueur Tableau: ", longueurTableau);

const puce = document.querySelectorAll('main.Projection #boite li');
console.log("puce: ", puce); 

document.querySelector('main.Projection #boite #lespuces li .puce').addEventListener('click', onClickLapuce);

document.querySelector('main.Projection button#precedent').addEventListener('click', onClickPrecedent);
document.querySelector('main.Projection button#suivant').addEventListener('click', onClickSuivant);

document.querySelector('main.Projection button#play').addEventListener('click', onClickPlay);
document.querySelector('main.Projection button#pause').addEventListener('click', onClickPause);



