const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name:"atm",
    category:"economia",
    aliases:['bal','carteira'],
    run: async (client, message, args) => {
        
        const member = message.mentions.users.first() || message.author
        
        let money = db.get(`money_${member.id}`)
        if(money === null) money = '0'
        
        let bank = db.get(`bank_${member.id}`)
        if(bank === null) bank = '0'
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Conta bancaria de ${member.username}`)
        .addField("Carteira:", money)
        .addField("Banco", bank)
        .setThumbnail(client.users.cache.get(member.id).avatarURL({ dynamic : true}))
        .setTimestamp()
        
        message.channel.send(embed)
        
    }
}