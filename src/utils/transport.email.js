const transporter = require("../configs/mail.connect");
const admin = require("../function/maping.function");

const mail_user = (user, user_data) => {


    transporter.sendMail({
        from: admin(user_data), // sender address
        to: user.email, // list of receivers
        subject: `hellow Mr/Ms ${user.full_name}`, // Subject line
        text: `welcome to shop here.
     Hope you are enjoing shopping. 
     your details are below 
     name : ${user.full_name} 
     email : ${user.email}`, // plain text body
        html: `<h4> welcome to shop here.
    <br> Hope you are enjoing shopping.
    <br> your details are below
    <br> name : ${user.full_name}
    <br> user.email : ${user.email}</h4>`, // html body
    });
};
const mail_admin = (user, user_data) => {
    // console.log(user);
    // console.log(admin(user_data));

    transporter.sendMail({
        from: "shop_here@mail.com", // sender address
        to: admin(user_data), // list of receivers
        subject: `please Mr/Ms ${user.full_name}`, // Subject line
        text: `user details are as below: 
     name : ${user.full_name} 
     email : ${user.email}`, // plain text body
        html: `<h4>user details are below: <br>
    <br> name : ${user.full_name}
    <br> user.email : ${user.email}</h4>`, // html body
    });
};

module.exports = { mail_user, mail_admin };
