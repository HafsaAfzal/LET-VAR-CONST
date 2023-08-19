// Write a loop that iterates over an array of strings and prints the first letter of each
// string. Use let to declare a block-scoped variable inside the loop.
let strArr=["Hafsa","Sarim","Zahra","Mawiya","Taha","Haider","Malaika"];
for(const alpha of strArr){
    let strLet=alpha.charAt(0);
    console.log(strLet);
}