import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.listen(4444, (err)=>{
    if(err) {
        console.log(err.message);
    }
    console.log("server listening on 4444");
})