const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    msg.channel.send('hee hee haw haw');
}

module.exports.help = {
    name: "h",
    description: "hee hee haw haw"
}