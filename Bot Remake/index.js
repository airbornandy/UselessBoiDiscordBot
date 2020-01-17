const Discord = require("discord.js");
const botConfig = require("./config.json");
const client = new Discord.Client({disableEveryone: true});
let prefix = config.prefix;

fs.readdir(".commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter

})

clinet.once('ready', () => {
    console.log(`${client.user.username} is online`);
});

