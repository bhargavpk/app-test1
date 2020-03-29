const express = require('express');
const path = require('path');
const hbs = require('hbs');

require('./../db/mongoose');
const User = require('./../db/models/user');

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const app = express();

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.use(express.json());    //Parses incoming request of JSON type

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/signup',(req,res) => {
    res.redirect('/test_route');
})

app.get('/test_route',(req,res)=>{
    res.send('Tested route reached!');
});

app.post('/signup',async (req,res)=>{
    const user = await new User(req.body);
    try{
        await user.save();
        res.send({
            success:true,
        });
    }catch(e){
        res.send({
            success:false,
            error:e 
        })
    }
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server is running on port '+ port);
});
