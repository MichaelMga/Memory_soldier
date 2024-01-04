const mainCharacter = document.getElementById("mainCharacter");

const charactersWrapper = document.getElementById("characters");

const mainCharacterLeftPosition = parseInt(getComputedStyle(mainCharacter).left.slice(0, -2));
const opponent1 = document.getElementById("opponent1");

const launchOpponent = (character) => {

        const characterPosition = parseInt(getComputedStyle(character).left.slice(0,-2));
        character.style.left = `${characterPosition - 3}px`;

        if((characterPosition - mainCharacterLeftPosition) <= 0){
            alert('there is contact !');
            return;
        }
        
        requestAnimationFrame( () => launchOpponent(character))   
}


const attack = () => {

  opponentsOnScreen.forEach(
    (opponent) => {
        const opponentsLeft = parseInt(getComputedStyle(opponent).left.slice(0,-2));
        if( (opponentsLeft - mainCharacterLeftPosition >= 0 && opponentsLeft - mainCharacterLeftPosition <= 200 ) ) {
            attackOpponent();
        } 
    } 
  )
}

const attackOpponent = () => {
   alert("you successfully attacked an opponent");
}

const opponentsOnScreen = [];


const makeOpponentAppear = () => {

  const newOpponent = document.createElement("div");

  newOpponent.style.position = "absolute";
  newOpponent.style.height = "50px";
  newOpponent.style.width = "25px";
  newOpponent.style.left = "1200px";
  newOpponent.style.bottom = "0px";

  newOpponent.style.background = "green";

  charactersWrapper.appendChild(newOpponent);  
  
  opponentsOnScreen.push(newOpponent);


  requestAnimationFrame( () => launchOpponent(newOpponent))   
   

}


window.onload =
() => { 
    makeOpponentAppear();

   window.addEventListener("keyup", 
   (event) => {
    if(event.code === "Space") attack();
   })
}
