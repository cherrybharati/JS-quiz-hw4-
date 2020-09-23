
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.getElementById("time-remaining")
const endButton = document.getElementById('end-btn')
const finalScore = document.getElementById('final-score')

const questions = [
    {
        question: 'Which of the following is an element that represents True or False values?',
        answers: ['string', 'integer', 'boolean'],
        correct: 'boolean'
    },
    {
        question: 'Which of the following tags do we use in HTML to insert JavaScript?',
        answers: ['<script>', '<js>', '<java>'],
        correct: '<script>'
    },
    {
        question: 'What are name:value pairs called in JavaScript?',
        answers: ['variables', 'properties', 'functions'],
        correct: 'properties'
    },
    {
        question: 'Which of the following is NOT a keyword that defines a variable?',
        answers: ['value', 'let', 'var'],
        correct: 'value'
    },
    {
        question: 'Which of the following is NOT an example of an HTML event?',
        answers: ['click', 'mouseover', 'the Super Bowl'],
        correct: 'the Super Bowl'
    },
    {
        question: 'Is JavaScript case sensitive?',
        answers: ['no', 'yes', 'maybe'],
        correct: 'yes'
    },
];

let qIndex = 0;
let timerCount = 100;
let timerID;
let score = 0;

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)


function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')

    showQuestion()
    showTimer()
}

function showQuestion() {
    const q = questions[qIndex]
    questionElement.innerText = q.question

    // for(var i = 0; i < q.answers.length; i++){
    //     console.log(q.answers[i])
    // }

    // for(var i in q.answers){
    //     console.log(q.answers[i])
    // }

    answerButtonsElement.innerHTML = ''
    for (var answer of q.answers) {
        var button = document.createElement('button')
        button.classList.add('btn')
        button.textContent = answer;
        button.addEventListener('click', selectAnswer)

        answerButtonsElement.appendChild(button)
    }
}

function selectAnswer() {
    var selected = this.textContent
    var correct = questions[qIndex].correct

    console.log(selected === correct)

    if (selected === correct) {
        score +=1;
        alert("correct")
    }

    else {
        timerCount -= 10;
        alert("incorrect")
    }

    qIndex++;
    if (qIndex < questions.length) {
        showQuestion()
    }
    else {
        questionContainerElement.classList.add('hide')
        endButton.classList.remove('hide')
    }
}

function showTimer() {
    timerElement.innerHTML = timerCount;

    timerID = setInterval(function () {
        timerCount--;
        timerElement.innerHTML = timerCount;

        if (timerCount <= 0) {
            clearInterval(timerID);
            alert("game over");
        }
    }, 1 * 1000)
}

function endGame( ) {
    finalScore.classList.remove('hide')

    showScore()

}

function showScore( ) {
    endButton.classList.add('hide')
    finalScore.append('Your Final Score is ' + score)
}
