// Applay map, filter, find on an array of object.......
// array in object property 'name' access methods 1 by for loop used ......
const students = [
    {id: 14, name: "Habbior Rahaman"},
    {id: 20, name: "Tarek Munshi"},
    {id: 10, name: "Wahidue Rahaman"},
    {id: 25, name: "Miloy Chowdhory"},
    {id: 25, name: "Rahat Chowdhory"}
];

const New_Array = [];

for(let i = 0; i <students.length; i++){
    const element = students[i];
    const result = element.name;
    New_Array.push(result);
}

console.log(New_Array);


// array in object property 'id' access methods 1 by for loop used ......
const students = [
    {id: 14, name: "Habbior Rahaman"},
    {id: 20, name: "Tarek Munshi"},
    {id: 10, name: "Wahidue Rahaman"},
    {id: 25, name: "Miloy Chowdhory"},
    {id: 25, name: "Rahat Chowdhory"}
];

const New_Array = [];

for(let i = 0; i <students.length; i++){
    const element = students[i];
    const result = element.id;
    New_Array.push(result);
}

console.log(New_Array);


//array in object property 'name' access methods 1 by  map() used ......
const students = [
    {id: 14, name: "Habbior Rahaman"},
    {id: 20, name: "Tarek Munshi"},
    {id: 10, name: "Wahidue Rahaman"},
    {id: 25, name: "Miloy Chowdhory"},
    {id: 25, name: "Rahat Chowdhory"}
];

const names = students.map(element => element.name);
console.log(names);


// //array in object property 'id' access methods 1 by  map() used ......
const students = [
    {id: 14, name: "Habbior Rahaman"},
    {id: 20, name: "Tarek Munshi"},
    {id: 10, name: "Wahidue Rahaman"},
    {id: 25, name: "Miloy Chowdhory"},
    {id: 25, name: "Rahat Chowdhory"}
];

const names = students.map(element => element.id);
console.log(names);


// //array in object property 'id' access methods 1 by  filter() used ......
const students = [
    {id: 14, name: "Habbior Rahaman"},
    {id: 20, name: "Tarek Munshi"},
    {id: 10, name: "Wahidue Rahaman"},
    {id: 205, name: "Miloy Chowdhory"},
    {id: 285, name: "Rahat Chowdhory"}
];

const names = students.filter(element => element.id > 40);
console.log(names);


//array in object property 'id' access methods 1 by  find() used ......
const students = [
    {id: 14, name: "Habbior Rahaman"},
    {id: 20, name: "Tarek Munshi"},
    {id: 10, name: "Wahidue Rahaman"},
    {id: 205, name: "Miloy Chowdhory"},
    {id: 285, name: "Rahat Chowdhory"}
];

const names = students.find(element => element.id > 40);
console.log(names);