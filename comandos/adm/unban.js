const Discord = require('discord.js')
exports.run = (bot, message, args, arg_txt, chat) => {
  let member = message.mentions.members.first();
  var prefix = "seu prefixo!"
  var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var user = message.mentions.users.first()
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Você não tem permissão para banir**");
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.reply("**Não tenho permissão para banir**");
        if(!args[1]) return  message.channel.send('**Mencione o usuário ou o id dele**');
        if(args[1].length < 16) return message.reply('** Este ID não é o id de um usuário!**');
        message.guild.fetchBans().then(bans => { 
            var Found = bans.find(m => m.user.id === args[1]);
            if(!Found) return message.channel.send(`**Eu não encontrei <@${args[1]}> na ban list**`);
            message.guild.members.unban(args[1]);
            message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setTitle(`UNBAN | Desbaniu!`).addField(`id mencionado encontrado!`, `Desbanido!`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))
            message.channel.send(`<@${args[1]}> foi desbanido!`)
            message.guild.channels.cache.get('id do canal de punições').send(new Discord.MessageEmbed().setColor('GREEN').setTitle(`UNBAN | Desbaniu!`).addField(`id mencionado encontrado!`, `Desbanido!`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))
            message.guild.channels.cache.get('id do canal de punições').send(`<@${args[1]}> foi desbanido!`)
          }

        )}
      } 