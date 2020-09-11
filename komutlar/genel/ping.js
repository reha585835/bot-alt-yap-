const Discord = require("discord.js");

module.exports = {
    komut: "ping", 
    açıklama: "Botun pingini ölçer.",
    kategori: "genel", 
    alternatifler: ['ping','p','gecikmesüresi'],
    kullanım: "a!ping", 
    yetki: '',
};
                 
module.exports.baslat = (client, message) => {
    //mesaj gönderme 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Ping Ölçüm tablosu")
    .setURL("https://discord.gg/CP78KdX")
    .setDescription("Botun ping değeri aşağı satırlarda gösterilmektedir. ")
    .addField("Botun gecikme süresi:", Math.round(client.ping) + " MS", true)
    .addField("baslık2","baslık2 açıklaması",true)
    .addBlankField()
    .setFooter("Ping değerleri")
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail("https://cdn.discordapp.com/attachments/730808197618729033/731838806189146182/download.jpg")
    .setImage("https://cdn.discordapp.com/attachments/730808197618729033/731838806189146182/download.jpg")
    message.channel.send({embed:embed})
};