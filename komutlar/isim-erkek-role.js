const emirhan = require('discord.js');
const sarac = require('quick.db')


exports.run = async(client, message, args) => {
          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
            if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  

  const rol = message.mentions.roles.first()
  
  if (!rol)  {
    const hata = new emirhan.RichEmbed()
    .setAuthor('HATA', message.author.avatarURL)
    .setDescription(`Rol belirtmeniz gerekiyor! \n\n**Örnek Kullanım:** \n\`\`\`${prefix}isim-erkek-role @roletiket\`\`\``) 
    .setColor('RED')
    .setTimestamp()
    return message.channel.send(hata)
      
  }//EMİRHAN SARAÇ

  sarac.set(`isimerkekRol.${message.guild.id}`, rol.id)
  const embed = new emirhan.RichEmbed()
  .setAuthor(`Başarılı!`, message.author.avatarURL)
  .setDescription(`İsim kayıt sisteminde kullanılacak olan **erkek** rolü: <@&${rol.id}> olarak seçildi!`)
  .setTimestamp()
  .setColor("GREEN")
  //EMİRHAN SARAÇ

   return message.channel.send(embed)
//EMİRHAN SARAÇ

};
//EMİRHAN SARAÇ

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};//EMİRHAN SARAÇ


exports.help = {
  name: 'isim-erkek-role',
  description: 'Kişi susturulunca verilecek rolü ayarlarsınız.',
  usage: 'mute-rol',
};//EMİRHAN SARAÇ
