// CHallenge 1
let fox = "Jumped Over The Lazy Dog";

function jumpOverFence(fox) {
    return `${fox} Over the Fence`;
};

console.log(jumpOverFence(fox)); 

//Challenge 2
function isEvenOrOdd(num) {
    return num % 2 === 0
};

console.log(isEvenOrOdd(10)); 
console.log(isEvenOrOdd(5)); 

//Challenge 3
function celsiusToFahrenheit(celsiusNumber) {
    const C = celsiusNumber
    return (C * 9/5) + 32
};

console.log(celsiusToFahrenheit(30)); 
console.log(celsiusToFahrenheit(0));  

// Challenge 4
function findMaxNumber(arr) {
    return Math.max(...arr)
};

console.log(findMaxNumber([1, 2, 3, 4, 5]));

// Challenge 5
function sayHelloWorld() {
    setTimeout(() => console.log("Hello World"), 2000)
};

sayHelloWorld(); 
