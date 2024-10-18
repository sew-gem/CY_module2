let answerArray = []

document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content");
    if (content) {
        let text = content.innerHTML;
        const answers = text.match(/\{\{.*?\}\}/g);
        if (answers) {
            answers.forEach((answer, index) => {
                const inputHTML = ` <span>${index + 1}</span> <input type="text"/>`;
                text = text.replace(answer, inputHTML);
                answerArray.push(answer.replace(/\{\{|\}\}/g, "").trim());
            });
        }
        content.innerHTML = text;
    }
    console.log(answerArray)
});

function check() {
    const inputArr = document.querySelectorAll('input')
    const spanArr = document.querySelectorAll('span');

    for (let i = 0; i <answerArray.length; i++) {
        if (inputArr[i].value == answerArray[i]) {
            inputArr[i].style.color = 'green';
            spanArr[i].style.backgroundColor = 'green';
        } else {
            inputArr[i].style.color = 'red';
            spanArr[i].style.backgroundColor = 'red';
        }
        inputArr[i].disabled = true;
    }
}


function reset() {
    const inputArr = document.querySelectorAll('input');
    const spanArr = document.querySelectorAll('span');
        for (let i = 0; i < inputArr.length; i++) {
        inputArr[i].value = '';
        inputArr[i].disabled = false; 
        inputArr[i].style.color = '';
        spanArr[i].style.backgroundColor = '';
    }
}