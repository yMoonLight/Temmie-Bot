
 exports.run = (client, message, [mention, ...reason]) => {
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("<a:uncheck:748188800433258586> | Você não tem este poder!");    

    if (message.mentions.members.size === 0)
      return message.reply("⚠️ Você deve mencionar o usuário a levar Kick");    
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`<a:f_:747921925820383433> | ${member.user.username} Levou um belo de um Kick 👍.`);
    });
  };