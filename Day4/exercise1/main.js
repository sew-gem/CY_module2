    function getResult(operation) {
        const num1 = parseFloat(document.querySelector('.num-1').value);
        const num2 = parseFloat(document.querySelector('.num-2').value);
        let result;

        switch (operation) {
            case 'plus':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multiple':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? (num1 / num2) : 'Không thể chia cho 0';
                break;
            default:
                result = '';
        }

        document.getElementById('result').innerText = result;
    }


    
