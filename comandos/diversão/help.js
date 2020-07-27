const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
  const ajuda = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Lista de comandos!")
    .setDescription("Reaga de acordo com o  que procura!\n\n📚 - Informações\n\n🔱 - Administrativos\n\n🎊 - Diversão")
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
    
  message.channel.send(ajuda).then(msg => {
    msg.react('📚').then(r => {
      msg.react('🔱').then(r => {
    msg.react('🎊').then(r => {
      })
    })
  })
    
    const infosFilter = (reaction, user) => reaction.emoji.name === '📚' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.name === '🔱' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.name === '🎊' && user.id === message.author.id;
    
    const infos = msg.createReactionCollector(infosFilter);
        const adm = msg.createReactionCollector(admFilter);
    const fun = msg.createReactionCollector(funFilter);

    infos.on('collect', r2 => {
      
      ajuda.setTitle("Comandos informativos!")
      ajuda.setDescription(bot.prefixo+"Ajuda - Mostra os meus comandos!")
      msg.edit(ajuda)
      
    })
    
    adm.on('collect', r2 => {
      
      ajuda.setTitle("Comandos de administração!")
      ajuda.setDescription(bot.prefixo+"ban - Bana um membro!\n"+bot.prefixo+"listban - Veja a lista dos usuários banidos!\n"+bot.prefixo+"unban - Desbana um membro!\n"+bot.prefixo+"anuncio - faça um anúncio em algum canal!\n"+bot.prefixo+"kick - Chute alguem para fora do server!\n"+bot.prefixo+"limpar - Limpe o chat!")
      msg.edit(ajuda)
      
    })
    
    fun.on('collect', r2 => {
      
      ajuda.setTitle("Comandos de diversão!")
      ajuda.setDescription(bot.prefixo+"say - Me faça falar algo!\n"+bot.prefixo+"kiss Beije alguem!\n"+bot.prefixo+"avatar Veja sua foto de perfil!\n"+bot.prefixo+"coinflip - gire uma moeda!")
      msg.edit(ajuda)
      
    })
  })  
} 