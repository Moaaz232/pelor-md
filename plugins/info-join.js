let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `* يشرط ارسال الرابط*\n*📝 يرجي ارسال رابط المجموعة.*\n\n💡 مثال\n*.انضم ${nn}*`

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
m.reply(`*${cb} لقد انضم إلى المجموعة!!✅*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`✉️ *تطبيق لمجموعة*\n\n*👤 الطالب*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*📝 رابط المجموعة*\n ' + لينك, jid)

m.reply(`*تم✅  *\n\n تم الارسال الي المطور وسوف يراجع الطلب📎*\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *سيتم تقييم مجموعتك وسيكون الأمر متروكًا لقرار المالك إذا ${cb} الانضمام إلى المجموعة أم لا.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *قد يتم رفض طلبك للأسباب التالية::*\n*1- البوت مشنع بجروبات كثيرا .*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2- *تم طرد البوت من الجروب مسبقآ.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3- *المجموعة لا تلتزم باللوائح ${cb}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4- *تمت استعادة رابط المجموعة.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5- *لم تتم إضافته إلى المجموعات بناءً على المطور.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n🕵🏻‍♂️ * يرجي الإنتظار حتي يري المطور الرساله وشوف يتواصل معك📎.*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.exp = 100
handler.command = /^unete|انضم|ادخل|unir|unite|unirse|entra|entrar$/i 
export default handler
*/
