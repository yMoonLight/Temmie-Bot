exports.run = async (client, message, args) => {
    if (!args.join(' ')) return message.channel.send({embed: {
        title: "Uso incorreto !",
        description: "Uso correto: votacao <titulo> \nEx. votacao Devemos banir fulano do servidor?",
        footer: {
            icon_url: message.author.avatarURL,
            text: `Comando utilizado por ${message.author.username}`
        },
        color: 13632027,
        timestamp: new Date()
    }});

    message.delete();
    message.channel.send('||<@&713357035655266354>||')
    message.channel.send({embed: {
        title: args.join(' '),
        footer: {
            text: `Votação iniciada por ${message.author.username}`
        },
        color: 8463563,
        timestamp: new Date()
    }}).then((message) => {
        message.react("👍");
        message.react("👎");
    });
};
