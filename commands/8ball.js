
exports.run = (client, message, args) => {
    const {prefix} = require('../config');
    let question = message.content.split(/\s+/g).slice(1).join(" ");
    let answer = ['It is certain','It is decidedly so','Without a doubt','Yes, definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don\'t count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful','Well yes, but actually no'];
    if (question == "8ball"){
        
        message.channel.send(`You must provide a question! Usage: ${prefix} 8ball <question>`);
    }else{
        message.channel.send(`:8ball:  |  ` + answer[[Math.round(Math.random() * (answer.length - 1))]] + '.');
    }
};

exports.help = {
    name: '8ball'
};



