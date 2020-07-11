// Array slice, splice, array join elements......
// array slice in array...
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = numbers.slice(2, 5);  // 2 index, 5 index..
// console.log(part);
// console.log(numbers);  // The case of slice, orginal array stay same no change.

// // array splice in array.....
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const removed = numbers.splice(2, 5, 20, 25, 30)  // 2 index, 5 digit count of number in remooved array, and 20,25,30 new elements add in numbers array.
// console.log(removed);
// console.log(numbers);  // The case of splice, orginal array keep to change...

// array join methods....
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const togather = numbers.join(" ");
console.log(togather);
