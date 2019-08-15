const { RichEmbed } = require('discord.js');
const { botVersion } = require('../config');

  //     let Aurora =  `<@551760879289368610>`;
  //     let Nevin = `<@369988289354006528`;
  //     let JG_Online = `@246655292664709120`;

exports.run = (client, message, args) => {
    let credits = new RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`Oli is my smol sister ;p \n Auwowa is my mum ;p`)
    .setColor(0xFFD800)
    .setFooter(`All rights reserved 2019. Currently at version ${botVersion}`);
    message.channel.send(credits);

};

exports.help = {
    name: 'credits'
};