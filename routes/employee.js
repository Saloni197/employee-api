const express = require('express')

const router = express.Router()

const employee = [
    {
        name:"Kavita",
        mobile: 1258963214,
        department:'computer Science',
        salary: 50000,
        married: false

    },{
        name:"Akash",
        mobile: 1258963215,
        department:'Maths',
        salary: 28000,
        married: false

    }
]

router.get('/emp',(req,res)=>{
    return res.send(employee)
    res.send('hello from kavita')
})

router.post('/emp',(req,res)=>{

    const new_emp = req.body
    employee.push(new_emp)
  console.log('employee added successfully')

  res.send('employee added successfully')
})
module.exports = router