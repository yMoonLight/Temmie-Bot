exports.run = async (bot, message, args, arg_txt, chat) => {
  if(!message.member.roles.cache.has("712327286661054474"))//se não é adm, cai fora
    return message.react('❌');
  
  if(!args || args.length < 1)
    return message.reply("Informe o nome do comando a ser recarregado!");
  //-else if(args.length == 1) return message.reply("Informe a paste e o módulo a ser recarregado!");
  
  var executa = false;
  if(args[0] == 'e'){
    args.shift();
    executa = true;
  }
  var nome = args.shift();
  
  if(bot.nome_eventos.includes(nome)){//se é evento
    process.exit(0);
  }else{//se não é evento
    if(!bot[nome])
      return message.reply("O comando/sistema não existe!");////enfileirar
    var pasta = bot.pastas[nome];
    
    try{
      delete require.cache[require.resolve("/app/"+pasta+'/'+nome+".js")];

      let código = require("/app/"+pasta+'/'+nome+".js");
      bot[nome] = código.run;

      if(executa){
        arg_txt = arg_txt.slice(nome.length+1);
        bot[nome](bot, message, args, arg_txt, chat);
      }
    }catch(erro){
      return console.log(">>Erro ao recarregar "+nome+": "+erro.message+" - "+erro.name);
    }
  }
  
  message.react('✅');
}