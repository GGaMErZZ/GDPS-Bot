// $userName = $ep->remove($_POST["userName"]);
//	$password = $ep->remove($_POST["password"]);
//	$userID = $ep->remove($_POST["userID"]);

const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const req = require("request");


module.exports.run = async (bot, message, args) => {
  
  req.post({
    userName: args[1],
    password: args[2],
    userID: args[3]
  }, (body) {
    
  })
  
let credits = new Discord.MessageEmbed()
.setTitle('BANNED')
.addDescription(`Banned ${args[0]} successfully or not idk this is beta testing`)
.setColor('0x' + botconfig.commandColour)
message.channel.send(ban)
}


module.exports.config = {
    name: "ban",
    description: "Ban someone from leaderboard",
    usage: botconfig.prefix +"ban",
    accessableby: "Members",
    aliases: []
}
