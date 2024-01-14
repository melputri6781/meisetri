let handler = async (m, { conn, text, usedPrefix, command }) => {
	let groups
	try { groups = Object.values(await conn.groupFetchAllParticipating()) }
	catch { return }
	let img, thumb, q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (mime) img = await q.download?.()
	conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} chat_`, m)
	let teks = `${text ? (text) : ''}`
	if (/audio/.test(mime)) thumb = await (await fetch('https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/menus.json')).json().then(v => v.getRandom())
	for (let x of groups) {
		try {
			let tag = /tag/.test(command) ? x.participants.map(v => v.id) : []
			if (/image|video/g.test(mime) && !/webp/.test(mime)) await conn.sendMessage(x.id, { [/image/.test(mime) ? 'image' : 'video']: img, caption: teks }, { quoted: m, mentions: tag })
			else await conn.reply(x.id, teks, m, { mentions: tag })
		} catch (e) {
			console.log(e)
		}
	}
	await m.reply('Selesai Broadcast All Group Chat :)')
}
handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(bcgc|bcgrouphidetag)$/i

handler.owner = true

export default handler