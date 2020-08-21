const Discord = require("discord.js")
exports.run = async (bot, message, args) => {
  //try{
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp(`${message.createdAt}`)
  .setFooter (`Comando solicitado por ${message.member.displayName}`)
  .setDescription("Em um piscar de olhos... \n\nAs informações teleportaram!")
  .setThumbnail("https://pa1.narvii.com/7442/380c6504935567602d5f1078db3d5364fae61ac4r1-512-288_hq.gif")
  .addField("Formulário pra staff", "https://docs.google.com/forms/d/e/1FAIpQLScB6OrayIvaXFyhYr4hQpUshay0OUPgXc6ZCYOIh1uOThKG5g/viewform", true)  
  .addField("<:shiroloved:713802438146261022>", "Entre para a equipe!", true)
  
  message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "staff",
}

/*
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  //try{
  chat.send({embed:
 {
    "description": "As informações estão fluindo...",
    "color": 14581498,
    "timestamp": message.createdAt,

      "thumbnail": {
        "url": "https://www.dropbox.com/s/vpagwhyp4ux4iiz/ezgif.com-resize.gif?dl=1"
      },


    "fields": [
      {
        "name": "Formulário pra staff",
        "value": "https://docs.google.com/forms/d/e/1FAIpQLScB6OrayIvaXFyhYr4hQpUshay0OUPgXc6ZCYOIh1uOThKG5g/viewform"
      },
      {
        "name": "<:shiroloved:713802438146261022>",
        "value": "Entre para a equipe!",
        "inline": true
      },
    ]
  }
})*/
    
  /*}catch(erro){
    console.error(erro);
  }*/
