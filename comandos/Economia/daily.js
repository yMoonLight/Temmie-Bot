const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");

exports.run = async (client, message, args) => {
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 8.64e+7; // 24 Hours in ms.
    let amount = 500; // How much user will get it in their dailies.

    let lastDaily = await db.get(`lastDaily.${message.author.id}`);
    let buck = await db.get(`account.${message.author.id}.balance`);

    try {
        
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.channel.send(`<a:uncheck:748188800433258586> | Você não pode coletar seu daily agora! Por favor espere: ${finalTime}.`);
        } else {
            db.set(`lastDaily.${message.author.id}`, Date.now());
            db.add(`account.${message.author.id}.balance`, amount);
            return message.channel.send(`**${message.author.tag}!** <a:a_:747921925824708679> | Você recebeu 500 TemiCoins! `);
        }

    } catch (error) {
        console.log(error);
    }
}

exports.help = {
    name: "daily",
    description: "Collect the daily credits."
}

exports.conf = {
    aliases: ["dailies"],
    cooldown: 10
}