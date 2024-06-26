const {Client, IntentsBitField, ChannelType} = require('discord.js')
require('dotenv').config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag}  is Online!`)
})

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return
    }

    if(message.content==="EpicSetup"){
        message.guild.channels.create({
            name: `EpicLog`,
            type: ChannelType.GuildText,
            reason: `Setup initiated`
        }).then( () => {
            message.reply(`Created log channel`)
            console.log(`Channel Created Succesfully`);
        }).catch(error => {
            console.error(error);
            message.reply("There was an error creating a channel, check console")
        })


    }
    
    message.reply("noted.")
    console.log(` ${message.author.username} : ${message.content}`)
})






client.login(process.env.passkey)

