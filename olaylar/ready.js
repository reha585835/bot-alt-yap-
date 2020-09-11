const chalk = require('chalk')
module.exports = (client) => {

//  WATCHING : !ping izliyor
//  LISTENING : !ping dinliyor
//  PLAYING  : !ping oynuyor 

    client.user.setActivity("a!ping",{ type: "PLAYING"} );

    var logmesajı = chalk.bold.red("Oynuyor kısmı basari ile ayarlandi. \n")+ 
                chalk.italic.yellow("aura : " + client.user.presence.game )
    console.log(logmesajı)
}