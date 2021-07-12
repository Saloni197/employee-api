const express = require('express');

const connectDB = require('./database/connection.js');


const app = express()
const port = 3000
connectDB();

app.use(express.json())

app.use('/',require('./routes/routes.js'))

app.listen(port,()=>{
    console.log(`server running on port:- localhost:${port}`)
})