// import express from 'express';
// import {string, z} from 'zod';

// const userSchema=z.object({
//     email:z.string().email(),
//     name:z.string(),
//     password:z.string()
// });

// type userSchemaType=z.infer<typeof userSchema>;

//same as writing - 

// type userSchemaType={
//     email:string,
//     name:string,
//     password:string
// };