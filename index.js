var a = 100;
var b = 25;

/* add below */
function addSum(param1,param2){
    console.log(param1,param2);
}

addSum(a+b);

const addSum = (param1, param2) => {
    console.log(param1 + param2);

}
addSum(a,b);

/* subtract below */

function minusSum(param1,param2){
    console.log(param1,param2);
}

minusSum(a-b);

const addSum = (param1, param2) => {
    console.log(param1 - param2);

}
minusSum(a,b);


/* Multiply */


function multiplySum(param1,param2){
    console.log(param1,param2);
}

multiplySum(a*b);

const multiplySum = (param1, param2) => {
    console.log(param1 * param2);

}
multiplySum(a,b);


/* Dividing */


function dividingSum(param1,param2){
    console.log(param1,param2);
}

dividingSum(a*b);

const dividingSum = (param1, param2) => {
    console.log(param1 / param2);

}
dividingSum(a,b);


/* Arrow Function in order  */

let sum = (a, b) => a + b;

let sum = (a, b) => a - b; 

let sum = (a, b) => a * b; 

let sum = (a, b) => a / b; 