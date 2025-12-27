//function and scope in javascript

let greet = 'hello';

function changeGreet(){
    let greet = 'namaste';
    console.log(greet);

    function innerGreet(){
        console.log(greet);
    }

    innerGreet();
}

console.log(greet);
changeGreet();

//function expression 
let sum = function(){
    console.log('function expression');
}

sum();