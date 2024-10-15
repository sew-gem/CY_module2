let arr = [10, 2, 3, 2, 5];


    function decrease(array){
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) { 
                    // Swap using destructuring assignment
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        console.log(arr);
    }

    function increase(array){
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] < array[j + 1]) { 
                    // Swap using destructuring assignment
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        console.log(arr);
    }

    function bubbleSort(arr){
        increase(arr);
        decrease(arr);
    }
    
    bubbleSort(arr);