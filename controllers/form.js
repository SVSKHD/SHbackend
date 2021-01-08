const sgMail  = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


exports.contactForm = (req,res)=>{
    const {email, name, message} = req.body
    const data = req.body
    console.log(data)

    const emailData = {
        to:process.env.EMAIL_TO,
        from:req.body.email,
        subject:`Contact Form - ${process.env.APP_NAME}`,
        text:`Email received from Contact Form \n Sender name :${name} \n Sender email :${email} Sender Message:${message}`,
        hrml:`
        <h4>Email Receidved from contact Form</h4>
        <p>Sender name : ${name}</p>
        <p>Sender email : ${email}</p>
        <p>Sender message : ${message}</p>
        <hr/>
        <p>This Email Contains Sensitive Information </p>
        <p>SevenHills Tirupati</p>

        `
    }
    sgMail.send(emailData).then(sent=>{
        return res.json({
            success : true
        })
    })
}

exports.contactBlogAuthorForm = (req,res)=>{
    const {authorEmail , email, name, message} = req.body
    const data = req.body
    console.log(data)

    let maillist = [authorEmail,process.env.EMAIL_TO]
    const emailData = {
        to:maillist,
        from:email,
        subject:`SomeOne messaged you from  - ${process.env.APP_NAME}`,
        text:`Email received from Contact Form \n Sender name :${name} \n Sender email :${email} Sender Message:${message}`,
        hrml:`
        <h4>Email Receidved from Form</h4>
        <p>name : ${name}</p>
        <p>email : ${email}</p>
        <p>message : ${message}</p>
        <hr/>
        <p>This Email Contains Sensitive Information </p>
        <p>SevenHills Tirupati</p>

        `
    }
    sgMail.send(emailData).then(sent=>{
        return res.json({
            success : true
        })
    })
}