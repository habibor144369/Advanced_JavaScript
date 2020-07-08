//Argument, array like object, log all array elements......

function add(){
    const mama = ([...arguments]);
    const new_array = [];
    for(let i = 0; i < mama.length;  i++){
        const element = mama[i];
        const result = element + element;
        new_array.push(result);
   }
   console.log(new_array); //total array element dubleIt...and new array creat
}
   add(15, 17, 18, 13, 20);



//Argument, array like object, log all array elements......
function add(){
    const mama = ([...arguments]);
    const result = mama.reduce(function(a, b){
     const sum = a + b;
     return sum
 });
    console.log(result); // total array sum....
}

add(15, 17, 18, 13, 20);



// array element all addition....
var array = [15, 17, 18, 13, 20];
    
    // Getting sum of numbers
    const result = array.reduce(function(a, b){
        const sum =  a + b;
        return sum;
    });
    
    console.log(result); //total array summation...



//Argument, array like object, log all array elements......

function add(){
    const mama = ([...arguments]);
    for(let i = 0; i < mama.length;  i++){
        const element = mama[i];
        const result = element + element;
        console.log(result);    // only fo looping and array element doubleIt..and do not array creat..
    }
}
  
add(15, 17, 18, 13, 20);
