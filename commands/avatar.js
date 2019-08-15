const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    if(user == null){
    let Avatar = new RichEmbed()
      .setImage(message.author.avatarURL)
      .setColor(0x00A98A);
      message.channel.send(Avatar);
      message.channel.send(`**${message.author.username}**'s Avatar!`);
    }else{
    let embed = new RichEmbed()
    .setImage(user.avatarURL + '?size=128')
    .setTitle(`${message.author.username}`)
    .setColor(0x00A98A);
    message.channel.send(embed);
    }
};

exports.help = {
    name: 'avatar'
};
