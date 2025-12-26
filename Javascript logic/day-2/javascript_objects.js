console.log(Math.floor(Math.random() * 100 + 1));

let user_value = 8;
let dice_value = Math.floor(Math.random() * user_value + 1);
console.log(`the generated value is ${dice_value}`);

let person = {
    name : 'morgan',
    age : 43,
    city : 'tngl'
}
console.log(person)
person.city = 'New York'
console.log(person);