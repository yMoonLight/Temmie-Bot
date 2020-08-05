const Discord = require("discord.js");
const jimp = require("jimp");
module.exports.run = async (client, message, args) =>{

let pessoa = client.users.cache.get(args[0]) || message.mentions.users.first()
const embederro = new Discord.MessageEmbed()
            .setTitle(`Esticar`)
            .setDescription(`deixa a foto do amiguinho esticada de um nivel de 1 a 5!`)           
            .addField(`🤔 Exemplo`, `t!esticar @pessoa 5`)
            .addField(`✋ Permissão`, `**nenhuma**`)
            .setColor('#FF0000') 

if(!pessoa) return message.reply(embederro)

let foto = pessoa.avatarURL({ format: 'jpeg'})

let imagecard = await jimp.read(foto)

imagecard.quality(100);
if(args[1] === "5") {
imagecard.resize(3720, 410);
}
if(args[1] === "4") {
    imagecard.resize(3000, 430)
}
if(args[1] === "3") {
    imagecard.resize(2800, 460)
}
if(args[1] === "2") {
    imagecard.resize(2600, 510)
}
if(args[1] === "1") {
    imagecard.resize(2300, 610)
}
if(!args[1]) return message.reply("qual o nivel ? coloque um numero de 1 a 5!")
if(args[1] > 5) return message.reply("eu não consigo esticar + do que 5 🤔")
if(args[1] < 1) return message.reply("pra que 0? Me diga,pra que 0?")
if(isNaN(args[1])) return message.reply('eu não sei oque é isso,só sei que não é um numero valido 🤔')
imagecard.write('Esticar.png')
message.channel.send(``, { files: ["Esticar.png"] })
}