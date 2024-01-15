import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
try {
let anu = await fetch(`https://aemt.me/download/tikdl?url=${text}`)
let data = await anu.json()
await conn.sendFile(m.chat, data.result.url.nowm, 'anu.mp4', `*Description:* ${data.result.info_video.title}`, m)
conn.sendFile(m.chat, data.result.url.audio, 'anu.mp3', null, m)
} catch (e) {
m.reply(eror)
}
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler
