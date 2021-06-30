// not sure if should wrap this into function needs further research 
let str = 'abcdefghijklmnopqrstuvwxyz';
let topArr = [];
let bottomArr = [];
let count; 
let timeUnit = 0;
let score = 0;
let startBtn = true;



// timer: calculates time, displays time in 00 and stop time when 3 minutes is reached 
function displayTime() {
  // Calculate current hours, minutes, and sceonds
  let hours = Math.floor(timeUnit/3600);
  let min = Math.floor((timeUnit % 3600)/60);
  let sec = Math.floor(timeUnit % 60);

  // display extra zero in the display
  let displayHour = (hours < 10) ? '0' + hours : hours;
  let displayMin = (min < 10) ? '0' + min : min;
  let displaySec = (sec < 10) ? '0' + sec : sec;



  document.querySelector('.clock').textContent = displayHour + ':' + displayMin + ':' + displaySec;       

  timeUnit++;

  if(displayMin === '03') {
    stop();
  }
}

function stop() {
  clearInterval(stopWatch);
  startBtn = true;
}

// this will create the equal lower and upper case letter
function randomEqual() {
  topArr = [];
  bottomArr = [];

  let randomNumber = Math.floor(Math.random() * 5);

  for(let i = 0; i < randomNumber; i++) {
    topArr.push(str[Math.floor(Math.random() * str.length)]);
  }

  // this solution is not ideal.. I think it can be solved without the for loop 
  // bottomArr = topArr dosen't work as they are recognized as the same one changes 
  // the other changes
  for(let j = 0; j < topArr.length; j++) {
    bottomArr.push(topArr[j]);
  }

  randomNotEqual();
} 


// this will create the nonequal lower and upper case letter
function randomNotEqual() {

  // checks how long arr is and how many more character need to be added
  if(topArr.length === 4) {
    arrLength = 0;
  } else if(topArr.length === 3) {
    arrLength = 1;
  } else if(topArr.length === 2) {
    arrLength = 2;
  } else if(topArr.length === 1) {
    arrLength = 3;
  } else {
    arrLength = 4;
  }

  // chooses random number for each arr
  for(let i = 0; i < arrLength; i++) {
    topArr.push(str[Math.floor(Math.random() * str.length)]);
    bottomArr.push(str[Math.floor(Math.random() * str.length)]);
  }

  // changes bottomArray characters to upperCase
  bottomArr = bottomArr.map(function (letter){
    return letter.toUpperCase();
  })

shuffleIndex()

} 

//Durstenfeld shuffle index 
function shuffleIndex() {
  let numArr = [0, 1, 2, 3];
  for (var i = numArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = numArr[i];
      numArr[i] = numArr[j];
      numArr[j] = temp;
  }
topArr = [topArr[0], topArr[1], topArr[2], topArr[3]] = [topArr[numArr[0]], topArr[numArr[1]], topArr[numArr[2]], topArr[numArr[3]]]
bottomArr = [bottomArr[0], bottomArr[1], bottomArr[2], bottomArr[3]] = [bottomArr[numArr[0]], bottomArr[numArr[1]], bottomArr[numArr[2]], bottomArr[numArr[3]]]

displayTest();
compare(); 
}


// swtich statement need improving or removing not gone work here 
// or still need to work it out.. but not happy with the length 
function compare(){
  count = 0; 
  for(let i = 0; i < 4; i++) {
    if(topArr[i] === 'a' && bottomArr[i] === 'A') {
      count++;
    } else if (topArr[i] === 'b' && bottomArr[i] === 'B') {
      count++;
    } else if (topArr[i] === 'c' && bottomArr[i] === 'C') {
      count++;
    } else if (topArr[i] === 'd' && bottomArr[i] === 'D') {
      count++;
    } else if (topArr[i] === 'e' && bottomArr[i] === 'E') {
      count++;
    } else if (topArr[i] === 'f' && bottomArr[i] === 'F') {
      count++;
    } else if (topArr[i] === 'g' && bottomArr[i] === 'G') {
      count++;
    } else if (topArr[i] === 'h' && bottomArr[i] === 'H') {
      count++;
    } else if (topArr[i] === 'i' && bottomArr[i] === 'I') {
      count++;
    } else if (topArr[i] === 'j' && bottomArr[i] === 'J') {
      count++;
    } else if (topArr[i] === 'k' && bottomArr[i] === 'K') {
      count++;
    } else if (topArr[i] === 'l' && bottomArr[i] === 'L') {
      count++;
    } else if (topArr[i] === 'm' && bottomArr[i] === 'M') {
      count++;
    } else if (topArr[i] === 'n' && bottomArr[i] === 'N') {
      count++;
    } else if (topArr[i] === 'o' && bottomArr[i] === 'O') {
      count++;
    } else if (topArr[i] === 'p' && bottomArr[i] === 'P') {
      count++;
    } else if (topArr[i] === 'q' && bottomArr[i] === 'Q') {
      count++;
    } else if (topArr[i] === 'r' && bottomArr[i] === 'R') {
      count++;
    } else if (topArr[i] === 's' && bottomArr[i] === 'S') {
      count++;
    } else if (topArr[i] === 't' && bottomArr[i] === 'T') {
      count++;
    } else if (topArr[i] === 'u' && bottomArr[i] === 'U') {
      count++;
    } else if (topArr[i] === 'v' && bottomArr[i] === 'V') {
      count++;
    } else if (topArr[i] === 'w' && bottomArr[i] === 'W') {
      count++;
    } else if (topArr[i] === 'x' && bottomArr[i] === 'X') {
      count++;
    } else if (topArr[i] === 'y' && bottomArr[i] === 'Y') {
      count++;
    } else if (topArr[i] === 'z' && bottomArr[i] === 'Z') {
      count++;
    }
  }
}


// functionallity of button/scoring

function btnZeroScore() {
  if(count === 0) {
    score++;
  }
}

function btnOneScore() {
  if (count === 1) {
    score++;              
  }
}

function btnTwoScore() {
  if(count === 2) {
    score++;
  }
}

function btnThreeScore() {
  if(count === 3) {
    score++;
  }
}

function btnFourScore() {
  if(count === 4) {
    score++;
  }
}




// this function creates row elements for the above table 
function displayTest() {
  let testTr1 = document.getElementById('upperRow-tr');
  let testTr2 = document.getElementById('lowerRow-tr');
  let scoreCount = document.getElementById('score-count');

  // code below reset the htlm to empty otherwise additional eleemts are added to the of 
  // the exsisting ones
  scoreCount.innerHTML = '';
  testTr1.innerHTML = '';
  testTr2.innerHTML = '';


  for(let i = 0; i < 4; i++) {
    let testTh = document.createElement('Th');
    testTh.innerHTML = topArr[i];
    testTr1.appendChild(testTh);

    let testTh2 = document.createElement('Th');
    testTh2.innerHTML = bottomArr[i];
    testTr2.appendChild(testTh2); 
  }
  // displays score under buttons
  let scoreTh = document.createElement('Th');         
  scoreTh.innerHTML = score;
  scoreCount.appendChild(scoreTh);
}


// this function is activted whe start button is pressed
// a few things happen here:
// 1. the time is set
// 2. the letters are shuffelled 
// 3. btn is turned false
// 4. the button is hidden when pressed
// 5. the count button are shown 
function startTime() {
  if(startBtn) {
    stopWatch = setInterval(displayTime, 1000);          
  }
  randomEqual();
  startBtn = false; 
  if(startBtn === false) {
    document.getElementById('start-btn').style.display = "none";
  } 
  document.getElementById('count-btns').style.display = '';
}



let btnZero = document.getElementById('btn-zero');
btnZero.addEventListener('click', btnZeroScore);
btnZero.addEventListener('click', randomEqual);


let btnOne = document.getElementById('btn-one');
btnOne.addEventListener('click', btnOneScore);       
btnOne.addEventListener('click', randomEqual);

let btnTwo = document.getElementById('btn-two');
btnTwo.addEventListener('click', btnTwoScore);   
btnTwo.addEventListener('click', randomEqual);

let btnThree = document.getElementById('btn-three');
btnThree.addEventListener('click', btnThreeScore);   
btnThree.addEventListener('click', randomEqual);

let btnFour = document.getElementById('btn-four');
btnFour.addEventListener('click', btnFourScore);   
btnFour.addEventListener('click', randomEqual);


document.getElementById('start-btn').addEventListener('click', startTime);
document.getElementById('count-btns').style.display = 'none';






