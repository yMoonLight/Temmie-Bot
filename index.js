// algumas coisas pro bot ficar on direto
var express = require('express');
var app = express();
const http = require('http');

app.get("/", (request, response) => {
  response.sendStatus(200); //reponde qdo recebe ping
  //console.log("fui pingado!");
});
app.listen(process.env.PORT);


// ===== o bot começa aqui =====
const moment = require('moment');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.Discord = Discord;
bot.Database = require('./database.js')


//const Enmap = require("enmap");
const fs = require("fs");
bot.fs = fs;
//bot.mathjs = require("mathjs");

bot.prefixo = 't';

/*  Carrega os códigos dos módulos: comandos e sistemas  */
bot.pastas = {}; //vai associar um comando a uma paste
bot.listas_comandos = {};
var logcrr = "Carreguei módulos: ";
var diretórios = ["comandos"];/// "sistemas", 
var pasta, subpasta;
while(diretórios.length){
  pasta = diretórios.shift();//pega uma pasta pra carregar os arquivos dela
  try{
    let nomes_arquivos = bot.fs.readdirSync("./"+pasta+"/");
    for(let nomea of nomes_arquivos){
      if(!nomea.endsWith(".js")){//qdo for pasta (nunca colocar txt nas pastas de sistemas e comandos)
        diretórios.unshift(pasta+'/'+nomea);//enfileirando subpastas
        continue;
      }
      try{
        let código = require("./"+pasta+"/"+nomea);
        nomea = nomea.split(".")[0]; //remove o .js
        if(bot[nomea])
          console.log("Tem 2 .js de mesmo nome: "+nomea);
        
        bot[nomea] = código.run;//atribui a função run do arquivo como atributo de bot nomeado pelo nome do arquivo
        bot.pastas[nomea] = pasta;//assinala a pasta de cada comando e sistema
        logcrr += nomea+", "; 
        
        if(pasta.includes("comandos/")){
          subpasta = pasta.slice(9);
          if(!bot.listas_comandos[subpasta])//se não tem a lista pra essa subpasta
            bot.listas_comandos[subpasta] = [];
            
          bot.listas_comandos[subpasta].push(bot.prefixo+nomea+"\n");
        }
          
      }catch(erro){
        console.log(">>Erro ao carregar "+nomea+": "+erro.message+" - "+erro.name);
      }
    }
  }catch(erro){ 
    console.log(">>Erro ao ler "+pasta+": "+erro.message," - ",erro.name);
  }
}
console.log(logcrr +"carregados.");

/*  Carrega os códigos dos eventos da API do discord  */
bot.nome_eventos = [];
var logcrr = "Carreguei eventos: ";
try{//faz a leitura dos eventos relativos a API discord.js
  let arquivos_eventos = bot.fs.readdirSync("./eventos/");
  for(let nomee of arquivos_eventos){
    if(!nomee.endsWith(".js"))
      continue;
    try{
      let código = require("./eventos/"+nomee);
      nomee = nomee.split(".")[0];//remove .js
      bot.on(nomee, código.bind(null, bot));
      logcrr += nomee+", "; bot.nome_eventos.push(nomee);
    }catch(erro){
      console.log(">>Erro ao carregar o evento "+nomee+": "+erro.message+" - "+erro.name);
    }
  }
}catch(erro){
  console.log(">>Erro ao ler eventos! "+erro.message+" - "+erro.name);
}
console.log(logcrr +"carregados.");

try{
  console.log("-Tentando logar na API do discord");
  bot.login(process.env.TOKEN);//faz login na API do discord com a credencial do bot
}catch(e){
  console.log("ERRO AO TENTAR LOGAR NA API DO DISCORD: ", e); ///mandar msg pra outro bot avisando disso
  //console.log(e);
}