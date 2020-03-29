const mongoose = require('mongoose');
const User = mongoose.model('User',{
    name:{
        firstName:{
            type:String,
            required:true,
            trim:true
        },
        lastName:{
            type:String,
            required:true,
            trim:true
        }
    }
});
const firstUser = new User({
    name:{
        firstName:'Bhargav',
        lastName:'Kulkarni'
    },
})
console.log(firstUser);