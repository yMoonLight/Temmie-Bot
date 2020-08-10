const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

      let user = message.mentions.users.first() || message.author
      const embed = new Discord.MessageEmbed()
            .setTitle(`🖼 ${user.username}`)
            .setDescription(`**Clique [aqui](${user.displayAvatarURL({dynamic: "gif", format: "png"})}) para baixar a imagem!**`)
            .setImage(user.displayAvatarURL({dynamic: "gif", format: "png", size: 4096}))
            .setColor('#00FFFF')
    message.channel.send({embed})

}