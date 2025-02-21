//--------------------------------------------------JSON STRINGIFYYY

// let person = {
//     fistName : "David",
//     lastName: "SDPT",
//     age: 22,
//     hobbies:["coding", "Eating", "Sleeping"],   //ARRAY 
//     pets:{
//         0:{
//             name1:"DOG",
//             name2:"CAT"
//         }
//     }
// }
// console.log(person)     // 1st RUN 

// let paulworx = JSON.stringify(person);
// console.log(paulworx);  // 2ND RUN = STRING FORMAT ------- {"fistName":"David","lastName":"SDPT","age":22}.
//                         // JSON.stringify  =  CONVERT TO STRING FORMAT 


//--------------------------------------------------JSON.parse
// let strPerson = `{"firstName":"David", "lastName":"Dungca", "age":"22"}`;

// let person = JSON.parse(strPerson);         // STRING TO JSON FORMAT
// console.log(person);

//--------------------------------------------------JSON.Array

let person = [          // ARRAY 
    {
        firstName : "Wilmon",
        lastName: "Navarro",
        age: 22,
    },
    {
        firstName : "Justin",
        lastName: "Mallari",
        age: 25,
    },
    {
        firstName : "Blue",
        lastName: "Besa",
        age: 26,
    }, // CAN MANIPULATE ARRAY YOU WANT TO ACCESS
]
// console.log(`${person[2].firstName} ${person[2].lastName} ${person[2].age}`);
// console.log(`${person[0].lastName} ${person[1].firstName}`)