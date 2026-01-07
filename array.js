// array_challenges.js

// Array Challenges 1-5

// Challenge 1
function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log(findLargestNumber([3, 6, 2, 8, 4])); // Expected: 8

// Challenge 2
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]

// Challenge 3
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

// Challenge 4 (Optional)
function filterArray(arr, steps) {
  return arr.slice(steps).concat(arr.slice(0, steps));
}

console.log(filterArray([1, 2, 3, 4, 5], 2));

// Challenge 5 (Optional)
function rotateArray(arr, steps) {
  return arr.slice(arr.length - steps).concat(arr.slice(0, arr.length - steps));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));
