// compare to {2 == 2} or {2 === 2}....

// cheack to this is methods  if(first == second):
const first = 10;
const second = "10";
if(first == second){
    console.log("Condition is true!"); // output is true!
}
else{
    console.log("Condition is false!");
}


const first = 1;
const second = true; 
if(first == second){
    console.log("Condition is true!");
}
else{
    console.log("Condition is false!");  //output is true!
}


const first = 0;
const second = false;
if(first == second){
    console.log("Condition is true!");
}
else{
    console.log("Condition is false!");  //output is true!
}


// //cheack to this is methods if(first === second): 

const first = 10;
const second = "10";
if(first === second){
    console.log("Condition is true!");
}
else{
    console.log("Condition is false!");  //output is false
}


const first = 1;
const second = true;
if(first === second){
    console.log("Condition is true!");
}
else{
    console.log("Condition is false!");   //output is false
}


const first = 0;
const second = false;
if(first === second){
    console.log("Condition is true!");
}
else{
    console.log("Condition is false!");   //output is false
}