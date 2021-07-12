const mongoose = require('mongoose')

const employeeschema = new mongoose.Schema(
    {
        "name":{
            type:String,
            required:true
        },
        "mobile":{
            type:Number
            
        },
        "department":{
            type:String,
            required:true

        },
        "salary":{
            type:Number
    },
        "gender":{
            type:String,
            required:true

        }

    })

const Empdb = mongoose.model('Empdb', employeeschema);

module.exports = Empdb;