let handler = async(m, { conn }) => {
    let msg = await conn.sendContact(m.chat, owner, m)
    await delay(1000)
    await conn.sendMessage(m.chat, { text: `ʜᴀʟᴏ ᴋᴀᴋ @${m.sender.split('@')[0]}, ɪɴɪ ᴏᴡɴᴇʀ ᴋᴜ ᴊɪᴋᴀ ᴀᴅᴀ ᴋᴇᴘᴇʀʟᴜᴀɴ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ\n\n*WhatsApp*\nwa.me/6283163784116\n*Instagram*\nhttps://instagram.com/four_bot_store`, mentions: [m.sender] }, { quoted: msg })
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
