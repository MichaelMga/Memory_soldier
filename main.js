const mainCharacter = document.getElementById("mainCharacter");

const charactersWrapper = document.getElementById("characters");

const mainCharacterLeftPosition = parseInt(getComputedStyle(mainCharacter).left.slice(0, -2));

const mainCharacterWidth = parseInt(getComputedStyle(mainCharacter).width.slice(0,-2));

const mainCharacterImg = document.getElementById("mainCharacterImg");

let mistakes = 0;

const mistakesScoreElement = document.getElementById("mistakes_score");

const updateMistakesScore = () => {
  mistakesScoreElement.innerHTML = mistakes;
}

const mistakeDetail = document.getElementById("mistake_details");

const subjects = [
    { 
       name: 'football',
       questions: [
           {
             question: "Quelles équipes ont gagnées la ligue des champions?",
             answers: {
               right:  ["Ac Milan", "Barcelone", "liverpool", "Real Madrid", "Porto", "Bayern Munich", "Manchester United", "Chelsea", "Marseille"] ,
               wrong : ["PSG", "Newcastle", "Lens", "Quevilly", "Toulouse", "Tottenham", "Montpellier"]
             }
           }
       ]
    } , 
    { 
      name: 'Parmi ces villes, lesquelles sont des capitales ?',
      questions: [
          {
            question: "Lesquelles de ces villes sont des capitales?",
            answers: {
              right: [
                "Kabul (Afghanistan)", "Tirana (Albania)", "Algiers (Algeria)", "Andorra la Vella (Andorra)", "Luanda (Angola)", 
                "Buenos Aires (Argentina)", "Yerevan (Armenia)", "Canberra (Australia)", "Vienna (Austria)", "Baku (Azerbaijan)", 
                "Nassau (Bahamas)", "Manama (Bahrain)", "Dhaka (Bangladesh)", "Bridgetown (Barbados)", "Minsk (Belarus)", 
                "Brussels (Belgium)", "Belmopan (Belize)", "Porto-Novo (Benin)", "Thimphu (Bhutan)", "Sucre (Bolivia)", 
                "Sarajevo (Bosnia and Herzegovina)", "Gaborone (Botswana)", "Brasília (Brazil)", "Sofia (Bulgaria)", 
                "Ouagadougou (Burkina Faso)", "Gitega (Burundi)", "Phnom Penh (Cambodia)", "Yaoundé (Cameroon)", 
                "Ottawa (Canada)", "Praia (Cape Verde)", "Bangui (Central African Republic)", "N'Djamena (Chad)", 
                "Santiago (Chile)", "Beijing (China)", "Bogotá (Colombia)", "Moroni (Comoros)", "Kinshasa (Democratic Republic of the Congo)", 
                "San José (Costa Rica)", "Zagreb (Croatia)", "Havana (Cuba)", "Nicosia (Cyprus)", "Prague (Czech Republic)", 
                "Copenhagen (Denmark)", "Djibouti (Djibouti)", "Roseau (Dominica)", "Santo Domingo (Dominican Republic)", 
                "Quito (Ecuador)", "Cairo (Egypt)", "San Salvador (El Salvador)", "Malabo (Equatorial Guinea)", "Asmara (Eritrea)", 
                "Tallinn (Estonia)", "Mbabane (Eswatini)", "Addis Ababa (Ethiopia)", "Suva (Fiji)", "Helsinki (Finland)", 
                "Paris (France)", "Libreville (Gabon)", "Banjul (Gambia)", "Tbilisi (Georgia)", "Berlin (Germany)", "Accra (Ghana)", 
                "Athens (Greece)", "Saint George's (Grenada)", "Guatemala City (Guatemala)", "Conakry (Guinea)", 
                "Bissau (Guinea-Bissau)", "Georgetown (Guyana)", "Port-au-Prince (Haiti)", "Tegucigalpa (Honduras)", "Budapest (Hungary)", 
                "Reykjavik (Iceland)", "New Delhi (India)", "Jakarta (Indonesia)", "Tehran (Iran)", "Baghdad (Iraq)", 
                "Dublin (Ireland)", "Jerusalem (Israel)", "Rome (Italy)", "Kingston (Jamaica)", "Tokyo (Japan)", "Amman (Jordan)", 
                "Astana (Kazakhstan)", "Nairobi (Kenya)", "South Tarawa (Kiribati)", "Pyongyang (North Korea)", 
                "Seoul (South Korea)", "Kuwait City (Kuwait)", "Bishkek (Kyrgyzstan)", "Vientiane (Laos)", "Riga (Latvia)", 
                "Beirut (Lebanon)", "Maseru (Lesotho)", "Monrovia (Liberia)", "Tripoli (Libya)", "Vaduz (Liechtenstein)", 
                "Vilnius (Lithuania)", "Luxembourg (Luxembourg)", "Antananarivo (Madagascar)", "Lilongwe (Malawi)", 
                "Kuala Lumpur (Malaysia)"
            ],
              wrong : [
                "Marseille (France)", "Lyon (France)", "Nice (France)", "Toulouse (France)", "Bordeaux (France)", 
                "Los Angeles (USA)", "New York (USA)", "Chicago (USA)", "Houston (USA)", "San Francisco (USA)", 
                "Kyoto (Japan)", "Osaka (Japan)", "Nagoya (Japan)", "Sapporo (Japan)", "Kobe (Japan)", 
                "Barcelona (Spain)", "Valencia (Spain)", "Seville (Spain)", "Bilbao (Spain)", "Malaga (Spain)", 
                "Saint Petersburg (Russia)", "Novosibirsk (Russia)", "Yekaterinburg (Russia)", "Nizhny Novgorod (Russia)", "Kazan (Russia)", 
                "Mumbai (India)", "Bangalore (India)", "Chennai (India)", "Kolkata (India)", "Pune (India)", 
                "Shanghai (China)", "Beijing (China)", "Chongqing (China)", "Tianjin (China)", "Guangzhou (China)", 
                "Sydney (Australia)", "Melbourne (Australia)", "Brisbane (Australia)", "Perth (Australia)", "Adelaide (Australia)", 
                "Toronto (Canada)", "Montreal (Canada)", "Vancouver (Canada)", "Calgary (Canada)", "Edmonton (Canada)", 
                "Rio de Janeiro (Brazil)", "São Paulo (Brazil)", "Salvador (Brazil)", "Fortaleza (Brazil)", "Belo Horizonte (Brazil)", 
                "Istanbul (Turkey)", "Ankara (Turkey)", "Izmir (Turkey)", "Bursa (Turkey)", "Antalya (Turkey)", 
                "Hamburg (Germany)", "Munich (Germany)", "Cologne (Germany)", "Frankfurt (Germany)", "Stuttgart (Germany)", 
                "Alexandria (Egypt)", "Giza (Egypt)", "Shubra El-Kheima (Egypt)", "Port Said (Egypt)", "Suez (Egypt)", 
                "Durban (South Africa)", "Johannesburg (South Africa)", "Cape Town (South Africa)", "Pretoria (South Africa)", "Port Elizabeth (South Africa)", 
                "Busan (South Korea)", "Incheon (South Korea)", "Daegu (South Korea)", "Gwangju (South Korea)", "Daejeon (South Korea)", 
                "Guadalajara (Mexico)", "Monterrey (Mexico)", "Puebla (Mexico)", "Tijuana (Mexico)", "Ciudad Juárez (Mexico)", 
                "Medellín (Colombia)", "Cali (Colombia)", "Barranquilla (Colombia)", "Cartagena (Colombia)", "Cúcuta (Colombia)", 
                "Córdoba (Argentina)", "Rosario (Argentina)", "Mendoza (Argentina)", "La Plata (Argentina)", "San Miguel de Tucumán (Argentina)", 
                "Manchester (UK)", "Birmingham (UK)", "Leeds (UK)", "Glasgow (UK)", "Sheffield (UK)"
            ]
            
            
            }
          }
      ]
   }
   ]

let currentSubject = subjects[1];
const currentQuestion = currentSubject.questions[0];

const updateRightAnswersScore = () => {
  rightAnswersScoreElement.innerHTML = rightAnswersScore;
};



const moveOpponent = (character) => {

        const characterPosition = parseInt(getComputedStyle(character.element).left.slice(0,-2));

        character.element.style.left = (characterPosition - 30) + 'px';


        if(characterPosition <= 0) {
          
          charactersWrapper.removeChild(character.element);

          return;

        }

        if((characterPosition - (mainCharacterLeftPosition + (mainCharacterWidth *0.6 ) )) <= -87.5){

          if(character.targettable){
            if(character.answer.right ) {
              mistakeDetail.innerHTML = "Vous avez raté la bonne réponse : " + character.answer.value;
              mistakes++;
              updateMistakesScore();
             } 
            character.targettable = false;

         }

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
        if( (opponentsLeft - (mainCharacterLeftPosition + mainCharacterWidth ) <= 0 && opponentsLeft - (mainCharacterLeftPosition + (mainCharacterWidth * 0.6 ) ) > -87.5 ) ) {
            attackOpponent(opponent);
        } 
    } 
  )
}

const attackOpponent = (opponent) => {
   if(!opponent.answer.right){
    mistakeDetail.innerHTML = "Vous avez frappé par erreur : " + opponent.answer.value;
      mistakes++;
      updateMistakesScore();
   }
   charactersWrapper.removeChild(opponent.element);

}

const opponentsOnScreen = [];


const makeOpponentAppear = () => {

  const newOpponent = {
    element: null,
    targettable: true,
    answer: {
        right: null,
        value: null
    }
  }

const tryToGetAnswer = (randomVal) => {

  const [answerType, otherAnswerType] = randomVal > 0.5 ? [currentSubject.questions[0].answers.right, currentSubject.questions[0].answers.wrong] :  [currentSubject.questions[0].answers.wrong, currentSubject.questions[0].answers.right]

 if(answerType.length > 0) {

    return { value: answerType.splice(Math.floor(Math.random() * answerType.length ),1), right: answerType === currentSubject.questions[0].answers.right}

  } else if (otherAnswerType.length > 0) {

    return { value: answerType.splice(Math.floor(Math.random() * answerType.length ),1), right: otherAnswerType === currentSubject.questions[0].answers.right }
  } else {

      return "levelDone";

 }

}

  const randomVal = Math.random();

  const answer = tryToGetAnswer(randomVal);

  if(answer === 'levelDone'){
    return;
  } else {
    newOpponent.answer = answer;
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

  console.log(newOpponent.answer)
    
  requestAnimationFrame( () => moveOpponent(newOpponent));

  setTimeout(
    makeOpponentAppear
  , Math.floor( 1000 + (3000 * Math.random())));
}

window.onload =
() => {
 
    makeOpponentAppear();

    updateMistakesScore(); //init mistakes score

    currentSubject = subjects[1];

    document.getElementById("subject_container").innerHTML = currentSubject.name;

   window.addEventListener("keyup", 
   (event) => {
    if(event.code === "Space") attack();
   })
}


