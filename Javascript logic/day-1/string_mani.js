// let month = ['january','july','march','august'];
// console.log(month.shift());
// console.log(month.splice(0,1,'july','june'));
// console.log(month)

// //array reference 
// let arr = ['hi','hel']
// let arrCopy = arr
// console.log(arr == arrCopy);
// let num = ['2'] ;
// let num1 = ['2'];
// console.log(num == num1);
// console.log(num === num1);

//get first n element of an array
// let arr1 = [1,2,3,4,5]
// let n= 3
// console.log(arr1.splice(0,n));
// console.log(arr1.slice(arr1.length-2))

// let name1 = 'as';

// if(name1[0] === 'a' && name1.length >= 3 ){
//     console.log("Is a good string");
// }
// else{
//     console.log('not a good string');
// }

// for(let i=1;i<15;i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

// for(let i=1;i<15;i=i+1){
//     console.log(i)
// }

// for(let i=1;i<6;i=i+1){
//     let tab = 1;
//     tab = 5 * i;
//      console.log(tab);
// }

// const fav_movie = 'avatar';
// let guess = prompt('guess the fav movie');

//  while((guess != fav_movie) && (guess != 'quit')){
//     guess = prompt('guess the fav movie')
//  }

//  if (fav_movie == guess){
//     console.log('you won');
//  }else{
//     console.log("you loose")
//  }

 let cars =[['a','b','c'],['d','e','f']];
 console.log(cars.length);
   // for(let i=0;i<cars.length;i++){
   //    console.log(i)
   //    console.log(cars[i]);
   // }

   for(ele of cars){
      console.log(ele);
   }