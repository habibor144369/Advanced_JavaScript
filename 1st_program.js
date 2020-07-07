/** false value in JavaScrit program:
1. let number = 0;
2. let name = '';  (empty string is false!)
3. let name = "";  (empty string is false!)
4. let name = ``;  (empty string is false!)
4. undefiend variable.  (example: let name;), (let name = undefiend)
5. variable defienf to null.  (example: const number = null;)
6.variable defienf to NaN.  (example: const number = NaN;)
7. let condition = true;
*/

/** truth value in JavaScript:
 1. let number = 1323;
 2. let number = -344;
 3. let number = [];
 4. let number = {};
 5. let name = " ";  (white space string is true!)
 6. let name = ' ';  (white space string is true!)
 7. let name = ` `;  (white space string is true!)
 8. let condition = false;
 */

// this is base ....
let age = 10;

if(age){
    console.log("condition is true!");
}
else{
    console.log("condition is false!");
}



// simple condition to cheack... (age >= 0) is true, so logic is true...becuase or get.
let age = 0;

if(age || age >= 0){
    console.log("condition is true!");
}
else{
    console.log("condition is false!");
}



// simple condition to cheack... (age >= 0) is true, so logic is true... becuase or get.
let age = 0;

if(age || age >= 0){
    console.log("condition is true!");
}
else{
    console.log("condition is false!");
}



// simple condition to cheack... (age >= 100),(age = 10;) is true, so logic is true...becuase and get.
let age = 10;

if(age && age >= 0){
    console.log("condition is true!");
}
else{
    console.log("condition is false!");
}



// simple condition to cheack... (age >= 100),(age = 10;) is true, so logic is true... becuase and get.
let age = 10;

if(age && age >= 0){
    console.log("condition is true!");
}
else{
    console.log("condition is false!");
}
