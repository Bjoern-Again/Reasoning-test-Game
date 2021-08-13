


fetch('personalAdjective.json').then(function(response) {
  return response.json();
}).then(function(json) {
  let personalAdjective = json;
  initialize(personalAdjective);
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});



function initialize(objAdjective) { 

  const mainSentence = document.getElementById('main-sentence');
  const counter = document.getElementById('counter');
  const btnA = document.getElementById('button-A');
  const btnB = document.getElementById('button-B');

  const obj = objAdjective;

  const friends = [
      {"name":"Tom", "gender": "male"},
      {"name":"Jane", "gender": "female"},
      {"name":"Bill", "gender": "male"},
      {"name":"Sam", "gender": "female"},
      {"name":"George", "gender": "male"},
      {"name":"Joan", "gender": "female"},
      {"name":"William", "gender": "male"},
      {"name":"Josh", "gender": "male"},
      {"name":"Gill", "gender": "female"},
      {"name":"Greg", "gender": "male"}
  ];




  document.getElementById('start-btn').addEventListener('click', displayTime);
  document.getElementById('start-btn').addEventListener('click', startTime);
  document.getElementById('btns').style.display = 'none';

  let personA;
  let personB; 
  let perposition = ''; 
  let verb = ''; 
  let adjective;
  let count = 0;
  let buttonA;
  let buttonB;
  let gender;
  let num;
  let adverb;
  let startBtn = true;
  let timeUnit = 0;
  const adverbChange = [' is not as ', ' is '];

 
 

  // adds event listener to button 
  btnA.addEventListener('click', pressBtnOne);  
  btnA.addEventListener('click', whoIs);
  btnA.addEventListener('click', setUp)      

  btnB.addEventListener('click', pressBtnTwo);  
  btnB.addEventListener('click', whoIs); 
  btnB.addEventListener('click', setUp)    



  function setUp() {

    personA = '';
    personB = '';

    // allocates differ gender to person which gives person different name according to gender
    const sex = ['male', 'female'];
    gender = sex[Math.floor(Math.random() * sex.length)];

    adverb = adverbChange[Math.floor(Math.random() * adverbChange.length)]

    // randomly choses a number from all the possible objects 
    num = Math.floor(Math.random() * obj.length);

    if(adverb === adverbChange[0]) {
      perposition = ' as ';
    } else {
      perposition = ' than ';
    }
  chosePerson();
  }




      
  function chosePerson() {

    // random object is chosen 
    person = friends[Math.floor(Math.random() * friends.length)];
  
    // determins what the object is what to do with it
    if(person.gender === gender) { 
      // if gender is correct then checks if personA has been pre defined
      if(personA === '') {
        // defined personA by giving it a name and then calling whichPerson again to define personB
        personA = person.name;
        chosePerson(friends)
      } else if(personB === '') {
          // checks if personA is same as the person if so runs function to define new person
          if(personA === person.name) {
            chosePerson(friends)
          } else {
          // if name is not taken, name is given to personB
            personB = person.name;
          }
      } 
      // the else beslongs to the question of gender 
    } else {
      // if gender is not correct define chose new person 
      chosePerson(friends);
      }
    getAdjective()
  }



  function getAdjective() {
   

    const adjectiveTypeArray = ['synonyms', 'antonyms'];
    const typeNum = Math.floor(Math.random() * adjectiveTypeArray.length);

    // decides which adject type through randomness
    const adjectiveType = adjectiveTypeArray[typeNum];
    // attaches adjective from json to adjective variable
    adjective = obj[num].adjective;
    type = obj[num][adjectiveType]; 

    const length = adjective.length;
    const sliceLength = adjective.length - 1;
    
    adjectiveEnding(); 
  }

function adjectiveEnding() {

    let stemAdjective = adjective.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const length = adjective.length;
    const sliceLength = adjective.length - 1;
    verb = type;
    const verbLength = type.length;
    const slicedVerb = type.length - 1; 

    let count = 0;
    let syllable = 0;
    let isVowel = false;

    // loops through adjective array
    for(let i = 0; i < stemAdjective.length; i++) {
        // loops through vowels
        for(let j = 0; j < vowels.length; j++) {
        // compares adjectives against vowels
        if(stemAdjective[i] === vowels[j]) {
            // if letter of adjective is a vowel the turnded to true
            isVowel = true;
        }
        }
        // inside the stemAdjective loop, checks if the letter is a vowel
        if(isVowel) {
        // if letter is vowel the count and set reset vowel to normal letter
        count++;
        isVowel = false;
        } else {
        /* 
        if the letter is not a vowel then check if there is count of the previous vowels
        and add a syllable this way the code counts vowels until a constnant and groups them
        together as one syllable

        count is set 0 as the next vowels in the adjective are induvidual syllables 
        */
        if(count) {
            syllable++;
            count = 0; 
        }
        }
    }

    if(adjective.endsWith('y')) {
      syllable++;
   }

    if(adverb === ' is ') {
      if(syllable === 1) {
 
        if (adjective.endsWith('e')) {
          adjective += 'r';
        } else {
          adjective += 'er'
        }
      } else {
        if(adjective.endsWith('y')) {
          let slicedLength = adjective.length - 1; 
          let slicedAdjective = adjective.slice(0, slicedLength);
          adjective = slicedAdjective + 'ier';
        } else {
          adjective = 'more ' + adjective;
        }
      }
    }
 
    if(type.endsWith('y', verbLength)) {
      let stemType = type.slice(0, slicedVerb);
      verb = stemType + 'ier'         
    } else if (type.endsWith('e', verbLength)) {
      verb += 'r';
    } else {
      verb += 'er'; 
    }

    displaySentecne();
  }

      


  // maybe I should create object for person that stores different values name, gender true and false on it
  function pressBtnOne() {
    buttonA = true;
  }

  function pressBtnTwo() {
    buttonB = true
  }

  function whoIs() {
    // const adjectiveTypeArray = ['synonyms', 'antonyms'];
    // js dosn't know what atonyms or synonyms are 
    // think of different way to extract those key words 
    // object property has to equal to
    if(buttonA === true) {
      if(adverb === adverbChange[0] && obj[num].antonyms === type) {
        count++
      } else if(adverb === adverbChange[1] && obj[num].synonyms === type) {
        count++;
      }
    } else if (buttonB === true) {
      if(adverb === adverbChange[0] && obj[num].synonyms  === type) {
        count++;
      } else if (adverb === adverbChange[1] && obj[num].antonyms  === type) {
        count++; 
      }
    }
    buttonA = false;
    buttonB = false;

    displaySentecne();
  }

  function displaySentecne() {
    // pretty self explanatory 
    mainSentence.innerHTML = personA + adverb + adjective + perposition + personB + '. ' + 'Who is ' + verb + '? ';
    counter.innerHTML = count;
    btnA.innerHTML = personA;
    btnB.innerHTML = personB; 
  }

  //timer: calculates time, displays time in 00 and stop time when 3 minutes is reached 
function displayTime() {

  // Calculate current hours, minutes, and sceonds
  let hours = Math.floor(timeUnit / 3600);
  let min = Math.floor((timeUnit % 3600) / 60);
  let sec = Math.floor(timeUnit % 60);

  // display extra zero in the display
  let displayHour = (hours < 10) ? '0' + hours : hours;
  let displayMin = (min < 10) ? '0' + min : min;
  let displaySec = (sec < 10) ? '0' + sec : sec;



  document.querySelector('.clock').textContent = displayHour + ':' + displayMin + ':' + displaySec;

  timeUnit++;

  if (displayMin === '03') {
    clearInterval(stopWatch);
    mstartBtn = true;
  }
}


function startTime() {
  if (startBtn) {
    stopWatch = setInterval(displayTime, 1000);
  }
  setUp();
  startBtn = false;
  if (startBtn === false) {
    document.getElementById('start-btn').style.display = "none";
  }
  document.getElementById('btns').style.display = '';
}


  
}









