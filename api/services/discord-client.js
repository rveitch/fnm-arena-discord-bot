require('dotenv').config({ debug: process.env.DEBUG });
const Discord = require('discord.js');

/* ***************************** DISCORD CLIENT SETUP ******************************** */

const DiscordClient = new Discord.Client();

(async () => {
  try {
    await DiscordClient.login(process.env.DISCORD_BOT_TOKEN);
  } catch (err) {
    console.error('DISCORD LOGIN ERROR:', err);
  }
})();

DiscordClient.on('ready', () => {
  console.log(`DiscordClient: Logged in as ${DiscordClient.user.tag}!`);
});

module.exports = DiscordClient;
