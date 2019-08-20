// Discord.js, Bot token and prefix
const { Client } = require('discord.js');
const {  token } = require('./config');
const fs = require('fs');
const Enmap = require('enmap');
const client = new Client();
const {prefix} = require('./config');
const config = require('./config');


client.commands = new Enmap();

function emoji(id) {
  return client.emojis.get(id).toString();
}

// Welcoming message
client.on('guildMemberAdd', async member => {
  if(member.bot) return;
  try{
    member.guild.channels.get('611453942819192854').send('**' + member.user.username + '**, has joined the server!\n https://media.giphy.com/media/aldA8c4X6mk9O/giphy.gif');
    let gRole = member.guild.roles.find(role => role.name === config.fRoleName);
    if(member.roles.has(gRole.id));
    await(member.addRole(gRole.id));
}catch(e){};
});

// Goodbye message
client.on('guildMemberRemove', member => {
  console.log(member);
  member.guild.channels.get('611453942819192854').send('**' + member.user.username + '**, has left the server. We\'re sorry to see you go.. \n https://media1.tenor.com/images/7ef999b077acd6ebef92afc34690097e/tenor.gif?itemid=10893043');
});


// Runs event-driven functions
fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split(".")[0];
    console.log(`Loaded event '${evtName}'.`);
    client.on(evtName, evt.bind(null, client));
  });
});

// Runs command functions
fs.readdir('./commands/', async (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('js')) return;
    let props = require(`./commands/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded command '${cmdName}'.`);
    client.commands.set(cmdName, props);
  });
});

const size = config.colors;
const rainbow = new Array(size);

for (var i = 0; i < size; i++) {
  var red = sin_to_hex(i, 0 * Math.PI * 2 / 3); // 0   deg
  var blue = sin_to_hex(i, 1 * Math.PI * 2 / 3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2 / 3); // 240 deg

  rainbow[i] = '#' + red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0' + hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length ; ++index) {
client.guilds.get(servers[index]).roles.find(role => role.name === config.roleName).setColor(rainbow[place])
      .catch(console.error);
    if (place == (size - 1)) {
      place = 0;
    } else {
      place++;
    }
  }
}

client.on('ready', () => {
   setInterval(changeColor, 250);
});

client.on("message", message => {
  if (message.author.bot) return
  var msg = message.content.toLowerCase();
  if(msg.startsWith("thank") || msg.startsWith("tnx")){
    message.channel.send(emoji("596911933316399132"));
    console.log(emoji("596911933316399132"));
  };
  if(msg.startsWith("<:lemons:322459208731721738>")){
    message.channel.send(emoji("612616971078336512"));
  };
  if(msg == "fite me"){
    message.channel.send(`⚾ ${emoji("610038077238411294")}`);
  }
  if(msg.includes("parrot party")){
    message.channel.send(emoji("613073520666214459").repeat(20));
  }
  if(msg == client.user){
    message.channel.send(`My prefix is \`\`${prefix}\`\``);
  };

  
});



client.login(token);
