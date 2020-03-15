const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by boogy")

client.user.setActivity(`working and busy rn..`, {
type: "PLAYING",
url: ""})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login('Njg4MDE5NTE2NDc5MTExMjE4.Xm6PxA.arnYcSlN__z5DBZgPYNjVzNu2Tk');