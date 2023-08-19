// Write a function that takes an array of numbers and returns the maximum value. Use
// the spread operator (...) to pass the array elements as arguments to the Math.max
// function. Use let to declare a variable that holds the maximum value.
function max (number){
    let find=Math.max(...number)
    return find
}
let number=[1,5,7,4,44,51,55,10];
let maximum=max(number);
console.log(maximum);