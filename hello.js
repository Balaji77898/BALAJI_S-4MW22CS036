const express=require('express')
const app=express()
const port=5000
app.use('/myapi',(req,res)=>{
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log("Server listening to 5000")
})