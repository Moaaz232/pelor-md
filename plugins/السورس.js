let handler = async (m, { conn, command, text }) => {
let love = `‏
✭────────────────✭
مــــعلومات عـــــــن الـبـُــوت
┃ ✨  *اسـم البـوت:* Ṯ Ꭵ Ň ⅁ ❍ 
┃ 💻  * المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼
┃ 🕓  وقـت الـتـشغيـل: ${uptime}
✭────────────────✭
اســــم الــمــطـــور:Ḿ Ǿ Α Α Ź 
رقم المطور:+201156323742


 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(معلومات|معلومات_المطور)$/i
export default handler
