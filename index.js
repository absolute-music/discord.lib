let { message, Client } = require("discord.js");
let client = new Discord.Client();
var dbjs=function(token, game, message) {
    if(token==="") {
         throw new Error("Please input a token");
    }
    if(game){
     client.setGame(game.length)
    }
   if(message){
     message.channel.get(message.channel.id).send(message.send)
   }
   client.login(token).catch(throw new Error)
}
exports.dbjs=dbjs;
