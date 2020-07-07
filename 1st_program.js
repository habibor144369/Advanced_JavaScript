/** false value in JavaScrit program:
1. let number = 0;
2. let name = ''; (empty string is false!)
3. let name = ""; (empty string is false!)
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
 7. let condition = false;
 */

// this is base ....
let age = NaN;

if(age){
    console.log("condition is true!");
}
else{
    console.log("condition is false!");
}
