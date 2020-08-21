const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão pra isso!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Você deve mencionar alguém para dar warn.');
  if (reason.length < 1) return message.reply('Você precisa dar uma razão para um warn.');

  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Warn")
  .setColor("RANDOM")
  .setTimestamp(`${message.createdAt}`)
  .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))
  .setDescription(`Você levou warn no server \`${message.guild.name}\``)
  .addField("Avisado por", message.author.tag)
  .addField("Motivo", reason);

  message.channel.send(dmsEmbed);

  message.delete();
  message.channel.send('<@'+user.id+'>')
  message.guild.channels.cache.get('713544537200394250').send(dmsEmbed)

}

exports.help = {
  name: 'warn'
};