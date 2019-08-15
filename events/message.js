const { prefix } = require('../config');

module.exports = (client, message) => {
// To not respond to other bots
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  // Separating Prefix from the rest of the command
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // If command doesn't exist, returns nothing.
  const cmd = client.commands.get(command);
  if (!cmd) return;

  cmd.run(client, message, args);
};
