const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    msg.reply(`Your cuteness rating is 100`);
}

module.exports.help = {
    name: "howcute",
    description: "Rates you on a scale of 100 - 100"
}