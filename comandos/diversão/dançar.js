const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/dance/both/gif_234.gif',
  'https://loritta.website/assets/img/actions/dance/both/gif_238.gif',
  'https://loritta.website/assets/img/actions/dance/female_x_male/gif_258.gif',
  'https://loritta.website/assets/img/actions/dance/male_x_male/gif_243.gif',
  'https://loritta.website/assets/img/actions/dance/both/gif_233.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dançar!');
}
/*
message.channel.send(`${message.author.username} **acaba de socar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Dançar')
        .setColor('#000000')
        .setDescription(`<a:dance:748180889128796221> | ${message.author} **Dançou com** ${user} | <a:dance:748180889128796221>`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Clique em 🔁 para retribuir!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}