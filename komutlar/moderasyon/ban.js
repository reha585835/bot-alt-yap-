const Discord = require("discord.js");

    module.exports = {
        komut: "ban",
        açıklama: "Etiketlediğiniz kişiyi sunucudan atar.",
        kategori: "moderasyon",
        alternatifler: ['ban',"banla"],
        kullanım: "ban",
        yetki: "BAN_MEMBERS",
        args: [
{

        anahtar:"banlanacakkisi",
        soru:"Hangi kullanıcıyı banlamak istersiniz?",
        tip:"kullanici"
        
}]

    
}
                     
    module.exports.baslat = (client, message, args) => {
    let banlanacakkisi = args.banlanacakkisi;
    let banlanmanedeni = args.banlanmanedeni;

    message.guild.member(banlanacakkisi).ban()

    message.channel.send(":white_check_mark: | Başarı ile "+ banlanacakkisi.username + " Kullanıcı banlandı")

    message.guild.get(banlogchannel.id).send(new Discord.RichEmbed()
    .addField("Banlanan kişi:",banlanacakkisi.username, true)
    .addField("Banlayan kişi:",message.author.username, true)
    .addField("Banlanma nedeni:",banlanmanedeni, true)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Ban-Log Sistemi | reha..")
    .setTitle("Ban-Log Sistemi")
    
    )
 }