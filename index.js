const express = require('express');


const employeeRouter = require('./routes/employee.js')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(employeeRouter)

app.get('/',(req,res)=>
{
    res.send('hello everybody!!')
})
app.listen(port,()=>{
    console.log(`server running on port:- localhost:${port}`)
})