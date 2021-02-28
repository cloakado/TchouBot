const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class IpCommand extends BaseCommand {
  constructor() {
    super('ip', 'help', []);
  }

  run(client, message, args) {
    message.channel.send('The IP of the server is jdhbgvjkluzhnxghlfk.aternos.me');
  }
}