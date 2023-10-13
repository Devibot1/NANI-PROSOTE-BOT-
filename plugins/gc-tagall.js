let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀𝘼𝙋𝘼𝙍𝙀𝘾𝙀 𝙈𝘼𝙇𝘿𝙄𝙏𝘼 𝘽𝘼𝙎𝙐𝙍𝘼 𝙄𝙉𝙎𝙀𝙍𝙑𝙄𝘽𝙇𝙀 𝘿𝙀 𝙈𝙄𝙀𝙍𝘿𝘼 ⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣🐢 @${mem.id.split('@')[0]}\n`}
teks += `└💩𝐍𝐀𝐍𝐈 𝐁𝐎𝐓 💩`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
