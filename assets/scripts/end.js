//Constants for accessing elements.
const username = document.getElementById("username");
const saveScore = document.getElementById("save-score");
const finalScore  = document.getElementById("final-score");

//Retrieve most recent score from local storage.
const mostRecentScore = localStorage.getItem("mostRecentScore");

//Retrieve high scores from local storage or create an empty array.
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// Constant for the maximum number of high scores to be stored.
const MAX_HIGH_SCORES = 5

//Displays most recent scores on the page.
finalScore.innerText = mostRecentScore

//Event listener for username input.
username.addEventListener('keyup', () => {

    //Disables save score button if username field is empty.
    saveScore.disabled = !username.value
});

//Function to save high score.
 saveHighScore = e => {

    //Prevents default form submission behavior.
    e.preventDefault ()

    //Creates an object with the current score and username.
    const score = {
        score: mostRecentScore,
        name: username.value
    }

    //Adds new score object to to highScores array.
    highScores.push(score)

    //Sorts highScores array in a descending order based on score.
    highScores.sort((a,b)=> {
        return b.score - a.score
    })

    //Truncating the array to keep only the top MAX_HIGH_SCORES.
    highScores.splice(5)

    //Saves the updated highScores array to local storage.
    localStorage.setItem('highScores', JSON.stringify(highScores))

    //Redirects user to scores.html page.
    window.location.assign('scores.html')
 } 