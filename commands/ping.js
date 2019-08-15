exports.run = (client, message, args) => {
    let m = message.channel.send("Ping?");
    m.then((m)=>m.edit(`Pong! \n\tLatency is **${m.createdTimestamp - message.createdTimestamp}**ms. \n\tAPI Latency is **${Math.round(client.ping)}**ms`));
};

exports.help = {
    name: 'ping'
};