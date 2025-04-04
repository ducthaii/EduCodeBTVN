function checkPrimeNumber (number) {
    for(let i = 2; i<number; i++) {
        if (number % i === 0){
            return false
        }
        return true
        
    }
}

console.log(checkPrimeNumber(5));
console.log(checkPrimeNumber(2));
console.log(checkPrimeNumber(11));

/**
 * Hàm kh có return thì trả về undefined
 */



