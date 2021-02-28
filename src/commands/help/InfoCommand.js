const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class InfoCommand extends BaseCommand {
  constructor() {
    super('info', 'help', []);
  }

  run(client, message, args) {
    message.channel.send('info command works');
  }
}