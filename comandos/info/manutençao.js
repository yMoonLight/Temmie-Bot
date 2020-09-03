
const Discord  = require("discord.js");

module.exports.run = async (client, message, args, db) => { // handler

 if(message.member.permissions.has("SEND_MESSAGES")) {
       let erro = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('<:Temmie1:748652346401226812> | Manutenção: ')
        .addField('<:dev:747922642065162271> | Manutenção para:', '`Mudar de host.`', false)
        .addField('<a:a_:747921925824708679>  | Manutenção agendada para:', '`13:00`', false)
        .addField('<a:gato:747921922792357957> | Horario de volta:', '`Sem previsão!`', false)
        .setFooter(`Temmie © Todos os Direitos Reservados`)  
        
        return message.channel.send(erro)  
      } 
}