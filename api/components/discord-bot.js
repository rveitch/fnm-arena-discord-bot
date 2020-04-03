const Discord = require('../services/discord-client');
const Utils = require('./utils');
const Cache = require('./cache');

const DiscordBot = {};
module.exports = DiscordBot;

/* ******************************** EVENTS **************************** */

Discord.on('message', async (msg) => {
  if (!isTargetChannel(msg) || !hasAttachments(msg)) { // !Utils.isBotCommand(msg)
    return;
  }

  const imageAttachments = msg.attachments.reduce((imgAttachments, attachment) => {
    if (Utils.isImageUrl(attachment.url)) {
      imgAttachments.push(attachment.url);
    }
    return imgAttachments;
  }, []);

  if (imageAttachments.length) {
    try {
      console.log('FNM SUBMISSION:', msg.author.username, imageAttachments);
      await Cache.storeSubmission(`${Utils.TimeNow()}_${msg.author.id}_${msg.author.username}`, imageAttachments[0]);
      if (Utils.isBotCommand(msg)) {
        await msg.reply('Submission Accepted!');
      }
    } catch (err) {
      console.error(err);
    }
  }
});

/* ******************************** HELPER FUNCTIONS **************************** */

function hasAttachments(msg) {
  return msg.attachments.size >= 1;
}

function isTargetChannel(msg) {
  const { channel: { name: channelName } = {} } = msg || {};
  return channelName === 'mtg-arena-event-submissions';
}
