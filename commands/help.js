const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = (client, message, args) => {
    let help = new RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`Command prefix: **${prefix}**`)
    .setColor(0xFFD800)
    .addField('help', 'Displays this message')
    .addField('serverinfo', "Displays Server Information")
    .addField('avatar', 'Displays a user\'s avatar')
    .addField('8ball', `Answers your question **Usage: ${prefix}8ball <question>**`)
    .addField('coin', 'Returns a guess of either Head or Tail')
    .addField('ping', 'Reports Latency')
    .addField('rate', 'Rates your well-being out of 10')
    .addField('credits', 'Displays the people responsible for this bot');
    message.channel.send(help);

};

exports.help = {
    name: 'help'
};