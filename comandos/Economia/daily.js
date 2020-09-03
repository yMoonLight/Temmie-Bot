const ms = require('ms')
const db = require('quick.db')
const discord = require('discord.js')
module.exports = {
    name:"daily",
    category:"economia",
    aliases:['diario'],
    run: async (client, message, args) => {
        
        const timestamp = 86400000
        const amount = Math.floor(Math.random() * (2000 - 500) + 500)
        
let daily = db.fetch(`daily_${message.author.id}`)
    if(daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      
      message.reply("⏰ " + `Você já coletou o seu daily hoje tente novamente em ${time.hours}h ${time.minutes}m ${time.seconds}s`)
    } else {
      message.reply("📅" + `No daily de hoje você ganhou ${amount} `)
      db.add(`money_${message.author.id}`, amount)
      db.set(`daily_${message.author.id}`, Date.now())
    }
    
    }
}