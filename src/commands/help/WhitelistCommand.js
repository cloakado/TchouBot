const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WhitelistCommand extends BaseCommand {
  constructor() {
    super('whitelist', 'help', []);
  }

  run(client, message, args) {
    message.channel.send('Hey @Admin, this dude wants to be whitelisted.');
  }
}