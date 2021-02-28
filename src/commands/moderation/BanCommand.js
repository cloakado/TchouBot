const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('-ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
              member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
          
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
                     message.reply('I was unable to ban the member');
                console.error(err);
          });
      } else {
          message.reply("That user isn't in this guild!");
      }
    } else {
           message.reply("You didn't mention the user to ban!");
    }
  }
});

client.login('ODEzMzA4MjM5MTgxNjQzODI4.YDNaUg.XgzSiqeki4l4E1uze0VZd6gFlt8');