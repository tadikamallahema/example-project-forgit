import express from 'express';

const app=express();
const port=5009;
app.use(express.json());

app.listen(port,()=>{
    console.log("Server is running ")
})

console.log("Hello");
console.log("Yes the changes are happening ");
console.log("Yes the changes are happening -doing changes by dev a");