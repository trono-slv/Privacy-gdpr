// GDPR Quiz Application - Single Page App
// Author: Dott. Salvatore Trono

// ===== STATE MANAGEMENT =====
const APP_STATE = {
    currentView: 'view-home',
    quizState: {
        questions: [],
        currentQuestionIndex: 0,
        userAnswers: [],
        startTime: null,
        timer: null,
        timeLeft: 20 * 60, // 20 minutes in seconds
        progress: []
    }
};

// ===== DOM ELEMENTS =====
const DOM = {
    views: {
        home: document.getElementById('view-home'),
        teoria: document.getElementById('view-teoria'),
        quiz: document.getElementById('view-quiz')
    },
    teoriaContainer: document.querySelector('.theory-container'),
    quizContainer: document.querySelector('.quiz-container'),
    popup: document.getElementById('popup-disclaimer'),
    btnHome: document.querySelectorAll('.btn-home'),
    btnStart: null,
    btnCancel: document.getElementById('btn-cancel'),
    btnAccept: document.getElementById('btn-accept')
};

// ===== THEORY CONTENT =====
const THEORY_BLOCKS = [
    // ... (same theory content as before)
];

// ===== QUIZ QUESTIONS =====
const QUESTIONS = [
    // ... (same questions as before)
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTheorySection();
    initPopup();
    initQuizSection();
});

// ===== NAVIGATION FUNCTIONS =====
function initNavigation() {
    // ... (same navigation code as before)
}

function showView(viewId) {
    // ... (same showView code as before)
}

// ===== THEORY SECTION =====
function initTheorySection() {
    // ... (same theory section code as before)
}

function renderTheoryContent() {
    // ... (same renderTheoryContent code as before)
}

// ===== POPUP FUNCTIONS =====
function showDisclaimer() {
    DOM.popup.classList.remove('hidden');
}

function initPopup() {
    // ... (same popup initialization code as before)
}

// ===== QUIZ FUNCTIONS =====

function updateTimer() {
   // Update timer display
   const timeLeft = APP_STATE.quizState.timeLeft;
   const minutes = Math.floor(timeLeft / 60);
   const seconds = timeLeft % 60;
   document.getElementById('timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

   // Decrement time
   APP_STATE.quizState.timeLeft--;

   // Check if time is up
   if (timeLeft <= 0) {
       clearInterval(APP_STATE.quizState.timer);
       showQuizResults();
   }
}
function initQuizSection() {
    // Will be initialized when quiz view is shown
}

function renderQuizWelcome() {
    // ... (same quiz welcome code as before)
}

function startQuiz() {
    // Initialize quiz state
    APP_STATE.quizState = {
        questions: getRandomQuestions(10),
        currentQuestionIndex: 0,
        userAnswers: [],
        startTime: Date.now(),
        timer: setInterval(updateTimer, 1000),
        timeLeft: 20 * 60,
        progress: []
    };

    renderQuestion();
}

function getRandomQuestions(count) {
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderQuestion() {
    const { questions, currentQuestionIndex } = APP_STATE.quizState;
    const question = questions[currentQuestionIndex];

    if(!question) {
        // Handle end of quiz
        clearInterval(APP_STATE.quizState.timer);
        showQuizResults();
        return;
    }

    // Render question UI
    DOM.quizContainer.innerHTML = `...
        <div id="timer">${Math.floor(APP_STATE.quizState.timeLeft/60)}:00</div>
    `;

    // ... (rest of renderQuestion implementation)
}


// ===== RESULTS HANDLING =====
function showQuizResults() {
    // Calculate score and display results
    const correctAnswers = APP_STATE.quizState.userAnswers.filter(answer => answer.correct).length;
    const score = (correctAnswers / APP_STATE.quizState.questions.length) * 100;

    DOM.quizContainer.innerHTML = `...
        <h2>Risultati</h2>
        <p>Hai risposto correttamente a ${correctAnswers} su ${APP_STATE.quizState.questions.length} domande</p>
        <p>Punteggio: ${score.toFixed(1)}%</p>
    `;
}
