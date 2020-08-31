const Discord  = require("discord.js");

module.exports.run = async (client, message, args, db) => { // handler

 if(message.member.permissions.has("SEND_MESSAGES")) {
       let erro = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('<:Temmie1:748652346401226812> | Minhas informações: ')
        .addField('<:dev:747922642065162271> | Meu criador:', '`yMoonLight`', false)
        .addField('<a:a_:747921925824708679>  | Meu prefixo:', '`t`', false)
        .addField('<a:gato:747921922792357957> | Tenho no total:', '`47` **comandos**', false)
        .addField('<a:j_:747921923476029450> | Ajuda?', '**Utilize `thelp`**', false)
        .addField('<a:dance:748180889128796221> | Fui criada a:', '`2 meses e 9 dias`')
        .setFooter(`Temmie © Todos os Direitos Reservados`)  
        
        return message.channel.send(erro)  
      } 
}