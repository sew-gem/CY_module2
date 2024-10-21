const questions = [
    {
        content: 'Sông nào chảy qua Hà Nội',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/MatnuocSongHong-06112008333.JPG',
        correctAnswer: 'Sông Hồng',
        maxShowingCharacter: 2
    },
    {
        content: 'Ai là người phát minh ra bóng đèn sợi đốt',
        image: 'https://st.quantrimang.com/photos/image/2016/10/25/thomsa-edison-4.jpg',
        correctAnswer: 'Edison',
        maxShowingCharacter: 3
    },
    {
        content: 'Người giàu nhất thế giới',
        image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
        correctAnswer: 'Jeff Bezos',
        maxShowingCharacter: 2
    },
    {
        content: 'Thủ đô của Belarus',
        image: '',
        correctAnswer: 'Minsk',
        maxShowingCharacter: 3
    }
];

let currentIndex = 0;
let notification = document.querySelector('.notification');
const answerNode = document.getElementById('answer');
const img = document.getElementById('img');
let image = document.createElement('img');
let countClick = 0;

function loadQuestion() {
    answerNode.innerHTML = '';
    countClick = questions[currentIndex].maxShowingCharacter;
    document.getElementById('question').innerText = questions[currentIndex].content;

    // Clear previous image
    img.innerHTML = '';
    image.src = questions[currentIndex].image;
    img.appendChild(image);

    const correctAnswer = questions[currentIndex].correctAnswer.split('');

    correctAnswer.forEach((char) => {
        const box = document.createElement('div');
        answerNode.appendChild(box);
        const value = char;

        box.setAttribute('keyword', value);
        box.addEventListener('click', function () {
            if (countClick > 0) {
                box.innerText = box.getAttribute('keyword');
                countClick--;
                box.style.pointerEvents = 'none';
                box.style.background = 'orange';
                box.style.textAlign = 'center';
                box.style.alignContent = 'center';
                box.style.fontSize = '30px';

                if (countClick === 0) {
                    // Disable further clicks
                    answerNode.querySelectorAll('div').forEach(item => {
                        item.style.pointerEvents = 'none';
                    });
                }
                notification.innerText = `Bạn còn ${countClick} lần lật`;
                notification.style.display = 'block';
            }
        });
    });
}

function startCountdown() {
    let countdownTime = 3;
    const countdownInterval = setInterval(() => {
        countdownTime--;
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            currentIndex++;
            if (currentIndex < questions.length) {
                loadQuestion(); // Load next question if available
                notification.innerText = ''; // Clear notification
            } else {
                notification.innerText = 'Bạn đã hoàn thành tất cả các câu hỏi!';
                document.getElementById('nextButton').disabled = true; // Disable next button
            }
        } else {
            notification.innerText = `Bạn sẽ được chuyển đến câu tiếp theo trong ${countdownTime} giây`;
        }
    }, 1000);
}

function submitAnswer() {
    const userInput = document.getElementById('userInput').value.trim();
    const correctAnswer = questions[currentIndex].correctAnswer.trim();

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        alert('Đúng rồi!');
        startCountdown();  
    } else {
        alert('Sai rồi!');  
    }

    // Show the correct answer
    const boxes = answerNode.querySelectorAll('div');
    boxes.forEach((box, index) => {
        box.innerText = correctAnswer[index]; 
        box.style.pointerEvents = 'none';
        box.style.background = 'orange';
        box.style.textAlign = 'center';
        box.style.alignContent = 'center';
        box.style.fontSize = '30px'; 
    });
}

// Load the first question
loadQuestion();

// Add event listener for the Next button
document.getElementById('nextButton').addEventListener('click', submitAnswer);