const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    msg.delete();
    msg.channel.send(":regional_indicator_a: :regional_indicator_n: :regional_indicator_d:   :regional_indicator_i:   :regional_indicator_o: :regional_indicator_o: :regional_indicator_p:");
}

module.exports.help = {
    name: "andioop",
    description: "Uses emojis to spell \"and i oop\""
}