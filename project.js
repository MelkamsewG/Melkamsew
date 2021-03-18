function findPorcupineNumber(num) {
    if (num <= 138) {
        return 139;
    }
    let porcupine;
    let first = Math.floor(num / 10) * 10 + 19;
    let second = first + 10;
    let nextPrime = findNextPrime(first, second);
    while (!(isPrime(first) && nextPrime % 10 === 9)) {
        first = first + 10;
        second = first + 10;
        nextPrime = findNextPrime(first, second);
    }
    porcupine = first;
    return porcupine;
}
console.log(findPorcupineNumber(140))