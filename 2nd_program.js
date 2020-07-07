//undefiend vs null
//we can get undefiend in many ways. as shown below.....

// system of methods 1 ....
let number;
console.log(number);


// system of methods 2....
function add(num1, num2){
    const result = (num1 + num2);
    console.log(result);
                 //(becuase we don't: return result;) so console.log(total) showed undefiend.
}
const total = add(20, 30);
console.log(total);


// system of methods 3....
function add(num1, num2){
    const result = (num1 + num2);
    console.log(result);
                 //(becuase we don't: return result;) so console.log(total) showed undefiend.
}
const total = add(20); // 1 pera metear pass so showed NaN!..
console.log(total);


// system of methods 4....
function add(num1, num2){
    console.log(num1, num2);
}
const result = add(30); // 1 pera meter pass, so 1 value showed, 2nd perameter don't pass so Undefiend 2nd value..
console.log(result); // don't return so result is undefiend....


//system of methods 4 in object..
const student = {Name: "Habibor Rahaman", Roll: 14 , Id: "33/18"};
console.log(student.collage); // output undefiend, becuase no have a collage property in object so output is undefiend..
console.log(student); // it's object. so output showed all property in object.


//system of methods 5 in array....
const student = [1, 4, 45, 65, 56, 23];
console.log(student[9]) // output undefiend, becuase have no a indexof number [9] in array so output is undefiend..
console.log(student); // it's array. so output showed all ellement in array.

let name = ["habib", "wahid", "tarek", "siyam", "rifat"];
console.log(name[10]);  // output undefiend, becuase have no a indexof number [10] in array so output is undefiend..
console.log(name);    // it's array. so output showed all ellement in array.

// system of methods 6.....
let fun = undefined;
console.log(fun);


