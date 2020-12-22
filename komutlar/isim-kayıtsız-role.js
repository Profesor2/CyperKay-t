const emirhan = require('discord.js')
const sarac = require('quick.db');
const ayarlar = require('../ayarlar.json')
//EMİRHAN SARAÇ

exports.run = async (client, message, args) => {
      let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  

   let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol) {
    const hata = new emirhan.RichEmbed()
    .setAuthor('HATA', message.author.avatarURL)
    .setDescription(`Rol belirtmeniz gerekiyor! \n\n**Örnek Kullanım:** \n\`\`\`${prefix}isim-kayıtsız-role @roletiket\`\`\``) 
    .setColor('RED')
    .setTimestamp()
    return message.channel.send(hata)
      }//EMİRHAN SARAÇ

  else newRole = message.mentions.roles.first().id
  let isim = message.mentions.roles.first().name  
    sarac.set(`kayıtisim.${message.guild.id}`, isim)
  let otorol = await sarac.set(`isimkayıtsızRol.${message.guild.id}`, newRole)
  if (!message.guild.roles.get(newRole)){
    const hata = new emirhan.RichEmbed()
    .setAuthor('HATA', message.author.avatarURL)
    .setDescription(`Etiketlediğiniz rol bulunamadı, etiketlediğiniz rolün etiketlenebilirliğinin aktif olduğundan emin olunuz`) 
    .setColor('RED')
    .setTimestamp()
    return message.channel.send(hata)
      } //EMİRHAN SARAÇ

const embed = new emirhan.RichEmbed()
.setAuthor(`Başarılı!`, message.author.avatarURL)
.setDescription(`İsim kayıt sisteminde kullanılacak olan **kayıtsız** rolü: <@&${newRole}> olarak seçildi!`)
.setTimestamp()
.setColor("GREEN")

 return message.channel.send(embed)
//EMİRHAN SARAÇ

};
  
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['isimkayıtsız','isimkayıtsızrole','isimkayıtsızrol','isim-kayıtsız-rol'],
    permLevel: 0
}

exports.help = {
    name: 'isim-kayıtsız-role',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'teyit-kayıtsız-rol'
}
