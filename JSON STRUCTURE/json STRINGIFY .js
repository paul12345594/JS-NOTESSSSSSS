let person = {
    fistName : "David",
    lastName: "SDPT",
    age: 22,
    hobbies:["coding", "Eating", "Sleeping"],   //ARRAY 
    pets:{
        0:{
            name1:"DOG",
            name2:"CAT"
        }
    }
}
console.log(person)     // 1st RUN 

let paulworx = JSON.stringify(person);
console.log(paulworx);  // 2ND RUN = STRING FORMAT ------- {"fistName":"David","lastName":"SDPT","age":22}.
                        // JSON.stringify  =  CONVERT TO STRING FORMAT 

