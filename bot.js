const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!cat') {
    	message.reply('meow');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTYzMTgyMTIzNjY2ODk4OTU0.XL0dWg.7GN-I9WeN_NbTL2fYQ8vVW7pVF8);
