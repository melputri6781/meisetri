let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
    } else {
        who = m.chat;
    }
    if (!who) throw 'Tandai orang yang ingin Anda hapus sebagai Owner!';
    
    const ownerId = who.split('@')[0];
    const ownerIndex = global.owner.findIndex(owner => owner[0] === ownerId);
    
    if (ownerIndex === -1) throw 'Orang ini bukan seorang owner!';
    
    const removedOwner = global.owner.splice(ownerIndex, 1)[0];
    const caption = `@${removedOwner[0]} telah dihapus sebagai Owner.`;
    
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}

handler.help = ['removeowner @user'];
handler.tags = ['owner'];
handler.command = /^(remove|del|-)(owner|sudo)$/i;
handler.owner = true;

export default handler;
