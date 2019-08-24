const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
var cors = require("cors");
const path = require('path');
require('dotenv').config();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))


app.use(function(req, res, next) {
    console.log('request', req.url, req.body, req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.post('/contact', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        if(err){
            console.log("There was error");
            console.log(err);
        }

        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.fname} ${req.body.lname}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })

        let mailOptions = {
            from: "test@testaccount.com",
            to: "aratakagan@gmail.com",
            replyTo: "test@testaccount.com",
            subject: "New Message",
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                console.log(err);
            } else {
                console.log("Success from the server site!");
            }

        })
    })
})

// Serve static assets if it's in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));