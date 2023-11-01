// // //MRF - Map Reduce Filter - Its a higher order fucntion (Function inside a function)

// // // Callback function - all these MRFs will be call back functions

// // //MRF
// // //Map:- It iterates each and every element in an array and produces new array.

// // //eg. 2 multiply being mapped with [1, 2, 3, 4] will gives => [2, 4, 6, 8]

// // //syntax:- arrayname.map(we need to pass function). Inside function we need to write logic

// // //Basic examples without map

// // // var arr = [12, 13, 14, 15];

// // // var result = [];

// // // //expected o/p [24, 26, 28, 30]

// // // for(var i=0; i<arr.length; i++)
// // // {

// // //     result.push(arr[i]*2);

// // // }
// // // console.log(result)

// // //map using normal function

// // //

// // // const arr =[1, 2, 3, 4, 5];

// // // const result = arr.map(function(element)
// // // {
// // // return element *2;
// // // })
// // // console.log(result)

// // //arrow fucntion


// // const arr =[1, 2, 3, 4, 5];

// // const result = arr.map((element)=>
// // {
// // return element *2;
// // })
// // console.log(result)

// // //another method for above when there is only one line in the function

// const arrnew = [12, 13, 14, 15];

// const resultnew = arrnew.map((element)=>element*2)

// console.log(resultnew)

// //Map method: Conclusion

// //It takes a fucntion (In above look (element)=>element*2) as a paramter

// //It returns a new array

// //Maximum it will be an array function (because it reduces lines of code, memery consumption and time taken)

// //It is an array method. 

// const arrnew1 = ["apple", "mango", "orange"];
// const result02 = arrnew1.map((element) => element + 's');

// console.log(result02);

// // // remove "s"- not working good!

// // const arrnew3 = ["apples", "mangos", "oranges"];

// // const arrWithoutS = arrnew1.map((element3) => element3.slice(0, -1));

// // console.log(arrWithoutS);
// //-----------------------------------
// //-----------------------------------
// //-----------------------------------
// //-----------------------------------
// //-----------------------------------
// //-----------------------------------
// //

// //Filter: It is basically used to filter the elemenst inside the array

// //without filter example

// // var arr = [12, 13, 14, 15];
// // var result =[];

// // for (var i=0; i<arr.length; i++)
// // {
// //     if(arr[i]%2===0)
// //     {
// //         result.push(arr[i]);
// //     }
// // }
// // console.log(result)

// //with filter: Filter is always based on a condition

// //It takes a fucntion as a paramter and apply on each and every element in an array
// // if condition is true, it will push oto array 

// //syntax: arrayname.filter(function)

// //example: arrow method + Filter

const arr4 = [12, 13, 14, 15, 16, 17, 18];

const result4 = arr4.filter((element4)=>element4%2===0 && element4%3===0)

console.log(result4);

//Print greater than 2

const great =[4,3,2,1,5]

const result5 = great.filter((element5)=>element5>2)

console.log(result5);

//------------------------------

//-------------------------------


//-------------------------------

//Reduce:- 

//1. Confusing topic becase no connection between name and its fucntion

//2. It is generally used when we have to take all the array elements and print the single value

//example: Greatest name, sum of the array, total

//3. Used only for array

//syntax: arrayname.reduce((acc,cv)=>{})

//acc: accumulator 

//- It is the initial value. example: var result =[]; in the above examples

//if the initial value is not given then it takes the first value

//cv: current value

// It is the current element/value

//example without Reduce
//sum of the array

const array06 = [1,2,3,4,5];

let sum = 0;

for (var i=0; i<array06.length; i++)
{
sum = sum + array06[i];
}

console.log(sum)
//
//using Reduce - Summation

const array07 = [1,2,3,4,5];

const result07 = array07.reduce((acc, cv)=>
{
    return acc+cv
},0)

console.log(result07)

//using Reduce - Multiply

const array08 = [1,2,3,4,5];

const result08 = array08.reduce((acc1, cv1)=>
{
    return acc1*cv1
},1)

console.log(result08)

//Using reduce - greatest

const array09 = [123,243,13,84,5, 99,444];
const result09 = array09.reduce((acc2, cv2)=>
{
    return Math.max(acc2, cv2);//here first time acc2 takes 0 as we have mentioned it down. and cv2 takes initial value 123. Then acc2 takes 123 and then cv2 takes 243............
},0)
console.log(result09);

//or without Reduce

const array10 = [1,2,3,4,5, 99,444, 9865];
console.log(Math.max(...array10))

//------------------------
//-----------------------

//for each loop

//1. To print the array elements
//2. only for arrays
//3. It takes function as a parameter
//4. It will apply on each and every element

const array12 = [1,2,3,4,5, 99,444, 9865];

const result12 = array12.forEach((element12)=>console.log(element12)) 

//XMLHttpRequest and Map

var myrequest2 = new XMLHttpRequest();

myrequest2.open("GET","https://restcountries.com/v3.1/all",true)

myrequest2.send();

myrequest2.onload = function()
{
  var data = myrequest2.response;
 // console.log(data)
  var result2 = JSON.parse(data); //this parse will load data nicely 
 
  var resultfinal =result2.map((element11)=>console.log(element11.name.common))}