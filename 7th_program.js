// Scope, block scope, outer scope variable........
    function sum(num1, num2){
        let result = num1 + num2; //(let, const) variable access to in block scope. it is block scope variable in javascript program.this variable only access to in block scope.
        return result;
    }
    const total = sum(7, 5);
    console.log(total);


 // test to (let, const) variable declearetion syestem.......
 function sum(num1, num2){
    let result = num1 + num2; //(let, const) variable access to in block scope. it is block scope variable in javascript program.this variable only access to in block scope.
    console.log(result) // now its working becuase it is in block scope.
    return result;
}
    const total = sum(7, 5);
    console.log(result)   // it's don't working becuase in outer bolck scope. 
    console.log(total);
 

// golobal variable diclearetion.......
    let bonus = 30; // its golobal veriable. its access to all plase in program....
    function sum(num1, num2){
         let result = num1 + num2 + bonus; //(let, const) variable access to in block scope. it is block scope variable in javascript program.this variable only access to in block scope.
         console.log(bonus) //for example showed golobal variable accessing limite all plase in program. 
         return result;
     }
     const total = sum(7, 5);
     console.log(total);
     
     

 // let variable diclearetion.......
    let bonus = 30; // its golobal veriable. its access to all plase in program....
    function sum(num1, num2){
         let result = num1 + num2 + bonus; //(let, const) variable access to in block scope. it is block scope variable in javascript program.this variable only access to in block scope.
         console.log(bonus) //for example showed golobal variable accessing limite all plase in program. 
         if(result > 10){
             let mood = "so happy";
             mood = "off"
             mood = "mood is so happy becuase im learn to JavaScript program!"
             console.log(mood);
         }
         return result;
     }
     const total = sum(7, 5);
     console.log(total);
     console.log(mood); //its not working becuase it is outer block scope of (let mood) variable so don't work this.. give error.
     

    
      // var  variable diclearetion.......
let bonus = 30; // its golobal veriable. its access to all plase in program....
function sum(num1, num2){
         var result = num1 + num2 + bonus; //(let, const) variable access to in block scope. it is block scope variable in javascript program.this variable only access to in block scope.
         console.log(bonus) //for example showed golobal variable accessing limite all plase in program. 
         if(result > 10){
             var mood = "so happy";
             mood = "off"
             mood = "mood is so happy becuase im learn to JavaScript program!"
             console.log(mood);
         }
         console.log(mood); //its working becuase it is var  variable diclearetion ...
         return result;
     }
     const total = sum(7, 5);
     console.log(total);
    

    
// var variable behavio...
     var numebr = 10;
     console.log(numebr); // output: 10

    //similarly..
    console.log(mama);
    var mama = 10;  // output: undifiend


// let variable behavio...
    let numebr = 10;
    console.log(numebr); // output: 10

   //similarly..
   console.log(mama);
   let mama = 10;  // output: error


// const variable behavio...
    let numebr = 10;
    console.log(numebr); // output: 10

//similarly..
    console.log(mama);
    let mama = 10;  // output: error
    