module.exports = async (bot, guild) => { //faz algo qdo o bot liga

  await bot.Database.Guilda.deleteOne({
    "guild_id": guild.id
  })

console.log("Eu fui removido da guilda: "+guild.name)

}