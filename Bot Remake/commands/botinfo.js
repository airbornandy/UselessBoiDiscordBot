const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    let boticon = client.user.displayAvatarURL
    let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("0ED4DA")
        .setThumbnail(boticon)
        .addField("Bot Name", client.user.username)
        .addField("Bot Create Date", client.user.createdAt)
        .addField("Servers", client.guilds.size)
        
    console.log(client.guilds)
    msg.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo",
    description: "Shows the bot's info"
}