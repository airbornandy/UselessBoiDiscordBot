const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    const careUser = msg.mentions.users.first();
    msg.reply(`cares about <@${careUser.id}>`);
}

module.exports.help = {
    name: "care",
    description: "Mention a user to care for them"
}