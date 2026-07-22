import express from "express"

const app = express();

app.get('/health',(req,res)=>{
    return res.status(200).json('all is good/');
})
app.get('/',(req,res)=>{
    return res.status(200).json('hi i am aman/');
})
app.listen(4000,()=>{
    console.log("Server started at port 4000")
})