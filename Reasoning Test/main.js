import { displayTime, startTime} from './timer.js';



let adjectiveObject;
let adverbArray = [' is not as ', ' is '];
let personArray = [];
let count = 0;
let adverb;
let stemAdjectVariant;
let num;
let isButtonOne = false;
let isButtonTwo = false;

const mainSentence = document.getElementById('main-sentence');
const counter = document.getElementById('counter');
const btns = document.getElementById('btns');
const btnA = document.getElementById('button-A');
const btnB = document.getElementById('button-B');
const startBtn = document.getElementById('start-btn');

fetch('personalAdjective.json').then(function (response) {
  return response.json();
}).then(function (json) {
  adjectiveObject = json;
}).catch(function (err) {
  console.log('Fetch problem: ' + err.message);
});

const friends = [
  { "name": "Tom", "gender": "male" },
  { "name": "Jane", "gender": "female" },
  { "name": "Bill", "gender": "male" },
  { "name": "Sam", "gender": "female" },
  { "name": "George", "gender": "male" },
  { "name": "Joan", "gender": "female" },
  { "name": "William", "gender": "male" },
  { "name": "Josh", "gender": "male" },
  { "name": "Gill", "gender": "female" },
  { "name": "Greg", "gender": "male" }
];


const pickPerson = function () {
  return friends[Math.floor(Math.random() * friends.length)];
}

const definePerson = function () {
  let person = pickPerson();


  if(personArray.length === 2) {
    personArray = [];
  }

  if (!personArray[0]) {
    personArray.push(person);
    return definePerson();
  } else if (personArray[0].gender === person.gender && personArray[0] !== person) {
    personArray.push(person);
  } else {
    return definePerson();
  }
  return personArray;
}

const getRandomNumber = function (adjectiveObject) {
  return Math.floor(Math.random() * adjectiveObject.length);
}


const randomAdverb = function () {
  // call function somewhere so data is stored in variable and is accessable throughtout the ode below
  let adverbArray = [' is not as ', ' is '];
  return adverbArray[Math.floor(Math.random() * adverbArray.length)];
}

const changeAdverb = function (adverb) {
  // might have to put the adverbArray as a global value
  let adverbArray = [' is not as ', ' is '];
  let prepositon;


  if (adverb === adverbArray[0]) {
    return prepositon = ' as ';
  }

  return prepositon = ' than ';
}

// maybe it makes sense tw create one fn out of the below returing an array instead
const getAdjective = function (adjectiveObject, randomNumber) {
  let adjective = adjectiveObject[randomNumber].adjective;
  return adjective;
}

const getAdjectiveType = function (adjectiveObject, randomNumber) {
  const adjectiveVariation = ['synonyms', 'antonyms'];
  const typeNum = Math.floor(Math.random() * adjectiveVariation.length);
  const type = adjectiveVariation[typeNum];

  return adjectiveObject[randomNumber][type];
}

const syllableFinder = function (stemAdjective) {

  let adjective = stemAdjective.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let countedVowels = 0;
  let syllable = 0;
  let isVowel = false;

  for (let i = 0; i < adjective.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (adjective[i] === vowels[j]) {
        isVowel = true;
      }
    }

    if (isVowel) {
      countedVowels++;
      isVowel = false;
    } else {
      if (countedVowels) {
        syllable++;
        countedVowels = 0;
      }
    }
  }

  if (countedVowels) {
    syllable++;
    countedVowels = 0;
  }


  if (stemAdjective.endsWith('y')) {
    syllable++;
  }
  return syllable;
}

const adjectiveEnding = function (adj, syllable, adverb) {

  let comparativeAdjective = adj;
  if (adverb === ' is ') {
    if (syllable === 1) {
      if (comparativeAdjective.endsWith('e')) {
        return comparativeAdjective += 'r';
      } else {
        return comparativeAdjective += 'er';
      }
    }


    if (syllable > 1) {
      if (comparativeAdjective.endsWith('y')) {
        let slicedLength = comparativeAdjective.length - 1;
        let slicedAdjective = comparativeAdjective.slice(0, slicedLength);
        return comparativeAdjective = slicedAdjective + 'ier';
      } else {
        return comparativeAdjective = 'more ' + comparativeAdjective;
      }
    }
  }
  return comparativeAdjective;
}

// btn fn should call score function otherwise false
let btnOneActive = function () {
  isButtonOne = true;
  return countScore(isButtonOne);
}

let btnTwoActive = function () {
 isButtonTwo = true;
  return countScore(isButtonTwo);
}


const countScore = function () {
  if (isButtonOne === true) {
    if (adverb === adverbArray[0] && adjectiveObject[num].antonyms === stemAdjectVariant) {
      count++;
    } else if (adverb === adverbArray[1] && adjectiveObject[num].synonyms === stemAdjectVariant) {
      count++;
    }
  } else if (isButtonTwo === true) {
    if (adverb === adverbArray[0] && adjectiveObject[num].synonyms === stemAdjectVariant) {
      count++;
    } else if (adverb === adverbArray[1] && adjectiveObject[num].antonyms === stemAdjectVariant) {
      count++;
    }
  }
  isButtonOne = false;
  isButtonTwo = false;

  counter.innerHTML = count;
}

// It should be organised better
const displaySentecne = function () {
  definePerson();
  num = getRandomNumber(adjectiveObject);
  adverb = randomAdverb();
  let secondAdverb = ' is ';
  let prepositon = changeAdverb(adverb);
  let stemAdjective = getAdjective(adjectiveObject, num);
  stemAdjectVariant = getAdjectiveType(adjectiveObject, num);
  let adjectiveSyllables = syllableFinder(stemAdjective);
  let adjectVariantSyllables = syllableFinder(stemAdjectVariant);
  let adjective = adjectiveEnding(stemAdjective, adjectiveSyllables, adverb);
  let adjectVariant = adjectiveEnding(stemAdjectVariant, adjectVariantSyllables, secondAdverb);
  // let score = countScore(num, adverb);

  mainSentence.innerHTML = personArray[0].name + adverb + adjective + prepositon + personArray[1].name + '. ' + 'Who ' + secondAdverb + adjectVariant + '? ';
  btnA.innerHTML = personArray[0].name;
  btnB.innerHTML = personArray[1].name;
}


let startBtnActive = function () {
  let isStartBtn = true;
  setTimer(isStartBtn);  
}

let startBtnInactive = function () {
  startBtn.style.display = "none";
}


const setTimer = function (isStartBtn) {

  startTime(isStartBtn);
  displaySentecne();
  startBtnInactive();
  btns.style.display = '';
}

startBtn.addEventListener('click', displayTime);
startBtn.addEventListener('click', startBtnActive);
btns.style.display = 'none';

btnA.addEventListener('click', btnOneActive);
btnA.addEventListener('click', displaySentecne);

btnB.addEventListener('click', btnTwoActive);
btnB.addEventListener('click', displaySentecne);
