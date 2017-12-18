const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const prefix = process.env.BOT_PREFIX;
bot.on('ready', ()=>{
    console.log("I'm Ready!" + bot.user.username );
    
});
bot.on("message", async message => {
    
    if(message.author.bot){return;}
    if(message.channel.type === "dm"){return;}
    let messagearray = message.content.split(" ");
    let command = messagearray[0];
    let args = messagearray.slice(1);
    
    if(!command.startsWith(prefix)){return;}
    if(command == prefix+'myinfo'){
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("I think I know you...")
            .setColor("#dd0014")
            .addField("Full Username :: " , message.author.username + " " + message.author.discriminator)
            .addField("ID :: ", message.author.id)
            .addField("Created at :: " ,message.author.createdAt);
            ;
        message.channel.send(embed);
        }
    if(command == prefix+'sayhello'){
        message.channel.send("YO :thumbsup:");
    }
    if(command == prefix+'help'){
        let embed = new Discord.RichEmbed()
        .setAuthor(bot.username)
        .addField("Command :: myinfo :: ", "Have your Info...")
        .addField("Command :: sayhello :: ", "Say a fancy hello to our bot")
        .addField("Command :: help :: ", "Happy to help")
        ;
        message.channel.send(embed);
    }
});
bot.login(process.env.BOT_TOKEN);
