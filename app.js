const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const user = require('./routes/user');
const contact = require('./routes/contact/contact');
const auth = require('./keys');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/user',user);
app.use('/contact',contact);


app.post('/contact', (req,res)=>{
    const cName = req.body.name;
    const cEmail = req.body.email;
    const cMessage = req.body.message;
    console.log(cName, cEmail, cMessage);
    

    let transporter = nodemailer.createTransport({
        host : 'mail.inarsi.com',
        port : 465,
        secure : true,
        auth: {
            user : auth.user,
            pass : auth.pass
        }
    });
    transporter.sendMail({
        from : 'admin@inarsi.com',
        to : cEmail,
        subject: 'Thank you for your request',
        text: " We got your request, please allow us some time to revert"
    });



    res.redirect('/');


})

app.get('/',(req,res)=>{
    res.send(`Home Page`);
});




app.listen(port,()=>{
    console.log(`server started at ${port}`)
})
