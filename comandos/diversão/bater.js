const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/K7NxqP8.gif',
  'https://cdn.discordappcom/attachments/448616643967320065/733774381318275193/AlsIdbTgxX0LC.gif',
  'https://pa1.narvii.com/6457/fba783d9bd0ad25e4e6c505b08b9ce48d6c8d1bb_hq.gif',
  'https://i.pinimg.com/originals/d9/44/08/d9440801070ef0d8c21c2d47109092e1.gif',
  'https://i.pinimg.com/originals/0e/b2/c4/0eb2c4fa2f940aa63c69d3e23809240c.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para bater!');
}
/*
message.channel.send(`${message.author.username} **acaba de socar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Bater')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de socar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Socado')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}