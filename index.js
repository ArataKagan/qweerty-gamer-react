var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transport = {
    host: 'smtp.gmail.com',
    pool: true,
    auth: {
        user: "aratakagan@gmail.com",
        pass: "AlexUCLA0412!"
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error.response.data);
    } else {
        console.log("Server is ready to take our message")
    }
})

router.post("/send", (req, res, next) => {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${fname} ${lname} \n email: ${email} \n message: ${content}`

    var mail = {
        from: name,
        to: "aratakagan@gmail.com",
        subject: "New Message from Contact Form",
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if(err) {
            res.json({
                msg: "fail"
            })
        } else {
            res.json({
                msg: "success"
            })
        }
    })
})

module.exports = router;
