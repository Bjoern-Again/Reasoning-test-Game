 let str = 'abcdefghijklmnopqrstuvwxyz';
let topArr = [];
let bottomArr = [];
let count; 
let score = 0;





//
// this will create the equal lower and upper case letter
function randomEqual() {
  topArr = [];
  bottomArr = [];
  let randomNumber = Math.floor(Math.random() * 5);
  for(let i = 0; i < randomNumber; i++) {
    topArr.push(str[Math.floor(Math.random() * str.length)]);
  }

  // this solution is not ideal.. I think it can be solved without the for loop 
  // bottomArr = topArr dosen't work as then both are the same and recognized as that
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



//this check if the top and bottom column and row are equall
function compare() {
  count = 0
  for(let i = 0; i < 4; i++) {
    if(topArr[i] === 'B' && bottomArr[i] === 'b') {
      count++;
    } else if(topArr[i] === 'D' && bottomArr[i] === 'd') {
      count++;
    } else if(topArr[i] === 'Q' && bottomArr[i] === 'q') {
      count++;
    } else if(topArr[i] === 'P' && bottomArr[i] === 'p') {
      count++;
    }
  }
}


// swtich statement need improving or removing
// function compare(){
//   for(let i = 0; i < 4; i++) {
//     switch(true) {
//         case (topArr[i] === 'A' && bottomArr[i] === 'a'):
//         case (topArr[i] === 'B' && bottomArr[i] === 'b'):
//         case (topArr[i] === 'C' && bottomArr[i] === 'c'):
//         case (topArr[i] === 'D' && bottomArr[i] === 'd'):
//         case (topArr[i] === 'E' && bottomArr[i] === 'e'):
//         case (topArr[i] === 'F' && bottomArr[i] === 'f'):
//         case (topArr[i] === 'G' && bottomArr[i] === 'g'):
//         case (topArr[i] === 'H' && bottomArr[i] === 'h'):
//         case (topArr[i] === 'I' && bottomArr[i] === 'i'):
//         case (topArr[i] === 'J' && bottomArr[i] === 'j'):
//         case (topArr[i] === 'K' && bottomArr[i] === 'k'):
//         case (topArr[i] === 'L' && bottomArr[i] === 'l'):
//         case (topArr[i] === 'M' && bottomArr[i] === 'm'):
//         case (topArr[i] === 'N' && bottomArr[i] === 'n'):
//         case (topArr[i] === 'O' && bottomArr[i] === 'o'):
//         case (topArr[i] === 'P' && bottomArr[i] === 'p'):
//         case (topArr[i] === 'Q' && bottomArr[i] === 'q'):
//         case (topArr[i] === 'R' && bottomArr[i] === 'r'):
//         case (topArr[i] === 'S' && bottomArr[i] === 's'):
//         case (topArr[i] === 'T' && bottomArr[i] === 't'):
//         case (topArr[i] === 'U' && bottomArr[i] === 'u'):
//         case (topArr[i] === 'V' && bottomArr[i] === 'v'):
//         case (topArr[i] === 'W' && bottomArr[i] === 'w'):
//         case (topArr[i] === 'X' && bottomArr[i] === 'x'):
//         case (topArr[i] === 'Y' && bottomArr[i] === 'y'):
//         case (topArr[i] === 'Z' && bottomArr[i] === 'z'):
//           count++;   
//     }
//   }
// }

// this count the score
// would have liked to put it all into one function with all 
// the btn in one place 
// it's counting regardless - needs work 
// function countScore() {
//     if(count === 1) {
//       score++;
//     } else if (count === 2) {
//       score++;
//     } else if (count === 3) {
//       score++;
//     } else if (count === 4) {
//       score++; 
//     }
// displayTest();
// }

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

  // code below reset the htlm to empty otherwise additional eleemts are added to the of the exsisting ones
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


setTimeout(randomEqual, 3000);




