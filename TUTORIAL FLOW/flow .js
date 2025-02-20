//WHILE LOOP
// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }
//----------------------------------------------------
//ITERATE ARRAY
// let names = ["David", "Alenere", "Gilbert", "James"];
// let b = names.length - 1;

// while (names[b]) {
//     console.log(names[b]);
//     b--;
// }
//----------------------------------------------------
// BREAK KEYWORD
// let people = ["David", "Alenere", "Gilbert", "James"];
// let b = 0;
// let search = "James";  // the search only is the RESULT

// while (people[b]) {
//     if (people[b] === search) {
//         console.log(people[b]);
//         break;
//     }
//     b++;
// }

//     //------------------------------------------------------------
//     console.log(people[b]);
//     b++;
//     if (b === 3) {
//         break;         // RESULT = "David", "Alenere", "Gilbert",
//     }
// }
//------------------------------------------------------------------------------------
let arr = [5, 5, 5, 5, 5];
let i = 0;
let sum = 0;

while (arr[i]) {
    sum += arr[i];
    i++;
}
alert(sum);