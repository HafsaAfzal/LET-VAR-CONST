// Write a function that takes a number n and returns a string with n asterisks. Use const
// to declare a constant string that holds one asterisk.
function pattern(num){
    let symb="*";
    let final="";
    for(let i=0;i<num.length;i++){
        final=final+symb
    }
    return final;
}
const num=5
console.log(pattern(num));