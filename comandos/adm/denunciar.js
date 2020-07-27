const Discord = require('discord.js');

module.exports.run = (bot, message, args, arg_txt, chat) => {

            message.channel.send("Qual a sua denúncia?").then(msg2 => {
              let titulo = message.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
                .on('collect', t => {
                  let denuncia = t.content
                  
                  
            message.channel.send("Qual o motivo dela?").then(msg3 => {
              let descrição = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', d => {
                  let mtv = d.content

    let embed = new Discord.MessageEmbed()
        .setTitle(":x: | Nova denúncia enviada! ")
        .setColor("#8B0000")
        .setDescription("`Nick do autor`: " + `**${message.author.tag}**` + "\n`Nick do acusado:` " + `**${denuncia}**` + "\n`Motivo:` " + `**${mtv}**`)
        .setFooter(`Enviado por: ${message.author.tag}`, message.author.displayAvatarURL({Size: 32}))
        .setTimestamp(new Date())
        

    let canal = message.guild.channels.cache.find(canal => canal.id === "732334371339632711"); //coloque o id do canal de sugestões.
    if (!canal) return message.reply("Não existe nenhum canal para enviar a sua denúncia. :x:");

    message.delete()
    canal.send(`<@&722100429986463886>, <@&722194734621130794>, <@&722195487133925537>.`, embed).then(msg => msg.react(":thumbsup:").then(r => msg.react(":thumbsdown:")));
    message.reply(`**Sua denúncia foi enviada com sucesso!**`);
   })
  })
 })
})
}
module.exports.info = { // aqui o seu pode ser "module.exports.help", se for o caso apenas troque :D
    name: "denunciar",
    aliases: ["denúncias'"]
}
