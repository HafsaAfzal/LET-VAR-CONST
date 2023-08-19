// Write a function that takes an array of numbers and returns the sum of the squares of
// each number. Use let, const and var to declare variables in different scopes.
function square(arr){
    let ans=[];
    for(const val of arr){
        let res=val*val;
        ans.push(res);
    }
    return ans
}
let arr=[1,2,3,4,5];
console.log(square(arr))