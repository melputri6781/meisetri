import fetch from "node-fetch"


let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Example: .animedif highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
m.reply(wait)
try {
conn.sendFile(m.chat, await(await fetch(`https://api.xyroinee.xyz/api/ai/animediffusion2?q=${text}&apikey=ClaraKeyOfficial}`)).buffer(), 'anu.jpg', `Prompt: ${text}`, m)
} catch (e) {
m.reply(eror)
}
    
}
handler.help = ['animedif2']
handler.tags = ['ai']
handler.command = /^(animedif2)$/i
handler.limit = true
export default handler  = handler;

