const { RichEmbed } = require('discord.js');

// Random outcome
function doRandHT() {
    let rand = ['HEADS!','TAILS!'];
    return rand[Math.floor(Math.random()*rand.length)];
    }
    
exports.run = (client, message, args) => {
    let coin = new RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/605343680047480864/611238592064389140/86138989-golden-bitcoin-coin-crypto-currency-golden-coin-bitcoin-symbol-isolated-on-white-background.png')
    .setTitle(`Here is the Winner!\n\t${doRandHT()}`)
    .setColor(0xFFD800);
    message.channel.send(coin); 
};

exports.help = {
    name: 'coin'
};