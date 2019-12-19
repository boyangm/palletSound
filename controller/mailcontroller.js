const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
module.exports ={
    mail: function (req,res){
        try{
    
            const {name, email, message} =req.body;
            const msg = {
                to: 'palletsound@gmail.com',
                from: email,
                subject: `${name} would like to book a session`,
                text: message,
                html: `<strong>${message}</strong>`,
              };
              sgMail.send(msg);
              res.send('success');
        } catch (err){
            console.log(err);
            res.status(500).end();
        }
        
    
    }
}