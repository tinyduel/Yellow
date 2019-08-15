exports.run = (client, message, args) => {
    let messageProper = message.content.slice(7);
    message.delete();
    message.channel.send(messageProper);
};

exports.help = {
    name: 'chat'
};