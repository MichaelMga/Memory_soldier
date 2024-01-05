const mainCharacter = document.getElementById("mainCharacter");

const charactersWrapper = document.getElementById("characters");

const mainCharacterLeftPosition = parseInt(getComputedStyle(mainCharacter).left.slice(0, -2));

const mainCharacterWidth = parseInt(getComputedStyle(mainCharacter).width.slice(0,-2));

console.log("mw >" + mainCharacterWidth);

const mainCharacterImg = document.getElementById("mainCharacterImg");


const subjects = [
    { 
       name: 'football',
       questions: [
           {
             question: "Quelles équipes ont gagnées la ligue des champions?",
             answers: {
               right:  ["Ac Milan", "Barcelone"] ,
               wrong : ["PSG", "Newcastle"]
             }
           }
       ]
    } 
   ]

const currentSubject = subjects[0];
const currentQuestion = currentSubject.questions[0];

const moveOpponent = (character) => {

        const characterPosition = parseInt(getComputedStyle(character).left.slice(0,-2));
        character.style.left = `${characterPosition - 3}px`;

        if((characterPosition - (mainCharacterLeftPosition + mainCharacterWidth)) <= -75){

            alert('there is contact !');

            alert("ol>" + characterPosition + "ml >" + (mainCharacterLeftPosition + mainCharacterWidth))

            return;
        }
        
        requestAnimationFrame( () => moveOpponent(character))   
}


const attack = () => {

  mainCharacterImg.src = "assets/strike.png";

  setTimeout(
   () => mainCharacterImg.src = "assets/ds.png", 100
  )
  

  opponentsOnScreen.forEach(
    (opponent) => {
        const opponentsLeft = parseInt(getComputedStyle(opponent.element).left.slice(0,-2));
        if( (opponentsLeft - (mainCharacterLeftPosition + mainCharacterWidth ) <= 0 && opponentsLeft - (mainCharacterLeftPosition + mainCharacterWidth) > -75 ) ) {
            attackOpponent(opponent);
        } 
    } 
  )
}

const attackOpponent = (opponent) => {
   charactersWrapper.removeChild(opponent.element);
}

const opponentsOnScreen = [];


const makeOpponentAppear = () => {

  const newOpponent = {
    element: null,
    answer: {
        right: null,
        value: null
    }
  }
  

  const randomVal = Math.random();

  newOpponent.answer = randomVal > 0.5 ? { 
    right: true,
    value: currentQuestion.answers.right.pop()
  } :  { 
    right: true,
    value: currentQuestion.answers.wrong.pop()
  }

  const newOpponentElement = document.createElement("div");

  
  const newOpponentsWrapper = document.createElement("div");

  newOpponentsWrapper.style.position = "absolute";
  newOpponentsWrapper.style.left = "98%";
  newOpponentsWrapper.style.bottom = "0px";
  newOpponentsWrapper.style.height = '300px';
  newOpponentsWrapper.style.width = '200px';
  newOpponentsWrapper.style.display = 'flex';
  newOpponentsWrapper.style.flexDirection = 'column';
  newOpponentsWrapper.style.alignItems = 'center';
  newOpponentsWrapper.style.justifyContent = 'space-between';



  newOpponentElement.style.height = "50px";
  newOpponentElement.style.width = "25px";
  newOpponentElement.style.background = "red";

  const newOpponentText = document.createElement("div");
  newOpponentText.style.width = "100%";
  newOpponentText.style.height = '100px';
  newOpponentText.style.display = 'flex';
  newOpponentText.style.justifyContent = 'center';
  newOpponentText.style.alignItems = 'center';
  newOpponentText.innerHTML = newOpponent.answer.value;


  newOpponentText.style.background = "purple";


  newOpponent.element = newOpponentsWrapper;


  newOpponentsWrapper.appendChild(newOpponentText);
  newOpponentsWrapper.appendChild(newOpponentElement);


  charactersWrapper.appendChild(newOpponentsWrapper);  
  
  opponentsOnScreen.push(newOpponent);
  
  requestAnimationFrame( () => moveOpponent(newOpponent.element));

  return;

  setTimeout(
    makeOpponentAppear
  , Math.floor( 500 + (3000 * Math.random())));
}


window.onload =
() => { 
    makeOpponentAppear();

   window.addEventListener("keyup", 
   (event) => {
    if(event.code === "Space") attack();
   })
}
