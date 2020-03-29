const mongoose = require('mongoose');

const Post = mongoose.model('Post',{
    body:{
        type:String,
        required:true,
        validate(value){
            if(value.length<5)
                throw new Error('Post needs at least 5 characters!');
            if(value.length>100)
                throw new Error('Post cannot have more than 100 characters!');
        }
    },
    likes:{
        type:[String],
        default:[],
    },
    dislikes:{
        type:[String],
        default:[]
    },
    postedUser:{
        type:String,
        default:'Anonymous'
    }

});

module.exports = Post;