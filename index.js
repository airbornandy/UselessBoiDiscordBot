const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const rpup = require('random-puppy');
var prefix = config.prefix;
// const queue = new Map();
// const ytdl = require('ytdl-core');
const status = require('./status.json');
const vines = require("./vines.json");

let oracleResponses = ['As I see it, yes.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don’t count on it.', 'It is certain.', 'It is decidedly so.', 'Most likely.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Outlook good.', 'Reply hazy, try again.', 'Signs point to yes.', 'Very doubtful.', 'Without a doubt.', 'Yes.', 'Yes – definitely.', 'You may rely on it.']

let raining = false;
let reactions = false;
let rainChannel;

client.once('ready', () => {
    console.log('Ready!');
    client.user.setStatus('available')
    client.user.setPresence(status);
});

client.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (msg.author.bot) return;

    if (msg.channel.type === 'dm') {
        if (msg.author.bot) return;
        client.channels.cache.get('776231048815443979').send('DM from <@' + msg.author.id + '> containing message ' + '"' + msg.content + '"');
    }

    if (msg.content.slice(0, 1) === prefix) {
        switch (cmd) {
            case 'guilds':
                client.guilds.cache.forEach(guild => {
                    msg.channel.send(guild.name);
                });
                break;
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
            case 'vibecheck':
                let vibe = Math.random() * 100;
                vibe = Math.max(Math.round(vibe * 10) / 10, 2.8).toFixed(1);

                if (!msg.mentions.users.size) {
                    if (vibe >= 51) {
                        msg.reply(`What a bottom. ${vibe}%`);
                    } else if (vibe <= 49) {
                        msg.reply(`What a top. ${vibe}%`);
                    } else if (vibe == 50) {
                        msg.reply(`What a switch. ${vibe}%`)
                    }
                } else {
                    let vibeUser = msg.mentions.users.first();
                    if (msg.author === vibeUser) return msg.reply("You do not have mention yourself to vibecheck youself");
                    if (vibe >= 51) {
                        msg.reply(`<@${vibeUser.id}> is a bottom. ${vibe}%`);
                    } else if (vibe <= 49) {
                        msg.reply(`<@${vibeUser.id}> is a top. ${vibe}%`);
                    } else if (vibe == 50) {
                        msg.reply(`<@${vibeUser.id}> is a switch. ${vibe}%`)
                    }
                }
                break;
            case 'h':
                msg.channel.send('hee hee haw haw')
                break;
            case 'say':
                const sayMessage = args.join(" ");
                msg.delete().catch(O_o => { });
                msg.channel.send(sayMessage);
                break;
            case 'howgay':
                let gayness = Math.random() * 100;
                gayness = Math.max(Math.round(gayness * 10) / 10, 2.8).toFixed(1);

                if (!msg.mentions.users.size) {
                    msg.reply(`You are ${gayness}% gay`)
                } else {
                    let gayUser = msg.mentions.users.first();
                    if (msg.author === gayUser) return msg.reply("You do not have mention yourself to vibecheck youself");

                    if (gayUser.id === `398332620510855168`) {
                        gayness = 100
                    }

                    msg.reply(`<@${gayUser.id}> is ${gayness}% gay`)
                }
                break;
            case 'clowncheck':
                let clowness = Math.random() * 100;
                clowness = Math.max(Math.round(clowness * 10) / 10, 2.8).toFixed(1);

                if (!msg.mentions.users.size) {
                    msg.reply(`You are ${clowness}% clown`)
                } else {
                    let clownUser = msg.mentions.users.first();
                    if (msg.author === clownUser) return msg.reply("You do not have mention yourself to clowncheck youself");

                    if (clownUser.id === `463498581580578826`) {
                        clowness = 100
                    }

                    msg.reply(`<@${clownUser.id}> is ${clowness}% clown`)
                }
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
                    return msg.channel.send(`Your avatar: ${msg.author.displayAvatarURL()}`);
                }
                const avatarList = msg.mentions.users.map(user => {
                    return `${user.username}\'s avatar: ${user.displayAvatarURL()}`;
                });
                msg.channel.send(avatarList);
                break;
            case 'textuser':
                const textUser = msg.mentions.users.first();
                args.shift();
                const textMessage = args.join(" ");
                msg.delete();
                textUser.send(textMessage);
                msg.reply(`Message "${textMessage}" sent to <@${textUser.id}>`)
                break;
            case 'ducks':
                msg.channel.send("Duck rape is a major issue");
                msg.channel.send("Ducks have maze vaginas");
                msg.channel.send("Ducks have corkscrew dicks");
                msg.channel.send('Ducks eat eachother when they \'re bored');
                msg.channel.send('Duck Murder!!!!!!');
                break;
            case 'cookie':
                const cookieUser = msg.mentions.users.first();

                if (cookieUser === msg.author) {
                    msg.reply("Don't hog all the cookies for yourself");
                    return;
                }

                msg.reply('Given a :cookie: to ' + '<@' + cookieUser.id + '>');

                break;
            case 'howcute':
                if (!msg.mentions.users.size) {
                    msg.reply(`Your cutness rating is 100`)
                } else {
                    let cuteUser = msg.mentions.users.first();
                    if (msg.author === cuteUser) return msg.reply("You do not have mention yourself to howcute youself");

                    msg.reply(`<@${cuteUser.id}>'s cuteness rating is 100`)
                }
                break;
            case 'raw':
                msg.reply('Don\'t take it raw, always wrap it before you tap it')
                break;
            case 'toeless':
                const noToeSock = new Discord.MessageEmbed()
                    .setTitle('Toeless Socks')
                    .attachFiles(['./notoesock.jpg'])
                    .setImage('attachment://notoesock.jpg');

                msg.channel.send(noToeSock);
                break;
            case 'love':
                const loveUser = msg.mentions.users.first();
                msg.channel.send(`Fun Fact: <@${msg.author.id}> loves <@${loveUser.id}>`);
                break;
            case 'hellothere':
                msg.channel.send(`General <@${msg.author.id}>, You are a bold one`);
                break;
            case 'care':
                const careUser = msg.mentions.users.first();
                msg.reply(`cares about <@${careUser.id}>`);
                break;
            case 'toggledownfall':
                if (raining === true) {
                    raining = false;
                    msg.channel.send("Rain Disabled")
                } else {
                    raining = true;
                    rainChannel = msg.channel.id;
                    msg.channel.send("Rain Enabled")
                }
                break;
            case 'electricchair':
                msg.channel.send("Roberto Nevillis is an evil man and has caused academic stress and depression in many people. ELECTRIC CHAIR!!!!");
                break;
            case 'bitethumb':
                const biteThumbUser = msg.mentions.users.first();
                msg.reply(`bites their thumb at <@${biteThumbUser.id}>`);
                break;
            case 'puretest':
                msg.channel.send('http://ricepuritytest.com/');
                break;
            case 'mario':
                msg.channel.send(":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::red_square::red_square::red_square::red_square::red_square::red_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::white_large_square::white_large_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::white_large_square::white_large_square::brown_square::brown_square::brown_square::orange_square::orange_square::orange_square::black_large_square::orange_square::white_large_square::white_large_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::white_large_square::brown_square::orange_square::brown_square::orange_square::orange_square::orange_square::orange_square::black_large_square::orange_square::orange_square::orange_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::white_large_square::brown_square::orange_square::brown_square::orange_square::orange_square::orange_square::orange_square::orange_square::black_large_square::orange_square::orange_square::orange_square::white_large_square:\n:white_large_square::white_large_square::white_large_square::brown_square::brown_square::orange_square::orange_square::orange_square::orange_square::orange_square::black_large_square::black_large_square::black_large_square::black_large_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::orange_square::orange_square::orange_square::orange_square::orange_square::orange_square::orange_square::orange_square::white_large_square::white_large_square::white_large_square:");
                msg.channel.send(":white_large_square::white_large_square::white_large_square::white_large_square::red_square::red_square::blue_square::red_square::red_square::red_square::blue_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::white_large_square::red_square::red_square::red_square::blue_square::red_square::red_square::blue_square::red_square::red_square::red_square::white_large_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::red_square::red_square::red_square::red_square::blue_square::blue_square::blue_square::blue_square::red_square::red_square::red_square::red_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::orange_square::orange_square::red_square::blue_square::yellow_square::blue_square::blue_square::yellow_square::blue_square::red_square::orange_square::orange_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::orange_square::orange_square::orange_square::blue_square::blue_square::blue_square::blue_square::blue_square::blue_square::orange_square::orange_square::orange_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::orange_square::orange_square::blue_square::blue_square::blue_square::blue_square::blue_square::blue_square::blue_square::blue_square::orange_square::orange_square::white_large_square::white_large_square:");
                msg.channel.send(":white_large_square::white_large_square::white_large_square::white_large_square::blue_square::blue_square::blue_square::white_large_square::white_large_square::blue_square::blue_square::blue_square::white_large_square::white_large_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::white_large_square::brown_square::brown_square::brown_square::brown_square::white_large_square::white_large_square::brown_square::brown_square::brown_square::brown_square::white_large_square::white_large_square::white_large_square:\n:white_large_square::white_large_square::brown_square::brown_square::brown_square::brown_square::brown_square::white_large_square::white_large_square::brown_square::brown_square::brown_square::brown_square::brown_square::white_large_square::white_large_square:");
                break;
            case 'bucket':
                let bucketImg = Math.floor(Math.random() * 19) + 1;
                const bucketImgEmbed = new Discord.MessageEmbed()
                    .setTitle('Random Bucket')
                    .attachFiles([`./buckets/bucket${bucketImg}.jpg`])
                    .setImage(`attachment://bucket${bucketImg}.jpg`);
                console.log(bucketImg);
                msg.channel.send(bucketImgEmbed).then(b => {
                    const bucketemoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'bucket');
                    b.react(bucketemoji);
                });
                break;
            case 'egg':
                msg.channel.send('<@493290637785825280>').then(m => {
                    m.react('🥚');
                })
                break;
            case 'coinflip':
                if (!args[0]) {
                    let coinflip = Math.random() * 6;
                    // coinflip = Math.max(Math.round(coinflip * 10) / 10, 2.8).toFixed(3);

                    if (coinflip <= 2.999) {
                        msg.reply("HEADS!")
                    } else if (coinflip >= 3.001) {
                        msg.reply("TAILS!")
                    } else if (coinflip === 3.000) {
                        msg.reply("You won't believe this. It landed on it's side.")
                    }
                    console.log(coinflip);
                } else {
                    let heads = 0;
                    let tails = 0;
                    let side = 0;

                    for (let i = 0; i < args[0]; i++) {
                        let coinflip = Math.random() * 6;

                        if (coinflip <= 2.999) {
                            heads += 1;
                        } else if (coinflip >= 3.001) {
                            tails += 1;
                        } else if (coinflip === 3.000) {
                            side += 1;
                        }
                    }
                    msg.reply(`The coin landed on heads ${heads} times, tails ${tails} times, and it landed on its side ${side} times.`)
                }
                break;
            case 'oracle':
                let oracleNumber = Math.floor(Math.random() * 20);
                msg.reply(oracleResponses[oracleNumber]);
                break;
            case 'covidtest':
                let covid = Math.random() * 100;
                covid = Math.max(Math.round(covid * 10) / 10, 2.8).toFixed(1);

                if (!msg.mentions.users.size) {
                    msg.reply(`${covid}% chance of covid`);
                } else {
                    let covidUser = msg.mentions.users.first();
                    if (msg.author === covidUser) return msg.reply("You do not have mention yourself to vibecheck youself");
                    msg.reply(`<@${covidUser.id}> has a ${covid}% chance of covid`);
                }
                break;
            case 'frog':
                rpup('frogs')
                    .then(url => {
                        const frog = new Discord.MessageEmbed()
                            .setTitle('Frog')
                            .setImage(url);

                        msg.channel.send(frog);
                    });
                break;
            case 'subreddit':
                rpup(args[0])
                    .then(url => {
                        const image = new Discord.MessageEmbed()
                            .setTitle(`Random image from r/${args[0]}`)
                            .setImage(url);
                        
                        msg.channel.send(image);
                    });
                break;
            case 'vine':
                let vineNumber = Math.floor(Math.random() * vines.vines.length);
                msg.reply(vines.vines[vineNumber]);
                break;
            case 'help':
                const miscHelp = new Discord.MessageEmbed()
                    .setColor('#fce300')
                    .setTitle(`${client.user.username} Misc Commands`)
                    .setAuthor(`${client.user.username}`, `${client.user.avatarURL()}`)
                    .setDescription(`Current Prefix: ${prefix}`)

                    .addField('hailrussia', 'Sends a communist flag made with emojis')
                    .addField('andioop', 'Uses emojis to spell "and i oop"')
                    .addField('sksk', 'Uses emojis to spell "sksksksksksksk"')
                    .addField('benshapiro', 'Try it?')
                    .addField('vibecheck', 'Checks your vibes')
                    .addField('clowncheck', 'Clown Check')
                    .addField('h', 'Replys with "hee hee haw haw"')
                    .addField('say {message}', 'Says the specified message')
                    .addField('ducks', 'Replys with random duck facts')
                    .addField('raw', 'Some good advice')
                    .addField('toeless', 'Sends a photo of toeless socks')
                    .addField('hellothere', 'General Kenobi')
                    .addField('toggledownfall', 'Toggles downfall (Yeetshire only)')
                    .addField('electricchair', 'Kill Roberto Nevillis')
                    .addField('puretest', 'Sends a link for the rice purity test')
                    .addField('bucket', 'Sends a random bucket image')
                    .addField('egg', 'Pings Aeon')
                    .addField('coinflip [number of flips]', 'Flips a coin the specified amount of times. Number is optional')
                    .addField('oracle [question]', 'Ask The Oracle A Question')
                    .addField('frog', 'Random image from r/frogs')
                    .addField('subreddit {subreddit}', 'Pulls a random image from the specified subreddit')

                    .setTimestamp()
                    .setFooter('More commands coming soon', `${client.user.avatarURL()}`);

                // const musicHelp = new Discord.MessageEmbed()
                //     .setColor('#fce300')
                //     .setTitle(`${client.user.username} Music Commands`)
                //     .setAuthor(`${client.user.username}`, `${client.user.avatarURL()}`)
                //     .setDescription(`Current Prefix: ${prefix}`)

                //     .addField('play {link}', 'Plays the audio from a youtube video')
                //     .addField('skip', 'Skips current playing audio')
                //     .addField('stop', 'Stops all audio and deletes queue')

                //     .setTimestamp()
                //     .setFooter('More commands coming soon', `${client.user.avatarURL()}`);

                const userMentionsHelp = new Discord.MessageEmbed()
                    .setColor('#fce300')
                    .setTitle(`${client.user.username} User Mention Commands`)
                    .setAuthor(`${client.user.username}`, `${client.user.avatarURL()}`)
                    .setDescription(`Current Prefix: ${prefix}`)

                    .addField('care {user)', 'Mention a user to care about them')
                    .addField('love {user}', 'Mention a user to love them')
                    .addField('cookie {user}', 'Gives the specified user a cookie')
                    .addField('avatar {user}', 'Tag a member to get a link to their profile picture, if a user is not tagged the bot with send your profile picture')
                    .addField('howgay {user)', 'Rates how gay you are')
                    .addField('stab {user}', 'Tag a user to stab them')
                    .addField('textuser {user} {message}', 'Sends the specified member a dm with the specified message')
                    .addField('bitethumb {user}', 'Bite your thumb at the mentioned user')
                    .addField('howcute {user}', 'Rates how cute you are on a scale of 100-100')
                    .addField('covidtest {user}', 'Covid-19 test')

                    .setTimestamp()
                    .setFooter('More commands coming soon', `${client.user.avatarURL()}`);

                msg.channel.send(miscHelp);
                // msg.channel.send(musicHelp);
                msg.channel.send(userMentionsHelp);
                break;
        }
    }

    if (raining === true) {
        if (msg.channel.id === rainChannel) {
            msg.channel.send(":droplet::droplet::droplet::droplet:\n  :droplet::droplet:　:droplet:\n    :droplet:　:droplet::droplet:\n      :droplet:　:droplet::droplet:")
        } else return;
    }

    if (msg.channel.id === '770065026609709086') {
        if (msg.content != 'ooga') {
            if (msg.content != 'booga') {
                if (msg.content != 'ooga booga') {
                    msg.delete();
                } 
            }
        }
    }
});


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
    });
});

client.on('message', msg => {
    if (msg.channel.type !== 'dm') {
        if (msg.guild.id === '501556469888581632') {
            if (msg.content === "|reacttoggle") {
                if (reactions === true) {
                    reactions = false;
                    msg.channel.send("Reactions Disabled");
                } else {
                    reactions = true;
                    msg.channel.send("Reactions Enabled");
                }
            }

            if (reactions) {
                const bucketemoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'bucket');
                msg.react('🗄️').then(() => msg.react(bucketemoji));
            } else return;
        }
    }
});

client.login(config.token);