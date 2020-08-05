const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://gifman.net/wp-content/uploads/2019/06/casal-apaixonado-07.gif',
  'https://24.media.tumblr.com/tumblr_lry542CGy61qcjz9ao1_500.gif',
  'https://s2.glbimg.com/EyPbRHx8kw-bRp1B89wTchOBA2g=/s.glbimg.com/jo/eg/f/original/2015/05/22/tumblr_nonmekuwi11t67smgo3_500.gif',
  'https://meucarorelicario.files.wordpress.com/2015/07/6cf0939e0027759052617c46.gif',
  'https://i.pinimg.com/originals/fc/16/9f/fc169f9edc57acd4ce79358cea587141.gif',
  'https://gifman.net/wp-content/uploads/2019/06/casal-apaixonado-05.gif',
  'https://gifs.eco.br/wp-content/uploads/2018/01/Gifs-de-Abra%C3%A7o-Baixar.gif',
  'https://i.pinimg.com/originals/6b/ce/12/6bce1281f126ff381d412421a6457473.gif',
  'https://25.media.tumblr.com/tumblr_maf0uwybuP1qzd219o1_500.gif',
  'https://i.pinimg.com/originals/a8/f2/f6/a8f2f612ab90fec87a14e4266d04b812.gif',
  'https://i.pinimg.com/originals/59/cb/9b/59cb9ba25443a786e082fb55cfc67ef9.gif',
  'https://i.pinimg.com/originals/22/f5/33/22f5333a63315dcb874f72e137fa0d92.gif',
  'https://media1.tenor.com/images/6865dc906133527ee83ed83b4f4bc980/tenor.gif?itemid=3296524'
  
  
  

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