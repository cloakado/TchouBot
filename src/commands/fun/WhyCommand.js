const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WhyCommand extends BaseCommand {
  constructor() {
    super('why', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('why?');
  }
}