const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    }

    let balance = db.get(`account.${message.author.id}.balance`);

    if (!user) return message.channel.send("Porfavor mencione um usuario ou insira o id.");
    if (user.bot || user === client.user) return message.channel.send("Esse usuario é um bot!");
    if (user.id === message.author.id || user === message.author) return message.channel.send("<a:uncheck:748188800433258586> | Você não pode transferir TemiCoins para você mesmo!");

    let amount = parseInt(args[1]);
    if (!amount) return message.channel.send("Por favor insira os créditos que deseja transferir.");
    if (isNaN(amount)) return message.channel.send("Por favor insira um numero valido.");
    // isNaN = is Not a Number.

    if (!balance || balance == 0) return message.channel.send("Sua carteira está vazia.");
    if (amount > balance) return message.channel.send("<a:uncheck:748188800433258586> | Você não tem créditos suficientes para transferir.");
    if (amount === 0) return message.channel.send("Você não pode transferir 0 TemiCoins.");

    await db.add(`account.${user.id}.balance`, amount);
    await db.subtract(`account.${message.author.id}.balance`, amount);

    return message.channel.send(`<a:a_:747921925824708679> | Você transferiu $${amount} Para: **${user.tag}**`);
}

exports.help = {
    name: "transfer",
    description: "Transfer a credits to the user.",
    usage: "transfer <@user | user ID> <amount>",
    example: "transfer @ray#1337 900"
}

exports.conf = {
    aliases: ["tf"],
    cooldown: 15
}