//Constant to access high-score-list.
const highScoresList = document.getElementById("high-score-list");

//Retrieve highScores from local storage.
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Setting the html content of highScoresList using retrieved high scores.
highScoresList.innerHTML = 

  //Mapping each high score to an HTML list item.
  highScores.map(score => {

    //Creates a list item with the class high-score and displays the users name and score
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  //Joins the list items into a string to set as the innerHTML of highScoresList.
  .join("");
