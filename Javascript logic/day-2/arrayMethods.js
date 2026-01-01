//forEach method
let arr = [1,2,3,4,5,6];

// arr.forEach((ele) => {
//     if(ele %2 == 0){
//         console.log(`the element ${ele}is even` );
//     }
// })

//map()
let newArr = arr.map((ele) => {
    return ele  + 2;
})
console.log(newArr);

//filter()
let newArr1 = arr.filter((ele) => {
    return ele % 2 != 0 
})
console.log(newArr1);

//reduce()
let resArr = arr.reduce((res,val) => {
    return res / val;
})
console.log(resArr);