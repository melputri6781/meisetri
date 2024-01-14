let handler = async (m, { conn }) => {
conn.reply(m.chat, `_List Group ʙᴏᴛ owen
*Offcial Group*
${link.gc}

*GABUNG GROUP WHATSAPP KAMI*
https://chat.whatsapp.com/JyI8GpCxbBZ1jsuLpa8QGM
`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
