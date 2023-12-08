// Constants for accessing elements
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// Varirbales to hold questions and asnwers.
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
]