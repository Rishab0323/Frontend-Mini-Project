let myName = 'Rishab Shukla'
console.log(myName.length);
console.log(myName[3])

let firstName = 'Rishab'
console.log(firstName[0]);

let concateNum = firstName + 2003
console.log(concateNum);

let emptyString = '';
let stringWithSpace = ' ' ;

console.log(emptyString.length);
console.log(stringWithSpace.length);
console.log(stringWithSpace[0]);

//String methods

let name1 = 'Javascript king';
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.indexOf('s'));

console.log(name1.slice(0,4));
console.log(name1.replace('hello',' is webdev king'));
console.log(name1.repeat(3));

let arr = ['audi','bike',12,'hello'];
// arr.push('ferrari');
arr.pop();
arr.shift();
arr.unshift('dhan')
console.log(arr);

let month = ['january','july','march','august']
month.shift()
month.shift()
console.log(month)
month.unshift('july');
month.unshift('june');
month[0].replace('april') 
console.log(month);

let cars = ['audi','bmw','safari','tata'];
console.log(cars.slice());
console.log(cars.slice(2));
console.log(cars.slice(-3))
console.log(cars.slice(-2,1))
console.log(cars.slice(2,4))