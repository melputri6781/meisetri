let handler = async (m, { conn }) => {
let sewa = `
*_HARGA SEWA BOT BIASA_*

*• 1 BULAN 10K 1 GRUP*
*• 2 BULAN 20K 1 GRUP*
*• 3 BULAN 30K 1 GRUP*
*• DAN SETERUSNYA 1 GRUP*
*• PERMANEN 50K 1 GRUP*

*_HARGA SEWA BOT VIP_*

*• 1 BULAN 15K 2 GRUP*
*• 2 BULAN 25K 2 GRUP*
*• 3 BULAN 35K 2 GRUP*
*• DAN SETERUSNYA 2 GRUP*
*• PERMANEN 60K 2 GRUP*

*_HARGA SEWA BOT GRUP SELEKSI_*
*• 1 BULAN 5K 1 GRUP*
*• 2 BULAN 10K 1 GR UP*
*• 3 BULAN 15K 1 GRUP*
*• DAN SETERUSNYA 1 GRUP*
*• PERMANEN 30K 1 GRUP*
MINAT CHAT OWNER KETIK PERINTAH .OWNER
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|rent|rental)$/i

export default handler
