// let var const
function objectMessage(user){
    var text="Hello" +" "+user.name+" "+"congratulations you are "+" "+user.age+" "+"years old";
    return text
}
let user={
    name:"Hafsa",
    age:20
}
let message = objectMessage(user);
console.log(message)