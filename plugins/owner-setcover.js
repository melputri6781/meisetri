import fs from 'fs';

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('*example*: .setcover https://link.sazumiviki.me/cVs9uS');
    return;
  }

  let configFile = './config.js';
  let configData = fs.readFileSync(configFile, 'utf8');

  let newValue = `global.thumbnailUrl = "${text}"`;

  configData = configData.replace(/global\.sourceUrl\s*=\s*".*"/, newValue);

  fs.writeFileSync(configFile, configData, 'utf8');

  m.reply('Successfully changed the thumbnailUrl');
};

handler.help = ['setcover ⧼url⧽'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^(setcover)$/i;

export default handler;