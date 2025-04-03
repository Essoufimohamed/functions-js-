// function that reverses a given string
function reverseString(word) {
    let lastOne = word.length - 1;
    let reverse = "";

    for (const i in word) {
        reverse += word[lastOne];
        lastOne--;
    }

    return reverse;
}
console.log(reverseString("hello world"));

// function that counts the number of characters in a string.
function charCount(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != " ") {
            count++;
        }
    }
    return count;
}

console.log(charCount("hello Dear           "));

// function that capitalizes the first letter of each word in a sentence.
function capitalizesLetter(sentences) {
    let lowerCase = sentences.toLowerCase().split(" ");
    console.log(lowerCase);

    let senArr = "";
    for (const i in lowerCase) {
        let first = lowerCase[i].charAt(0).toUpperCase();
        senArr += first + lowerCase[i].substring(1) + " ";
        console.log(first + lowerCase[i].substring(1));
        console.log(senArr);
    }

    return senArr.trim();

    // return lowerCase;
}

console.log(capitalizesLetter("heLOo hi mido"));

// find the maximum and minimum values in an array of numbers
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return [min, max];
}
console.log(minMax([3, 1, 99, -4, 0, 100]));

// function that calculates the sum of all elements in an array.
function sumOfArray(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
console.log(sumOfArray([3, 1, 99, -4, 0, 100]));

// function that filters out elements from an array
function filterArray(arr, condition) {
    let array = [];
    for (const i in arr) {
        if (condition == arr[i]) {
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(filterArray([3, 4, "ee", "e", 6, 12, "e", 9], "e"));

// function to calculate the factorial of a given number.
function factorial(num) {
    let factorial = num;
    while (num > 1) {
        num--;
        factorial = factorial * num;
    }
    console.log(factorial);
}
factorial(10);

// function to check if a number is prime or not.
function numberPrime(num) {
    if (num % 2 != 0 || num >= 2) {
        return true;
    } else {
        return false;
    }
}
console.log(numberPrime(97));

// function to generate the Fibonacci sequence up to a given number of terms
function fibonacciSequence(num) {
    if (num < 2) {
        return num;
    }

    return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
}
console.log(fibonacciSequence(6));
