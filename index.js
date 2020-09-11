//-Değişkenler-
const Discord = require("discord.js");
const Advanced = require('discordjs-advanced');
                         
const client = new Advanced.Client({
    token: "token bilginiz",
    prefix: "a!",
    sahip: ["498501022126440467"],     
    komutDosya: "komutlar",
    veritabanı : {
    dosya : "databasa.json"
    },
    varsayılanKomutlar: [],
    everyoneKapat: true
    
});

client.eventYükle("olaylar")

client.kategoriYükle([
    ['moderasyon', 'Moderasyon Komutları'],
    ['eğlence', 'Eğlence Komutları'],
    ['kullanıcı', 'kullanıcı komutları'],
    ['genel', 'genel komutlar'],
]);
//-Bot hazır mesajı-
client.on("ready",() => {
    console.log("Bot başarı ile giriş yaptı.")
});                     

var prefix = "";

client.on("message", message =>{

if(message.content.toLowerCase() === "selam") {
    message.react("✋")   
    message.channel.send("Aleyküm selam.")
}
if(message.content.toLowerCase() === "sa") {
    message.react("✋")
    message.channel.send("Aleyküm selam.")
}

})  
    
client.giris()
            






