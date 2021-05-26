       let str = 'bdpq';
        let arr1 = [];
        let arr2 = [];
        let count; 
        let score = 0;



        // this function creates the top and bottom row of random alphabatice numbers
        function convert() {
          // if I want more letter the need another solution as with two strings the out come could have different arrays
          // to much variation 
          arr1 = [];
          arr2 = [];
          let charaUpper = str.toUpperCase();
          for(let i = 0; i < 4; i++) {
            arr1.push(charaUpper[Math.floor(Math.random() * (0 - charaUpper.length) + charaUpper.length)]);
            arr2.push(str[Math.floor(Math.random() * (0 - str.length) + str.length)]);
          }
          displayTest();
          compare();
        }

        // this check if the top and bottom column and row are equall
        function compare() {
          count = 0
          for(let i = 0; i < 4; i++) {
            if(arr1[i] === 'B' && arr2[i] === 'b') {
              count++;
            } else if(arr1[i] === 'D' && arr2[i] === 'd') {
              count++;
            } else if(arr1[i] === 'Q' && arr2[i] === 'q') {
              count++;
            } else if(arr1[i] === 'P' && arr2[i] === 'p') {
              count++;
            }
          }
        }

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
            testTh.innerHTML = arr1[i];
            testTr1.appendChild(testTh);

            let testTh2 = document.createElement('Th');
            testTh2.innerHTML = arr2[i];
            testTr2.appendChild(testTh2); 
          }
          // displays score under buttons
          let scoreTh = document.createElement('Th');         
          scoreTh.innerHTML = score;
          scoreCount.appendChild(scoreTh);
        }

        let btnZero = document.getElementById('btn-zero');
        btnZero.addEventListener('click', btnZeroScore);       
        btnZero.addEventListener('click', convert);

        let btnOne = document.getElementById('btn-one');
        btnOne.addEventListener('click', btnOneScore);       
        btnOne.addEventListener('click', convert);

        let btnTwo = document.getElementById('btn-two');
        btnTwo.addEventListener('click', btnTwoScore);   
        btnTwo.addEventListener('click', convert);

        let btnThree = document.getElementById('btn-three');
        btnThree.addEventListener('click', btnThreeScore);   
        btnThree.addEventListener('click', convert);

        let btnFour = document.getElementById('btn-four');
        btnFour.addEventListener('click', btnFourScore);   
        btnFour.addEventListener('click', convert);

        // with setTimeout the function starts in 3 secs
        setTimeout(convert, 3000);


        // needs start button that appears before test and a timer starts 
        // click event on button will restart process and finsh when time 
        // is over


       // Ideas of random shuffle

       // this will create the equal lower and upper case letter
       function randomEqual(str) {
         for(let i = 0; i < 2; i++) {
           topArr.push(str[Math.floor(Math.random() * str.length)]);
         }
         bottomArr = topArr.map(function (letter){
           return letter.toUpperCase();
         })
       } 
       undefined
       // this will create the nonequal lower and upper case letter
       function randomNotEqual(str) {
         for(let i = 0; i < 2; i++) {
           topArr.push(str[Math.floor(Math.random() * str.length)]);
           bottomArr.push(str[Math.floor(Math.random() * str.length)]);
         }

         bottomArr = bottomArr.map(function (letter){
           return letter.toUpperCase();
         })
       } 
