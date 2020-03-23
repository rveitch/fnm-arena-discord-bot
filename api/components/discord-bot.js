const Discord = require('../services/discord-client');
const Utils = require('./utils');

const DiscordBot = {};
module.exports = DiscordBot;

/* ******************************** EVENTS **************************** */

Discord.on('message', async (msg) => {
  if (!Utils.isBotCommand(msg) || !hasAttachments(msg)) {
    return;
  }

  const imageAttachments = msg.attachments.reduce((imgAttachments, attachment) => {
    if (Utils.isImageUrl(attachment.url)) {
      imgAttachments.push(attachment.url);
    }
    return imgAttachments;
  }, []);

  if (imageAttachments.length) {
    console.log('FNM SUBMISSION:', msg.author.username, imageAttachments);
    await msg.reply('Submission Accepted!');
  }
});

/* ******************************** HELPER FUNCTIONS **************************** */

function hasAttachments(msg) {
  return msg.attachments.size >= 1;
}
