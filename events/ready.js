module.exports = client => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('Minecraft', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
    .catch(console.error);
};
