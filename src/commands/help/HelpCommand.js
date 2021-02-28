const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'help', []);
  }

  run(client, message, args) {
    message.channel.send('heres some help :D');
    message.channel.send({embed: {
    description: "This command is still a work in progress!"

    }});
  }
}