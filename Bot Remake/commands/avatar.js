const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    if (!msg.mentions.users.size) {
        return msg.channel.send(`Your avatar: ${msg.author.displayAvatarURL}`);
    }
    const avatarList = msg.mentions.users.map(user => {
        return `${user.username}\'s avatar: ${user.displayAvatarURL}`;
    });
    msg.channel.send(avatarList);
}

module.exports.help = {
    name: "avatar",
    description: "Tag a member to get a link to their profile picture, if a user is not tagged the bot with send your profile picture"
}