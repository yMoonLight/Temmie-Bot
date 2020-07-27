const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`sem permissao`)
 
    let membro = message.mentions.users.first()
    if (!membro) return message.reply(`mencione um membro`)
 
    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`escreva um motivo`)
 
    let embed = new Discord.MessageEmbed()
 
    .setTitle(`WARN - ${membro.username}`)
    .setColor('RED')
    .setFooter(`Staff responsavel: ${message.author.username}`, message.author.avatarURL)
    .setDescription(motivo)
 
    membro.send(embed)
    message.channel.send(`:thinking: - Finalizei esse comando com sucesso!`)
 
}
 
exports.help = {
    name: 'warn'
}