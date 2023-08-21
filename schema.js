const mongoose = require('mongoose')

const filmSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : [true , 'Please Enter The Film Name']
        },
        director : {
            type : String,
            required : true
        },
        duration : {
            type : String ,
            required : true
        },
        acteurs : {
            type : Array , 
            required : true
        }
    }
)


const Films = mongoose.model( 'Films' , filmSchema )

module.exports = Films