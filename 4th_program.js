
// dobuleIt to array...
const numbers = [2, 4, 5, 6, 7, 8];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// map used.....
// system of methods 2nd... system of methods 2nd...
const numbers = [2, 4, 5, 6, 7, 8];
 
function square(element){
    const result = element * element;
    return result;
}
const total = numbers.map(square)
console.log(total);


// system of methods 3rd... system of methods 3rd...
const numbers = [2, 4, 5, 6, 7, 8];

const total = numbers.map(function square(element){
        const result = element * element;
        return result;
})
console.log(total);


//system of methods 3rd... system of methods 3rd...
const numbers = [2, 4, 5, 6, 7, 8];

const result = numbers.map(function square(element){
    return element * element;
})
console.log(result);


// system of methods 4th... system of methods 4th...
const numbers = [2, 4, 5, 6, 7, 8];

numbers.map(function square(element, index, array){
    console.log(element, index, array);
})


// system of methods 5th..... system of methods 5th.....
const numbers = [2, 4, 5, 6, 7, 8];
const square = numbers.map(element => element * element);
console.log(square);


// system of methods 6th..... system of methods 6th.....
const numbers = [2, 4, 5, 6, 7, 8];
const y = numbers.map(x => x * x);
console.log(y);


//filter used .......filter used .......filter used .......filter used .......
const numbers = [2, 4, 5, 6, 7, 8];
const bigger = numbers.filter(element => element > 2);
console.log(bigger);


//same here..... same here.....
const numbers = [2, 4, 5, 6, 7, 8];
 
const total = numbers.filter(square => square < 7)
console.log(total);


// find used... find used... find used... find used... 
const numbers = [2, 4, 5, 6, 7, 8];
 
const total = numbers.find(square => square > 2)
console.log(total);


// same here.....
const numbers = [2, 4, 5, 6, 7, 8];
 
const total = numbers.find(square => square < 5)
console.log(total);