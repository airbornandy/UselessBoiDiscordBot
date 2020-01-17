const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
   const cookieUser = msg.mentions.users.first();

   if (cookieUser === msg.author) {
       msg.reply("Don't hog all the cookies for yourself");
       return;
   }

   msg.reply('Given a :cookie: to ' + cookieUser);
}

module.exports.help = {
    name: "cookie",
    description: "Gives the specified user a cookie"
}