const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.delete()
    try {
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
  
    } else if(args[0]) {
        user = client.users.cache.get(args[0]);

    }
    let botmessage = args.slice(1).join(' ')

    if (args[0] == null) {return message.channel.send(`${message.author}, **Mencione um usuário !**`)}


    if (args[1] == null) {return message.channel.send(`${message.author}, Diga algo !`)}
    await message.channel.createWebhook(user.username, { avatar: user.displayAvatarURL() }).then(w => {
      w.send(botmessage);
    })

    await w.delete();

    } catch (err) {
    }
}