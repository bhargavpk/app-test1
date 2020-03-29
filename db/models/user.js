const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User',{
    name:{
        firstName:{
            type:String,
            required:true,
            trim:true,
            validate(value){
                if(!validator.isAlpha(value))
                    throw new Error('All characters should be letters');
            }
        },
        lastName:{
            type:String,
            required:true,
            trim:true,
            validate(value){
                if(!validator.isAlpha(value))
                    throw new Error('All characters should be letters');
            }
        }
    },
    userName:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if((value.length<3)||(value.length>8))
                throw new Error('User name is of inadequate length');
            if(value === 'Anonymous')
                throw new Error('Anonymous not a valid User name!');
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Invalid E-mail address');
        }
    }
});

module.exports = User;