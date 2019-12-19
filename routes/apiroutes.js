var express = require('express')
var router = express.Router()
var mailcontroller =require('../controller/mailcontroller')


// router.post('/api/contact', (req,res) =>{
//     try{

//         const {name, email, message} =req.body;
//         const msg = {
//             to: 'palletsound@gmail.com',
//             from: email,
//             subject: `${name} would like to book a session`,
//             text: message,
//             html: `<strong>${message}</strong>`,
//           };
//           sgMail.send(msg);
//           res.send('success');
//     } catch (err){
//         console.log(err);
//         res.status(500).end();
//     }
    

// })

router.route('/contact')
.post(mailcontroller.mail)
module.exports = router;