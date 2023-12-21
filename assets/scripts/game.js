// Constants for accessing elements.
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score");

// Variables for game.
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Array to hold questions and asnwers.
let questions = [
    {
        question: "What year did Marty and Doc travel to in Back to the Future?",
        choice1: "1955",
        choice2: "1985",
        choice3: "1965",
        choice4: "1975",
        answer: 2,
    },
    {
        question: "Who voiced Mufasa in the Lion King?",
        choice1: "Bill Murray",
        choice2: "Morgan Freeman",
        choice3: "Marlon Brando",
        choice4: "James Earl Jones",
        answer: 4,
    },
    {
        question: "What is Indiana Jones\'s profession?",
        choice1: "Archaeologist",
        choice2: "Historian",
        choice3: "Anthropologist",
        choice4: "Geologist",
        answer: 1,
    },
    {
        question: "What movie did Jackie Chan and Jet Li star in?",
        choice1: "Rush Hour",
        choice2: "Shanghai Noon",
        choice3: "The Forbidden Kingdom",
        choice4: "Enter the Dragon",
        answer: 3,
    },
    {
        question: "What was the first movie to gross a billion dollars?",
        choice1: "Titanic",
        choice2: "The Lord of the Rings: The Return of the King",
        choice3: "Avatar",
        choice4: "Jurassic Park",
        answer: 3,
    },
    {
        question: "In the Matrix, what colour pill does Neo take?",
        choice1: "Red",
        choice2: "Green",
        choice3: "Blue",
        choice4: "Yellow",
        answer: 1,
    },
    {
        question: "What's the name of the skyscraper in Die Hard?",
        choice1: "Century Plaza Tower",
        choice2: "Pacific Design Center",
        choice3: "Nakatomi Plaza",
        choice4: "Trump Tower",
        answer: 3,
    },
    {
        question: "What is the nickname of the main character in The Big Lebowski?",
        choice1: "The Dude",
        choice2: "The Boss",
        choice3: "The Big Bowski",
        choice4: "The Man",
        answer: 1,
    },
    {
        question: "Which actress played the lead role in the Disney film Maleficent?",
        choice1: "Charlize Theron",
        choice2: "Jennifer Lawrence",
        choice3: "Angelina Jolie",
        choice4: "Scarlett Johansson",
        answer: 3,
    },
    {
        question: "Who directed the 2014 science fiction film Interstellar?",
        choice1: "Christopher Nolan",
        choice2: "Denis Villeneuve",
        choice3: "James Cameron",
        choice4: "Ridley Scott",
        answer: 1,
    },
    {
        question: "Which Tarantino film stars The Deadly Viper Assassination Squad?",
        choice1: "Pulp Fiction",
        choice2: "Resevoir Dogs",
        choice3: "Kill Bill",
        choice4: "Django Unchained",
        answer: 3,
    },
    {
        question: "What brand of running shoes does Forrest Gump endorse?",
        choice1: "Adidas",
        choice2: "New Balance",
        choice3: "Reebok",
        choice4: "Nike",
        answer: 4,
    },
    {
        question: "Who played winston \'the wolf\' in pulp fiction?",
        choice1: "Tim Roth",
        choice2: "Harvey Keitel",
        choice3: "Bruce Willis",
        choice4: "Ving Rhames",
        answer: 2,
    },
    {
        question: "Who wrote the screenplay for Rocky?",
        choice1: "Quentin Tarantino",
        choice2: "Sylvester Stallone",
        choice3: "Martin Scorsese",
        choice4: "Arnold Schwarzenegger",
        answer: 2,
    },
    {
        question: "Who created characters such as Borat, Ali G and General Aladeen?",
        choice1: "Sacha Baron Cohen",
        choice2: "Ricky Gervais",
        choice3: "Will Ferrell",
        choice4: "Jim Carrey",
        answer: 1,
    },
    {
        question: "Who played park owner John Hammond in Jurassic Park?",
        choice1: "David Attenborough",
        choice2: "John Attenborough",
        choice3: "Charles Attenborough",
        choice4: "Richard Attenborough",
        answer: 4,
    },
    {
        question: "What Hollywood movie star plays himself in Zombieland?",
        choice1: "Jim Carey",
        choice2: "Robin Williams",
        choice3: "Bill Murray",
        choice4: "Adam Sandler",
        answer: 3,
    },
    {
        question: "What is the name of the talking snowman in Disney\'s Frozen?",
        choice1: "Odin",
        choice2: "Olaf",
        choice3: "Oliver",
        choice4: "Oscar",
        answer: 2,
    },
    {
        question: "In the film The Wizard of Oz, what color is the brick road?",
        choice1: "Orange",
        choice2: "Red",
        choice3: "Purple",
        choice4: "Yellow",
        answer: 4,
    },
    {
        question: "What movie rescued Marvel Studios?",
        choice1: "X-Men",
        choice2: "Spider-man",
        choice3: "Blade",
        choice4: "Avengers",
        answer: 3,
    },
    {
        question: "What cup is in every Fight Club scene?",
        choice1: "Krispy Kreme",
        choice2: "Starbucks",
        choice3: "Tim Horton",
        choice4: "McDonald\'s",
        answer: 2,
    },
    {
        question: "Who voiced Mushu in Mulan?",
        choice1: "Eddie Murphy",
        choice2: "Dave Chappelle",
        choice3: "Jamie Foxx",
        choice4: "Chris Tucker",
        answer: 1,
    },
    {
        question: "What city is overrun with ghosts in Ghostbusters?",
        choice1: "San Diago",
        choice2: "Chicago",
        choice3: "Seattle",
        choice4: "New York",
        answer: 4,
    },
    {
        question: "Who starred as Arnold Schwarzenegger\'s twin in Twins?",
        choice1: "John Travolta",
        choice2: "Danny DeVito",
        choice3: "Michael Keaton",
        choice4: "Harrison Ford",
        answer: 2,
    },
    {
        question: "Who directed Lock, Stock and Two Smoking Barrels?",
        choice1: "Danny Boyle",
        choice2: "Steve McQueen",
        choice3: "Guy Ritchie",
        choice4: "Christopher Nolan",
        answer: 3,
    },
    {
        question: "Who played Mary Poppins in Disney\'s 1964 film of the same name?",
        choice1: "Audrey Hepburn",
        choice2: "Julie Andrews",
        choice3: "Meryl Streep",
        choice4: "Emma Thompson",
        answer: 2,
    },
    {
        question: "In which film is there a computer named V.I.K.I.?",
        choice1: "I, Robot",
        choice2: "Blade Runner",
        choice3: "Ex Machina",
        choice4: "Terminator",
        answer: 1,
    },
    {
        question: "What is the Incredible\'s youngest son called?",
        choice1: "Mad-Max",
        choice2: "Bam-Bam",
        choice3: "Jack Black",
        choice4: "Jack-Jack",
        answer: 4,
    },
    {
        question: "Who plays Fred Flintstone in the Flintstone\'s movie?",
        choice1: "John Candy",
        choice2: "Wayne Knight",
        choice3: "John Goodman",
        choice4: "Jack Black",
        answer: 3,
    },
    {
        question: "What movie genre is Frank Miller\'s Sin City? ",
        choice1: "Comic",
        choice2: "Neo-noir",
        choice3: "Crime",
        choice4: "Narrative",
        answer: 2,
    }
];

//Constants for maximum number of points per correct answer and maximum number of questions per game.
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;

//Function to start game.
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = questionList(questions, MAX_QUESTIONS);
    getNewQuestion();
};

//Function to get a new question
getNewQuestion = () => {
    //Checks if all questions have been answered
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }

    //Increments question counter and updates progress text.
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    //Selects a random question from the array of available questions.
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    //Populates choices with answer options.
    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    //Removes each used question from the array of available questions.
    availableQuestions.splice(questionsIndex, 1);

    //Allows user ti select an answer.
    acceptingAnswers = true;
};

//Function to shuffle and get subset of questions.
questionList = (allQuestions, subsetSize) => {
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, subsetSize);
};

// Event listener for user choices
choices.forEach(choice => {
    choice.addEventListener('click', e => {
         // Prevent answering if not in the accepting state.
        if(!acceptingAnswers) return;

        // Update game state based on user choice.
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // Increment score if the answer is correct.
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        // Apply styling to the selected choice.
        selectedChoice.parentElement.classList.add(classToApply);

        // Move to the next question after a delay.
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });
});

// Function to increment the score./
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

//Start the game.
startGame();