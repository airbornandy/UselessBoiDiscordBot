const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    msg.delete();
    msg.channel.send(":regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k:");
}

module.exports.help = {
    name: "sksk",
    description: "Uses emojis to spell \"sksksksksksk\""
}