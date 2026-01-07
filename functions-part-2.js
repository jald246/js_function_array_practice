// increased_challenges.js

// Challenge 1
function squareNumber(num) {
  return Math.pow(num,  2)
}

console.log(squareNumber(4));

// Challenge 2
function repeatString(str) {
  let result = "";
  for (let i = 0; i < 3; i++) {
   result += str;
  }
  return result;
}

console.log(repeatString("Hello"));

// Challenge 3
function scopingData() {
  let message = "Hello";
  function inner ()
  {return message + "World";}
  return inner ()
}

console.log(scopingData()); 

// Challenge 4
function reverseString(str) {
  return str.split("").reverse("").join("")
}

console.log(reverseString("Hello")); 

// Challenge 5
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
};

console.log(randomNumber()); 

