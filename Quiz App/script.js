const quizdata = [
    {
        question: "How old is Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "a"
    },
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Who is the president of US?",
        a: "Florin Pop",
        b: "Donald trump",
        c: "Ivan Saldano",
        d: "Mihal Andrei",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicoters Terminal Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "What year is JavaScript launched?",
        a: "1996",
        b: "1997",
        c: "1998",
        d: "none of the above",
        correct: "d"
    }
];

// DOM elements
const quiz = document.querySelector('.quiz-container');
const questionEl = document.querySelector('h2');
const answerEls = document.querySelectorAll('input[name="answer"]');
const labels = document.querySelectorAll('label');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// Load quiz question
function loadQuiz() {
    deselectAnswers();
    const currentData = quizdata[currentQuiz];

    questionEl.textContent = currentData.question;
    labels[0].textContent = currentData.a;
    labels[1].textContent = currentData.b;
    labels[2].textContent = currentData.c;
    labels[3].textContent = currentData.d;
}

// Deselect all radio inputs
function deselectAnswers() {
    answerEls.forEach(el => el.checked = false);
}

// Get selected answer
function getSelected() {
    let selected = undefined;
    answerEls.forEach(el => {
        if (el.checked) {
            selected = el.id;
        }
    });
    return selected;
}

// Submit answer and go to next
submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizdata[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizdata.length) {
            loadQuiz();
        } else {
            if (score === quizdata.length) {
                quiz.innerHTML = `
                    <h2>🎉 Perfect score! You got all ${score} out of ${quizdata.length} questions right!</h2>
                    <button onclick="location.reload()">Play Again</button>
                `;
            } else {
                quiz.innerHTML = `
                    <h2>You answered ${score} out of ${quizdata.length} questions correctly.</h2>
                    <button onclick="location.reload()">Try Again</button>
                `;
            }
        }
    } else {
        alert("Please select an answer!");
    }
});


// Initial load
loadQuiz();
