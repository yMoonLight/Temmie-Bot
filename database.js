const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://TemmieBot:09092007!@Qh@temmiebot.xbczz.mongodb.net/TemmieBot?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    if (err) return console.log(`Erro ao conectar no database!\n${err}`)
    console.log(`Conectado ao BANCO DE DADOS!`)
})


var Schema = mongoose.Schema

var guilda = new Schema({
  guild_id: {
    type: String,
    default: "-/-",
    required: true
  },
  prefixo: {
    type: String,
    default: "t"
  },
})

var Guilda = mongoose.model("Guildas", guilda)
module.exports = {
  Guilda: Guilda  
}