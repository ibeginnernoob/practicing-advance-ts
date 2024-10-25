// const users={
//     "asd":{
//         id:"asd",
//         name:"John"
//     },
//     "kwl":{
//         id:"kwl",
//         name:"Amy"
//     }
// };

//creating objects in ts

//method 1 - using records

// interface User{
//     id:string,
//     name:string
// }

// type Users=Record<string,User>

// const users:Users={
//     "fwf":{
//         id:"fwf",
//         name:"Adheil"
//     }
// }

//method 2 - using maps[js concept]

// interface User{
//     id:string,
//     name:string
// }

// const users=new Map<string,User>()

// users.set("fwf",{id:"fwf",name:"adheil"});
// users.set("asd",{id:"asd",name:"kirat"});

// users.delete("fwf");

// console.log(users);