const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const queue = new Map();
const ytdl = require('ytdl-core');
var prefix = config.prefix;
let owners = [config.ownerID];


client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (msg.channel.type === 'dm') {
        if (msg.author.bot) return;
        client.channels.get('658766749122035724').send('DM from <@' + msg.author.id + '> containing message ' + '"' + msg.content + '"');
    }

    if (msg.content.slice(0, 1) === prefix) {
        switch (cmd) {
            case 'hailrussia':
                msg.delete();
                msg.channel.send(":red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle::red_circle::yellow_circle::yellow_circle::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::yellow_circle::yellow_circle::yellow_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle::red_circle:\n:red_circle::yellow_circle::yellow_circle::yellow_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle:\n:red_circle::red_circle::yellow_circle::red_circle::yellow_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::yellow_circle::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::yellow_circle::yellow_circle::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle::red_circle::yellow_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle:");
                break;
            case 'andioop':
                msg.delete();
                msg.channel.send(":regional_indicator_a: :regional_indicator_n: :regional_indicator_d:   :regional_indicator_i:   :regional_indicator_o: :regional_indicator_o: :regional_indicator_p:");
                break;
            case 'sksk':
                msg.delete();
                msg.channel.send(":regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k:");
                break;
            case 'benshapiro':
                msg.delete();
                msg.channel.send('Ben Shapiro TRIGGERS Liberal by SENDING them to NAZI DEATH CAMPS using pure CONSERVATIVE LOGIC and REASONING and then ANGERS SJW by GOING on a RAMPAGE literally RAPING and MURDERING every single MINORITY within a 200 MILE RADIUS then TROLLS Libtard with TRUMP DERANGEMENT SYNDROME by licking Donald Trumps MICROPENIS of all the DRIED CUM from the CONCEPTION of Barron Trump and he ANGERS democrat by FEEDING upon the FLESH of ABORTED FETUSES and the BLOOD of EVERY single LIBTARD to literally BECOME a GOD AMONG MEN which TROLLS idiot COMMIES by OPENING the seals of HELL and CAUSING the APOCALYPSE in which the DEVIL RAPES CHILDREN and TEARS OFF the heads of Liberal TODDLERS and LITERALLY setting WOMEN’s RIGHTS a THOUSAND YEARS and also Ben TRIGGERS the SOCIALISTS by RAPING the UNDEAD CORPSE of LEON TROTSKY and JOSEPH STALIN and he PISSES OFF the LEFTISTS by ESTABLISHING a NEW WORLD ORDER in which he is the SUPREME GOD EMPEROR OF ALL OF THE AMERICAS, CHINA, EUROPE, BRITAIN, TAIWAN, and THAT RANDOM ISLAND IN THE MIDDLE OF THE PACIFIC OCEAN and MURDERS all POLITICAL DISSIDENTS within the government and then he LITERALLY summons CTHULHU and have home and the DEVIL FUCK HIM IN THE ASS while he CUMS all OVER the BOTTLE of LIBERAL TEARS and then he PRANKS Chink Ugayer by IMITATING him and literally dying from the ANAL WOUNDS from Literally being FUCKED IN THE ASS by SATAN and CTHULHU and then ENRAGES the COMMIES by RAPING GOD and BECOMING the NEW ABSOLUTE RULER OF THE UNIVERSE!!!!! (LIBERALS TROLLED) (NOT CLICKBAIT) (SJWs and FEMINISTS OWNED)');
                break;
            case 'ping':
                msg.channel.send('Pong!')
                msg.delete();
                msg.channel.send(`API Latency is ${Math.round(client.ping)}ms`);
                break;
            case 'vibecheck':
                let vibe = Math.random() * 100;
                vibe = Math.max(Math.round(vibe * 10) / 10, 2.8).toFixed(1);

                console.log(msg.author.username + ' ' + vibe);
                if (vibe >= 51) {
                    msg.reply(`What a bottom. ${vibe}%`);
                } else if (vibe <= 49) {
                    msg.reply(`What a top. ${vibe}%`);
                } else if (vibe == 50) {
                    msg.reply(`What a switch. ${vibe}%`)
                }
                break;
            case 'h':
                msg.channel.send('hee hee haw haw')
                break;
            case 'wsc':
                msg.channel.send('Wanna Sprite Cranberry? https://www.sprite.com/?utm_id=260048664-124136793&utm_source=3118850&utm_medium=260048664&utm_campaign=23420548');
                break;
            case 'say':
                const sayMessage = args.join(" ");
                msg.delete().catch(O_o => {});
                msg.channel.send(sayMessage);
                break;
            case 'howgay':
                let gayness = Math.random() * 100;
                gayness = Math.max(Math.round(gayness * 10) / 10, 2.8).toFixed(1);
                msg.reply(`You are ${gayness}% Gay`);
                break;
            case 'stab':
                const stabUser = msg.mentions.users.first();
                if (stabUser) {
                    const stabMember = msg.guild.member(stabUser);
                    if (stabMember) {
                        if (stabUser.id === msg.author.id) {
                            msg.reply('Lets not do that');
                        } else {
                            msg.reply(`stabbed <@${stabUser.id}>`);
                        }
                    } else {
                        msg.channel.send('That user is not in the server.');
                    }
                } else {
                    msg.channel.send('You did not mention a user to stab');
                }
                break;
            case 'avatar':
                if (!msg.mentions.users.size) {
                    return msg.channel.send(`Your avatar: ${msg.author.displayAvatarURL}`);
                }
                const avatarList = msg.mentions.users.map(user => {
                    return `${user.username}\'s avatar: ${user.displayAvatarURL}`;
                });
                msg.channel.send(avatarList);
                break;
            case 'textuser':
                const textUser = msg.mentions.users.first();
                args.shift();
                const textMessage = args.join(" ");
                msg.delete();
                textUser.send(textMessage);
                client.channels.get('658766749122035724').send(`Message "${textMessage}" sent to <@${textUser.id}>`)
                break;
            case 'ducks':
                msg.channel.send("Duck rape is a major issue");
                msg.channel.send("Ducks have maze vaginas");
                msg.channel.send("Ducks have corkscrew dicks");
                msg.channel.send('Ducks eat eachother when they\'re bored');
                msg.channel.send('Ask <@557226379456806916> for more duck facts');
                break;

            case 'cookie':
                const cookieUser = msg.mentions.users.first();

                if (cookieUser === msg.author) {
                    msg.reply("Don't hog all the cookies for yourself");
                    return;
                }

                msg.reply('Given a :cookie: to ' + cookieUser);

                break;
            case 'howcute':
                msg.reply(`Your cuteness rating is 100`);
                break;
            case 'raw':
                msg.reply('Don\'t take it raw, always wrap it before you tap it')
                break;
            case 'toeless':
                const noToeSock = new Discord.RichEmbed()
                    .setTitle('Toeless Socks')
                    .attachFiles(['./notoesock.jpg'])
                    .setImage('attachment://notoesock.jpg');

                msg.channel.send(noToeSock);
                break;
            case '':

            case 'help':
                const helpEmbed = new Discord.RichEmbed()
                    .setColor('#fce300')
                    .setTitle('Useles Boi Commands')
                    .setAuthor('Useless Boi', 'https://cdn.discordapp.com/avatars/629466801289429012/83da73fef809810b925d653d9d5fd6d4.png?size=2048')
                    .addField('hailrussia', 'Sends a communist flag made with emojis')
                    .addField('andioop', 'Uses emojis to spell "and i oop"')
                    .addField('sksk', 'Uses emojis to spell "sksksksksksksk"')
                    .addField('benshapiro', 'Try it?')
                    .addField('vibecheck', 'Checks your vibes')
                    .addField('h', 'Replys with "hee hee haw haw"')
                    .addField('wsc', 'Wanna Sprite Cranberry?')
                    .addField('say {message}', 'Says the specified message')
                    .addField('howgay', 'Rates how gay you are')
                    .addField('stab {user}', 'Tag a user to stab them')
                    .addField('avatar [user]', 'Tag a member to get a link to their profile picture, if a user is not tagged the bot with send your profile picture')
                    .addField('textuser {user} {message}', 'Sends the specified member a dm with the specified message')
                    .addField('ducks', 'Replys with random duck facts')
                    .addField('play {link}', 'Plays the audio from a youtube video')
                    .addField('skip', 'Skips current playing audio')
                    .addField('stop', 'Stops all audio and deletes queue')
                    .addField('cookie {user}', 'Gives the specified user a cookie')
                    .addField('howcute', 'Rates how cute you are on a scale of 100-100')
                    .addField('raw', 'Some good advice')
                    .addField('toeless', 'Sends a photo of toeless socks')
                    // .addField('osu', 'Plays the osu opening sound in your current voice channel')

                    .setTimestamp()
                    .setFooter('More commands coming soon', 'https://cdn.discordapp.com/avatars/629466801289429012/83da73fef809810b925d653d9d5fd6d4.png?size=2048');

                msg.channel.send(helpEmbed);
                break;
            case '':
                msg.reply('Please enter a valid command');
                break;
        }
    }
});

client.on('message', async message => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const serverQueue = queue.get(message.guild.id);

    if (message.content.startsWith(`${prefix}play`)) {
        execute(message, serverQueue);
        return;
    } else if (message.content.startsWith(`${prefix}skip`)) {
        skip(message, serverQueue);
        return;
    } else if (message.content.startsWith(`${prefix}stop`)) {
        stop(message, serverQueue);
        return;
    }
});

async function execute(message, serverQueue) {
    const args = message.content.split(' ');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
        return message.channel.send('I need the permissions to join and speak in your voice channel!');
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url,
        id: songInfo.video_id,
    };

    if (!serverQueue) {
        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
        };

        queue.set(message.guild.id, queueContruct);

        queueContruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueContruct.connection = connection;
            play(message.guild, queueContruct.songs[0]);
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        const songAddedEmbed = new Discord.RichEmbed()
            .setColor('#fce300')
            .setTitle(`Added ${song.title} to queue!`)
            .setURL(song.url)
            .setAuthor('Useless Boi', 'https://cdn.discordapp.com/avatars/629466801289429012/83da73fef809810b925d653d9d5fd6d4.png?size=2048')
            .setThumbnail(song.thumbnail);


        return message.channel.send(songAddedEmbed);
    }

}

function skip(message, serverQueue) {
    if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
    if (!serverQueue) return message.channel.send('There is no song that I could skip!');
    serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
    if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave()
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Music ended!');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => {
            console.error(error);
        });
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

function queueCommand(message, serverQueue) {

}

client.on('message', msg => {
    if (msg.author.bot) return;

    let message = msg.content.split(' ');

    message.forEach(word => {
        if (word.toLowerCase() === 'ugly') {
            msg.reply('Shush you beautiful hooman, no one is ugly');
        }

        if (word.toLowerCase() === 'cute') {
            msg.reply('Oh cute? why yes you are');
        }

        if (word.toLowerCase() === '私は醜いです') {
            msg.reply('shush beautiful hooman');
        }

        /* if(word.toLowerCase() === 'im') {
            if (word.toLowerCase() === 'ugly') {
                msg.reply('Shush you beautiful hooman, you are beautiful');
            } else {
                return;
            }
        } else if(word.toLowerCase() === "i'm") {
            if (word.toLowerCase() === 'ugly') {
                msg.reply('Shush you beautiful hooman, you are beautiful');
            } else {
                return;
            }
        } else {
            return;
        } */
    });
});

client.login(config.token);