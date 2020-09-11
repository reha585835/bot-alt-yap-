const Discord = require("discord.js");

module.exports = {
    komut: "isim-değiştir", 
    açıklama: "kullanıcının takma adını değiştirir",
    kategori: "moderasyon", 
    alternatifler: ['isim-değiştir'],
    kullanım: "a!isim-değiştir", 
    yetki: "MANAGE_NICKNAMES",
    args : [
 {
 	  anahtar:"isimdegiştirilecekkisi",
 	  soru:"hangi kişinin ismini değiştirmek istiyorsunuz",
 	  tip:"kullanici"
    },
    {
       anahtar:"yeniisim",
       soru:"Bu kişiye hangi ismi vermek istiyorsunuz",
       tip:"yazi"
    }
    ]
    };
                 
module.exports.baslat = (client, message, args, isimdegiştirilecekkisijs) => {
    let isimdegiştirilecekkisi = args.isimdegiştirilecekkisi;
    let yeniisim = args.yenisim;

    message.guild.member(isimdegiştirilecekkisi).change.username()

    message.guild.get(usernamechangechannel.id).send(new Discord.RichEmbed()
    .addField("adı değiştirilen kişi:",isimdegiştirilecekkisi.username, true)
    .addField("adı değiştirilecek kişi:",message.author.username, true)
    .setTimestamp()
    .setFooter("ad-değiştirme-sistemi | reha..")
    .setTitle("ad değiştirme sistemi")
    
    )
 }