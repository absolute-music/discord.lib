
var login=function(token) {
let Discord = require("discord.js");
let client = new Discord.Client();
    if(token==="")return{
         throw new Error("Please input a token");
    }
   client.login(token).catch(throw new Error)
}
var sendmessage=function(message) {
    
let Discord = require("discord.js");
let client = new Discord.Client();
    if(message==="")return{
        throw new Error("Please enter your message")
    }
    client.on("message", msg => {
        msg.channel.send(message)
    })
    
}

var games =function(game, activity) {
    if(game==="" || activity==="")return{
        throw new Error("Please enter your game.")
    }
    
    client.user.setActivity(game, { type: activity });
}
exports.sendmessage=sendmessage;
exports.login=login;
exports.games=games;
