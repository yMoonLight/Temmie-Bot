module.exports = async (bot) => { //faz algo qdo o bot liga
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calss)');
  
  const status = [
    "online",
    "dnd",
    "idle"
  ]
  
  const atividades = [
     ["h0i so temi", "LISTENING"],
     ["do ladu o amigu! Oi, sou bob", "PLAYING"],
     ["ve a amiga Hoi so temi", "WATCHING"],
     ["não esquece a amiga Hoi so temi", "WATCHING"]
    ];
  setInterval(async () => { // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
      await bot.user.setActivity(atividades[i][0], { type: atividades [i][1] });
  }, 10000); // intervalo

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
      await bot.user.setStatus(status[b])
  }, 20000)

}