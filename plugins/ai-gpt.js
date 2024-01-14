import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Iya Mau Nanya Apa Sayang?`
  m.reply(wait)
  try {
    let res = await fetch(`https://api.xyroinee.xyz/api/others/chatgpt?q=${text}&apikey=ClaraKeyOfficial`)
    let zel = await res.json()
   m.reply(zel.data)
   } catch (e) {
   throw e
   }
}
handler.help = ['gpt'] 
handler.tags = ['ai']
handler.command = /^(vynaa|sayang)$/i
handler.limit = true
export default handler