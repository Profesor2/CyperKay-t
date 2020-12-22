const Discord = require('discord.js');
const db = require('quick.db');

//EMİRHAN SARAÇ

exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
                    let özellik = await db.fetch(`isimyetkiliRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.RichEmbed()
                       .setAuthor('HATA', message.author.avatarURL)
                       .setDescription(`Yetkili rolü zaten ayarlanmamış bu yüzden kapatamazsın!`) 
                       .setColor('RED')
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimyetkiliRol.${message.guild.id}`)
//EMİRHAN SARAÇ

    const embed = new Discord.RichEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL)
    .setDescription(`Yetkili rolü başarıyla silindi!`)
    .setTimestamp()
    .setColor("GREEN")
    
     return message.channel.send(embed)
    //EMİRHAN SARAÇ

};

exports.conf = {
  kategori: 'ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'isim-yetkili-role-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};