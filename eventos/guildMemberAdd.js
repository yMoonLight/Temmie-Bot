const Discord = require('discord.js')
module.exports = async (bot, member) => {

  let guild = await bot.guilds.cache.get("722100308414562335");
  let channel = await bot.channels.cache.get("722470590388109312");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`:wave:Bem-vindo(a)!`)
      .setImage("https://media.giphy.com/media/GZ02om7IlFLoI/giphy.gif")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("2020© -=Subsolo=-")
      .setTimestamp();

    channel.send(embed);
  }
}