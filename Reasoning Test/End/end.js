const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const lastScore = localStorage.getItem('lastScore')
finalScore.innerText = lastScore + '/70';


const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

const Max_High_Scores = 5;

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault(); 

  const score = {
    score: lastScore,
    name: username.value
  };
  highScore.push(score);

  highScore.sort( (a, b) => b.score - a.score);
  highScore.splice(5);

  localStorage.setItem('highScore', JSON.stringify(highScore));
  location.href = "/Front /front.html"
}