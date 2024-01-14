import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Cari Apa?`
  try {
  let res = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=IchanZX`)
  let anu = await res.json()
  anu = anu.data.result.map((v) => `*Title:* ${v.title}\n*Info:* ${v.info}\n*Link*: ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['xnxxsearch']
handler.tags = ['internet' 'menuprem']
handler.command = /^(xnxxsearch)$/i
handler.limit = false
handler.premium = true

export default handler
