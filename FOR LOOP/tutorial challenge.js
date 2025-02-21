let people = ["David", "Alnere", "Gilbert", "James"];
let search = "dAvid"
let isFound = false;

// for (let i = 0; i < people.length; i++) {
//     if (people[i].toLowerCase() === search.toLowerCase) {
//         isFound = true;
//         console.log(`found ${people[i].toUpperCase()}`);
//         break;
//     }
// }
// if (!isFound) console.log("NOT FOUND");
//--------------------------
// for (let x in people) {
//     if (people[x].toLowerCase() === search.toLowerCase()) {
//         isFound = true;
//         console.log(`Found ${people[x]}`);
//         break;
//     }
// }
// if (!isFound) console.log("NOT FOUND BROTHER")
//---------------------------
for (let jerson of people) {
    if (jerson.toLowerCase() === search.toLowerCase()) {
        isFound = true;
        console.log(`Found ${jerson}`);
        break;
    }
}
if (!isFound) console.log("NOT FOUND BROTHER")


