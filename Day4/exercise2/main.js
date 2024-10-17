const questions = [
    {
        content: "Câu hỏi 1: Đông Lào là nước nào ?",
        answers: [
            "A.Việt Nam",
            "B.Lào",
            "C.Philipine",
            "D.Indonesia"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 2: Tây Lào là nước nào",
        answers: [
            "A.Miến Điện",
            "B.Ấn Độ",
            "C.Nepal",
            "D.Thái Lan"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 3: Nam Lào là nước nào",
        answers: [
            "A.Campuchia",
            "B.Malaysia",
            "C.Singapore",
            "D.Việt Nam"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 4: Bắc Lào là nước nào",
        answers: [
            "A.Trung Quốc",
            "B.Hàn Quốc",
            "C.Nhật Bản",
            "D.Hoa Kỳ"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 5: Lào có bao nhiêu tỉnh thành",
        answers: [
            "A.14",
            "B.15",
            "C.16",
            "D.17"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 6: Đâu là thủ đô của Lào",
        answers: [
            "A.Hà Nội",
            "B.Bangkok",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 7: Lào có biển không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 8: Lào có sân bay quốc tế không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 9: Lào có biên giới với Việt Nam không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 10: Thủ đô của Brueni là gì",
        answers: [
            "A.Bangkok",
            "B.Bandar Seri Begawan",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex]; 
    document.getElementById('question').innerText = currentQuestion.content;
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = ''; //reset question
    currentQuestion.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer';
        div.innerText = answer;
        div.onclick = () => checkAnswer(index);
        answersDiv.appendChild(div);
    });
    document.getElementById('nextButton').style.display = 'none';
    hasAnswered = false;
}

function checkAnswer(selectedIndex) {
    const answerElement = document.getElementById('answer');
    if (hasAnswered) {
        answerElement.style.opacity = 0.5;
        answerElement.style.cursor = 'not-allowed';
        return; 
    }
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score += 10;
        document.getElementById('score').innerText = score;
        alert("Chính xác!"); 
    } else {
        alert("Sai rồi!"); 
    }
    hasAnswered = true;
    document.getElementById('nextButton').style.display = 'block';
}

document.getElementById('nextButton').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.querySelector('.wrapper').innerHTML = `<h2>Hoàn thành! Điểm số của bạn là: ${score}/${questions.length}</h2>`;
    }
};

loadQuestion();