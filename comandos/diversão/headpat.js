const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/headpat/generic/gif_5.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_12.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_9.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_6.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_2.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_8.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_11.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_10.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_0.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_4.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_13.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fazer cafuné!');
}
/*
message.channel.send(`${message.author.username} **acaba de socar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Acariciar')
        .setColor('#000000')
        .setDescription(`${message.author} **Acaba de fazer cafuné em** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Clique em 🔁 para retribuir!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}