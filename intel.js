// const fs= require("fs/promises")
// const express= require("express")
// const cors= require("cors")
// const _=require("lodash")
// const {v4:uuid}= require('uuid')

// const app = express()
// //--app.get goes here..

//  app.get('/outfit',(req,res)=>{
//     res.send('this is working!!!!')
//  })

//  app.post('/comments',(req,res)=>{
//     const id= uuid()
//     console.log(id)
//     res.sendStatus(202)
//  })




// app.listen(3000,()=>{
//     console.log('API is running')
// }) 

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
//  +++++++++++++++++++++++++++++++++++++++++++ M V C structure +++++++++++++++++++++++++++++++++++

const express= require('express')
const app= express()
const userRouter=require('./routes/user')
app.use('/user',userRouter)
app.listen(3005,()=>{
    console.log('server running on port 3005...')
});