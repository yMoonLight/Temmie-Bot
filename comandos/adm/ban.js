const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let ban = new Discord.MessageEmbed()
    .setColor("RED")
     .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({size: 32}))
      .setTimestamp()
         .setTitle("Comando de ban")
      .addField("Descrição:", `Bane um membro`, true)
     .addField("Uso:", `t!ban [usuário] [motivo]`, true)
    .addField("Exemplo:", `t!ban @yMoonLight spam`)
  
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Você não tem permissão para fazer isso!");
  
  let member = message.mentions.members.first();
    if(!member) return message.channel.send(ban)
      if(!member.bannable) return message.channel.send("Eu não consigo banir este usuário")
    if(member.user.id === "384799694569734145") return message.channel.send("Eu não consigo banir o dono!")
      if(member.user.id === message.author.id) return message.channel.send("Você não pode banir a si mesmo")
  
  let motivo = args.slice(1).join(" ");
    if(!motivo) {
      return message.channel.send("Não especificou o motivo!")
    } else {
      var mtv = motivo
    }
  
  await member.ban(motivo).catch(error => message.channel.send("Eu não consegui executar o comando por que "+error))

  let banido = new Discord.MessageEmbed()
    .setColor("GREEN")
      .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({size: 32}))
        .setTitle(`Ban | ${member.user.tag}`)
          .addField("Usuário", member, true)
        .addField("Moderador", message.author, true)
      .addField("Motivo", mtv)
    .setTimestamp()
  
  message.channel.send(banido)
  message.guild.channels.cache.get("id do canal de punições").send(banido)



}