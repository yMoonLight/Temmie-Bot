const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/kiss/both/gif_283.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_321.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_379.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_333.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_306.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_337.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_350.gif',
  'https://loritta.website/assets/img/actions/kiss/both/gif_287.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_299.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}