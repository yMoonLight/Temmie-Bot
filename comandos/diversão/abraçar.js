const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_159.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_142.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_151.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_180.gif',
  'https://loritta.website/assets/img/actions/hug/male_x_female/gif_121.gif',
  'https://loritta.website/assets/img/actions/hug/male_x_male/gif_128.gif',
  'https://loritta.website/assets/img/actions/hug/generic/gif_174.gif',
  'https://loritta.website/assets/img/actions/hug/male_x_female/gif_122.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_153.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_152.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_134.gif',  
  

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        
        .setColor('#000000')
        .setDescription(`${message.author} acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
      .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
      
  await message.channel.send(embed);
}