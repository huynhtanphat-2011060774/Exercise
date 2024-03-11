function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sortPrimeNumbers(limit) {
    const primeNumbers = [];

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers.sort((a, b) => a - b);
}

const givenInteger = 20;
const sortedPrimeNumbers = sortPrimeNumbers(givenInteger);

console.log(`Sorted prime numbers between 1 and ${givenInteger}: ${sortedPrimeNumbers}`);
