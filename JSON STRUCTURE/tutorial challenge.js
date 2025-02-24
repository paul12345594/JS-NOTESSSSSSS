// let people = {          
        
//     firstname : "Wilmon",
//     lastName: "Navarro",
//     age: 11,   
// }

// JSON & FOR/IN Loop
// for (let k in people){
//     // console.log(k)
//      console.log(`${k}: ${people[k]}`);
// }
//------------------------------------------
// Object.Keys() method
// let keys= Object.keys(people);              // Array form = ELEMENT / INDEX
// console.log(keys)

//------------------------------------------
// TUTORIAL CHALLENGE   = Object.keys()Method
let grades = {
    Math: 94,
    Science: 97,
    Computer: 93,
    Filipino: 95,
    English: 92
}
let average = 0

for(let k in grades){
    console.log (`${k}: ${grades[k]}`);
    average += grades[k];
}
average /= Object.keys(grades).length
console.log(`Avergae: ${average}`);