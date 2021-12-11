(function () {

const personOne = document.getElementById('PersonA')
const firstAdverb = document.getElementById('firstAdverb')
const adjectiveTag = document.getElementById('adjective')
const prepositionTag = document.getElementById('preposition')
const personTwo = document.getElementById('PersonB')
const altAdjective = document.getElementById('altAdjective')

const counter = document.getElementById('counter');
const btns = document.getElementById('btns');
const btnA = document.getElementById('button-A');
const btnB = document.getElementById('button-B');

let adjectives,
    adverb,
    adjectiveType,
    word,
    stopWatch,
    count = 0,
    clickCount = 0,
    isButtonOne = false,
    isButtonTwo = false,
    timeUnit = 180;


// fetches json file that hols all the adjectives and their variants
fetch('personalAdjective.json').then(function (response) {
  return response.json();
}).then(function (json) {
  adjectives = json;
  timer();
  initalize();
}).catch(function (err) {
  console.log('Fetch problem: ' + err.message);
});


const people = [
  { name: "Tom", gender: "male" },
  { name: "Jane", gender: "female" },
  { name: "Bill", gender: "male" },
  { name: "Sam", gender: "female" },
  { name: "George", gender: "male" },
  { name: "Joan", gender: "female" },
  { name: "William", gender: "male" },
  { name: "Josh", gender: "male" },
  { name: "Gill", gender: "female" },
  { name: "Greg", gender: "male" }
];

// definining the name of each person with their corresponding gender - they are chosen randomly 
const randomPerson = (subject) => {
  return subject[Math.floor(Math.random() * subject.length)];
}

function definePersonA() {
  const personA = randomPerson(people);
  return definePersonB(personA);
}

function definePersonB(personA) {
  const personB = randomPerson(people);
  if(personB === personA) return definePersonB(personA);
  if(personB.gender !== personA.gender) return definePersonB(personA);
  return displayNames(personA, personB);
}

function displayNames(personA, personB) {
  personOne.innerHTML = personA.name;
  personTwo.innerHTML = personB.name + ".";
  btnA.innerHTML = personA.name;
  btnB.innerHTML = personB.name;
}



// define adverb and prepostion 
function defineAdverb () {
  const adverbArray = [' is not as', ' is'];
  let position = Math.floor(Math.random() * adverbArray.length);
  adverb = adverbArray[position];
  return definePreposition(adverb);
}

function definePreposition (adverb) {
  let preposition = (adverb === ' is not as')? ' as': ' than';
  return displayWords(adverb, preposition)
}

function displayWords(adverb, preposition) {
  firstAdverb.innerHTML = adverb;
  prepositionTag.innerHTML = preposition;
}




// findes the sylabells in the adjective 
const syllableFinder = (stemAdjective) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let adjective = stemAdjective.split('');
  let countedVowels = 0;
  let syllable = 0;
  let isVowel = false;
  adjective.forEach(function(letter) {
    vowels.forEach(function(vowel) {
      if(letter === vowel) {
        isVowel = true;
      }
    })
    if(isVowel) {
      countedVowels++;
      isVowel = false;
    } else {
      if(countedVowels) 
      syllable++;
      countedVowels = 0;
    }
  })
  if (countedVowels) {
    syllable++;
    countedVowels = 0;
  }
  if (stemAdjective.endsWith('y')) {
    syllable++;
  }
  return syllable;
}


// adds the apropriated ending there are still some cases missing here
const adjectiveEnding = (adjective, syllable, adverb) => {
  if (adverb === ' is') {
    if (syllable === 1) {
      if (adjective.endsWith('e')) {
        return adjective += 'r';
      } else {
        return adjective += 'er';
      }
    }
    if (syllable > 1) {
      if (adjective.endsWith('y')) {
        let length = adjective.length - 1;
        let sliced = adjective.slice(0, length);
        return adjective = sliced + 'ier';
      } else {
        return adjective = 'more ' + adjective;
      }
    }
  }
  return adjective;
}

// the next three function call the syllable finder and adding the endings for both adjective in the sentence

// first adjective
const getAdjective = () => {
  word = randomPerson(adjectives)
  let adjective = word.adjective;
  let sylablesInAdjective = syllableFinder(adjective);
  let convertedAdjective = adjectiveEnding(adjective, sylablesInAdjective, adverb);
  return getAdjectiveType(word, convertedAdjective);
}

// second adjective 
const getAdjectiveType = (word, convertedAdjective) => {
  const secAdverb = " is";
  const adjectiveVariation = ['synonyms', 'antonyms'];
  const position = Math.floor(Math.random() * adjectiveVariation.length);
  const type = adjectiveVariation[position];
  adjectiveType = word[type];
  let sylablesInAdjectiveType = syllableFinder(adjectiveType);
  let convertedAdjectiveType = adjectiveEnding(adjectiveType, sylablesInAdjectiveType, secAdverb);
  return displayAdjective(convertedAdjective ,convertedAdjectiveType)
}

function displayAdjective(convertedAdjective ,convertedAdjectiveType) {
  adjectiveTag.innerHTML = convertedAdjective; 
  altAdjective.innerHTML = 'Who is ' + convertedAdjectiveType + ' ?'; 
}


// scores the game 
const countScore = () => {

  if (isButtonOne === true) {
    if (adverb === ' is not as' && word.antonyms === adjectiveType) {
      count++;
    } else if (adverb === ' is' && word.synonyms === adjectiveType) {
      count++;
    }
  } else if (isButtonTwo === true) {
    if (adverb === ' is not as' && word.synonyms === adjectiveType) {
      count++;
    } else if (adverb === ' is' && word.antonyms === adjectiveType) {
      count++;
    }
  }
  isButtonOne = false;
  isButtonTwo = false;

  counter.innerHTML = count + ' / 70';
}



// btnA that call the score function
let btnOneActive = (event) => {
  isButtonOne = true;
  return countScore(isButtonOne);
}

// btnB that also calls score function
let btnTwoActive = (event) => {
 isButtonTwo = true;
  return countScore(isButtonTwo);
}

// counts clicks 
const clicksCount =  () => {
  clickCount++
  if(clickCount === 70) {
    highScore()
    location.href = "/End/end.html"
  }
}

// the timer that displays time but also stops time
const displayTime = function() {

  // Calculate current hours, minutes, and sceonds
  let hours = Math.floor(timeUnit / 3600);
  let min = Math.floor((timeUnit % 3600) / 60);
  let sec = Math.floor(timeUnit % 60);

  // display extra zero in the display
  let displayHour = (hours < 10) ? '0' + hours : hours;
  let displayMin = (min < 10) ? '0' + min : min;
  let displaySec = (sec < 10) ? '0' + sec : sec;



  document.querySelector('.clock').textContent = displayHour + ':' + displayMin + ':' + displaySec;

  timeUnit--;

  // stops time call highScore
  if (displayMin === '00' && displaySec === '00') {
    clearInterval(stopWatch);
    highScore()
    location.href = "/End/end.html"
  }
}


// starts timer and repeats the process
const startTime = function () {
    stopWatch = setInterval(displayTime, 1000);
}

// stores the score in local storage 
const highScore = () => {
  return localStorage.setItem("lastScore", JSON.stringify(count))
}



// set's up timer and starts it
function timer() {
  displayTime();
  startTime();
}


// starts up by calling the various function that create the sentenc
function initalize() {
  definePersonA();
  defineAdverb();
  getAdjective();
  countScore();
}

// functionality of the buttons 
btnA.addEventListener('click', btnOneActive);
btnA.addEventListener('click', clicksCount);
btnA.addEventListener('click', initalize);

btnB.addEventListener('click', btnTwoActive);
btnB.addEventListener('click', clicksCount);
btnB.addEventListener('click', initalize);
})();
