const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    client.guilds.forEach(element => {
        element.channels.forEach(channel => {
            
        })
    });
}

module.exports.help = {
    name: "happybirthday",
    description: "Happy Birthday!"
}