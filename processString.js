function processString(input) {
    // delete special character
    const cleaned = input
        .replace(/[@#!{}[\]()]+/g, '') 
        .replace(/\s+/g, ' ')    //dấu cách liên tiếp trong chuỗi    
        .trim();                     

    return cleaned;
}


function getWordsArray(string) {
    if (!string) return []; // Nếu chuỗi rỗng, trả về mảng rỗng

    // Tách chuỗi thành mảng
    const words = string.split(' ');

    // Chuyển đổi và sắp xếp ngược lại
    const formattedWords = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).reverse();

    return formattedWords;
}

function averageOfNumbers(string) {
    // Tách chuỗi thành mảng
    const words = string.split(' ');
    let sum = 0;
    let count = 0;

    // Tính tổng và đếm số lượng số
    words.forEach(word => {
        const num = parseFloat(word);
        if (!isNaN(num)) {
            sum += num;
            count++;
        }
    });

    // ternary operator
    return count > 0 ? (sum / count).toFixed(1) : 0; //toFixed(1) -> giới hạn đến một chữ số sau dấu phẩy thập phân
}

const inputString = " Xin 20 c{h}ào 60  #Cy30@!Tech(VN)  100 ";
const resultProcess = processString(inputString);

console.log("Chuỗi đã xử lý:", resultProcess);
console.log("Tách mảng:", getWordsArray(resultProcess));
console.log("Giá trị trung bình:", averageOfNumbers(resultProcess));