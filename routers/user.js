const express = require('express');
const hbs = require('hbs');
const path = require('path');
const validator = require('validator');
const User = require('./../db/models/user');

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const app = express();
const router = new express.Router();

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

router.get('/', (req,res)=>{
    res.render('index');
})

router.post('/users',async (req,res)=>{
    const user = User(req.body);
    try{
        await user.save();
        res.status(201).send('You are successfully added!');
    }catch(e){
        res.status(500).send(e.message);
    }
});

router.get('/users',async (req,res)=>{
    try{
        const users = await User.find({});
        res.status(200).send(users);
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/users/:userName',async (req,res)=>{
    try{
        const user = User.findOne(req.params.userName);
        if(user)
            res.status(200).send(user);
        else
            res.status(404).send('Couldnt find anyone!');
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports = router;
