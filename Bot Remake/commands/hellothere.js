const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    msg.channel.send(`General <@${msg.author.id}>, You are a bold one`);
}

module.exports.help = {
    name: "hellothere",
    description: "General Kenobi"
}