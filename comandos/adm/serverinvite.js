exports.run = (client, message, args) => {
    const setChannelID = message.content.split(' ');

    try{
        message.guild.channels.cache.get(setChannelID[1]).createInvite().then(invite =>
            message.channel.send("Aqui está o seu invite: \n" + invite.url)
        );
    }

    catch(error){
        console.error(`Não consegui criar um convite para o canal: ${error}`);
        message.channel.send(`Você tem que colar o ID do canal que deseja criar o invite.`);
    }
}