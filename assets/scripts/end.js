//Constants for accessing elements.
const username = document.getElementById("username");
const saveScore = document.getElementById("save-score");
const finalScore  = document.getElementById("final-score");
const mostRecentScore = localStorage.getItem("mostRecentScore");

//Retrieve most recent score from local storage.
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
});

 saveHighScore = e => {
    e.preventDefault ()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b)=> {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('scores.html')
 } 