const Discord = require("discord.js");
const client = new Discord.Client

module.exports.run = async (bot, message, args) => {
    let boticon = client.user.displayAvatarURL
    let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("0ED4DA")
        .setThumbnail(boticon)
        .addField("Bot Name", client.user.username)
        .addField("Bot Create Date", bot.user.createdAt)
        .addField("Servers", bot.guilds.size)
    
    
}

module.exports.help = {
    name: "botinfo",
    description: "Shows the bot's info"
}