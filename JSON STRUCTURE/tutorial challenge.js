// let people = [          
//     {
//         firstName : "Wilmon",
//         lastName: "Navarro",
//         age: 11,
//     },
//     {
//         firstName : "Justin",
//         lastName: "Mallari",
//         age: 22,
//     },
//     {
//         firstName : "Blue",
//         lastName: "Besa",
//         age: 33,
//     }, 
//     {
//         firstName : "Jenar",
//         lastName: "De Luna",
//         age: 44,
//     },
//     {
//         firstName : "Robin",
//         lastName: "Bancolita",
//         age: 55,
//     },
//     {
//         firstName : "Lawrence",
//         lastName: "Dizon",
//         age: 66,
//     },
// ]

// for (let i = 0; i < people.length; i++){
//     console.log(`FirstName: ${people[i].firstName}`);
//     console.log(`lastName: ${people[i].lastName}`);
//     console.log(`age: ${people[i].age}`);
// }


let people = {          
        
    firstname : "Wilmon",
    lastName: "Navarro",
    age: 11,
        
}
for (let k in people){
    console.log(`${k}: ${people[k]}`);
}