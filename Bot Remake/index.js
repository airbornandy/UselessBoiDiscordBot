const Discord = require("discord.js");
const botConfig = require("./config.json");
const client = new Discord.Client();
let prefix = botConfig.prefix;
const fs = require("fs")
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if (jsfile <= 0) {
        console.log("Commands not found");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded`);
        client.commands.set(props.help.name, props);
    });
});

client.once('ready', () => {
    console.log(`${client.user.username} is online`);
});

client.on('message', async msg => {
    if (msg.author.bot) return;

    if (!msg.content.startsWith(prefix)) return;

    let messageArray = msg.content.split(/ +/);
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = client.commands.get(cmd.slice(prefix.length));
    if (commandFile) commandFile.run(client, msg, args);
    if (msg.content.indexOf(prefix) !== 0) return;
})

client.login(botConfig.token);