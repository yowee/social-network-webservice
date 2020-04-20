/**
 * MailGun client for sending Emails
 */
const nodemailer = require('nodemailer');

/**Testing purposes */
const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'socialnetworks565@gmail.com',
        pass: 'I1234567890mnbvcxz'
    }
}

// Config
const transporter = nodemailer.createTransport(transport)

const emailTemplate = {
    from: 'ymengistu@miu.edu',
    to: [],
    subject: '',
    text: ''
 }

const createEmailAndSend = {
     to: function(to) {
        if(to instanceof Array){    
            emailTemplate.to = to 
        }else{     
            emailTemplate.to.push(to)
        } 
        return this;
    },
    /**
     * Add a Subject
     * @param {String} subject 
     */
     subject: function(subject){
        emailTemplate.subject = subject
        return this;
    },
    /**
     * Adds a body
     * @param {String} text 
     */
     text: function(body) {
        emailTemplate.text = body
        return this;
    },
    /**
     * Sends email to destination
     * @param {Function} callback 
     */
    sendEmail : function(callback){
        try{
            transporter.sendMail(emailTemplate, (err, info) => {
                if(err) {
                    callback(err)
                } else {
                    callback(info)
                }
            });
        } catch (e) {
            callback(e)
        }

    }
}

module.exports =  createEmailAndSend
