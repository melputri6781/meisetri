let handler = async (m, { conn, args, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
    let gc = global.db.data.chats[m.chat];

    let opt = ['on', 'off', 'aktif', 'mati', 'nyala', 'mati'];

    if (!args || !args[0] || !opt.includes(args[0].toLowerCase())) {
        conn.reply(m.chat, `.mutegc on\n.mutegc off`, m);
        return;
    }

    if (['on', 'aktif', 'nyala'].includes(args[0].toLowerCase())) {
        if (gc.mute) {
            conn.reply(m.chat, `Bot is already muted.`, m);
        } else {
            gc.mute = true;
            conn.reply(m.chat, `Bot successfully muted.`, m);
        }
    } else if (['off', 'mati'].includes(args[0].toLowerCase())) {
        if (!gc.mute) {
            conn.reply(m.chat, `Bot is already unmuted.`, m);
        } else {
            gc.mute = false;
            conn.reply(m.chat, `Bot successfully unmuted.`, m);
        }
    }
};

handler.help = ["mute"];
handler.tags = ["group"];
handler.command = ["mutegc", "mute", "mutegroup", "mutegrup"];
handler.group = true;
handler.admin = true;

export default handler;