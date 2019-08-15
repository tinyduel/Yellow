exports.run = (client, message, args) => {
    let mention = message.mentions.users.first();
    let messageProper = message.content.slice(29);
    if(mention === null) return;
    message.delete();
    mention.send(messageProper);
    message.channel.send("done!");
};

exports.help = {
    name: 'dm'
};