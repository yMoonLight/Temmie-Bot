module.exports = async (bot) => { //faz algo qdo o bot liga
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calls)');

  const avatares = [
    "https://media.discordapp.net/attachments/472313197836107780/538592519894859789/GhpVKQS.png",
    "https://media.discordapp.net/attachments/472313197836107780/582785679898050571/qzmInXH.png",
    "https://media.discordapp.net/attachments/472313197836107780/620069339575484426/tuh2Dpy.png"
  ] 

  const status = [
    "online",
    "dnd",
    "idle"
  ]
  
  const atividades = [
     ["h0i so temi", "LISTENING"],
     ["do ladu o amigu! Oi, sou bob", "PLAYING"],
     ["ve a amiga Hoi so temi", "WATCHING"],
     ["não esquece a amiga Hoi so temi", "WATCHING"]//bot adicionar quantos quiser :V
    ];
  setInterval(async () => { // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
      await bot.user.setActivity(atividades[i][0], { type: atividades [i][1] });
  }, 10000); // intervalo

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
      await bot.user.setStatus(status[b])
  }, 20000)

   setInterval(async () => {
    let c = Math.floor(Math.random() * avatares.length + 1) - 1
      await bot.user.setAvatar(avatares[c])
  }, 4000)

}