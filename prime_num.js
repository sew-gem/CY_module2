// prime number = greater than 1 & has 2 positive  divisors ex: 2, 3, 5, 7...
// perfect number = equal the sum of it's proper divisor ex: 6=1+2+3, 28=1+2+4+7+14...

function checkNum(){
    function isPrime(prime){
        if(prime<= 1){
            return false;
        }
        for (let i=2; i<=Math.sqrt(prime); i++){
            if(prime % i === 0) {
                return false;
            }
        }
        return true;
    }

    function isPerfect(perfect){
        let sum = 0;
        if(perfect <= 0){ 
            return false;
        }
        for(let i = 1; i < perfect; i++){
            if(perfect % i === 0){  
                sum += i;
            }
        }
        return sum === perfect;
    }

    // test 
    let num = 6;
    if(isPrime(num)){
        console.log(num + " is a prime number")
    } 
    else{
        console.log(num + " is a perfect number")
    }
}

checkNum();