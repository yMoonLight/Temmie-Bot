module.exports.run = async (client, message, args) => {  
message.channel.send(message.guild.iconURL({size: 2048}))
}