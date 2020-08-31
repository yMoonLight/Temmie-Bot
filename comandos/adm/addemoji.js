const Discord  = require("discord.js");

module.exports.run = async (client, message, args, db) => { // handler

      if(message.member.permissions.has("MANAGE_EMOJIS")) {
       let erro = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('`\📛\` Comando Inválido')
        .addField('📛 | `r!addemoji`', '**Utilize para Adicionar um emoji**', false)
        .addField('📛 | `r!addemoji`', 'Necessário permissão `MANAGE_EMOJIS`', false)
        .addField('<:yestick:729090072183570442> | Como utilizar?', '`r!addemoji` `Link` `Nome`', false)
        .addField('🔖 | Ajuda?', '**Utilize `r!help`**', false)
        .setFooter(`Temmie © Todos os Direitos Reservados`, message.author.displayAvatarURL({ dynamic: true }))  
        
        return message.channel.send(erro)  
      } 

      if(!args[0]) {
        return message.channel.send(erro); // Caso o usuário não escreva o nome do emoji, daremos a embed de explicação
      }
      if(!args[1]) {
        return message.channel.send(erro); // Mesma coisa com o URL
      }
      // Caso o usuário não possua a permissão necessária, vamos aviar!

      try { // Utilizando a função 'try', literalmente traduzindo: Tentar
        message.guild.emojis.create(args[1], args[0]).then(emoji => { // Criar um emoji com as informações
          message.channel.send(`${emoji} **|** Emoji adicionado com sucesso.`); // Caso não haja erro, iremos criar 
        });
      } catch (err) { // Agora, iremos procurar um erro
        message.channel.send(erro)
      }
}