const { prefix } = require('../config');

function doRateto10(){
    let rand = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
    return rand[Math.floor(Math.random()*rand.length)];
}
function doRateto5(){
    let rand = [8,9,10,11,12];
    return rand[Math.floor(Math.random()*rand.length)];
}


exports.run = (client, message, args) => {
    let judgement = doRateto10();
    let mentionedUser = message.mentions.users.first();
    let askingUser = message.author.username;
    console.log(message);
    if(message.isMentioned(client.user)){return message.channel.send(`I'd give ${client.user.username} a/an **${doRateto5()}/10**  😎`);}
    if((mentionedUser == null || mentionedUser.username == askingUser)){
        message.channel.send(`I'd give you a/an **${judgement}/10**, **${askingUser}**`);
    }else{
        message.channel.send(`I'd rate **${mentionedUser.username}** a/an **${judgement}/10** to me, **${askingUser}**`);
    }
};

exports.help = {
    name: 'rate'
};
