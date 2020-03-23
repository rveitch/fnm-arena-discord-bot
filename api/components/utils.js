const Mime = require('mime');

const PREFIX = process.env.DISCORD_BOT_PREFIX || '!';

module.exports = {
  isBotCommand(msg) {
    return msg.content.startsWith(`${PREFIX}FNM`);
  },

  getMimeTypeFromFileName(fileNameOrUrl) {
    if (!fileNameOrUrl || typeof fileNameOrUrl !== 'string') {
      return null;
    }
    const strippedFileName = stripQueryParameters(fileNameOrUrl);
    return Mime.getType(strippedFileName);
  },

  isImageUrl(fileNameOrUrl) {
    const mimeType = this.getMimeTypeFromFileName(fileNameOrUrl);
    const mimeTypeParts = mimeType ? mimeType.split('/') : null;
    const mimeTypePrefix = (mimeTypeParts && mimeTypeParts.length) ? mimeTypeParts[0] : mimeType;
    return ['image'].includes(mimeTypePrefix);
  },
};

function stripQueryParameters(uri) {
  if (!uri) {
    return null;
  }
  return uri.replace(/\?.+$/, '');
}
