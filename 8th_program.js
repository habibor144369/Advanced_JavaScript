// closure function creat in this program.....
function stopWatch(){
    let count = 0;
    return function(){
        count = count + 1;
        return count
    }
}
const result = stopWatch();
console.log(result());
console.log(result());
console.log(result());
console.log(result());

const total = stopWatch();
console.log(total());
console.log(total());
console.log(result());
console.log(total());
console.log(result())