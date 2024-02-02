const axios = require("axios");
const { getBuffer } = require("../lib/Function2.js");
let mergedCommands = ["toqr","ping","sc","repo","git","script","jid","runtime"];

module.exports = {
  name: "otherscommands",
  alias: [...mergedCommands],
  uniquecommands: ["toqr","ping","jid"],
  description: "Other commands",
  start: async (
    Xbot,
    m,
    { pushName, prefix, inputCMD, doReact, text, args, participants, isCreator }
  ) => {
    switch (inputCMD) {
        case 'repo': case 'sc':
      case 'script' : case 'git':
        let { data } = await axios.get('https://github.com/abdullahjuttofc/ZAHREELA-MD')
        let cap = `_*ʜᴇy ʙʀᴏ ${pushName}*_\n
_*⭐ ᴛᴏᴛᴀʟ ꜱᴛᴀʀꜱ :*_ _*${data.stargazers_count} stars*_

_*🍭 ꜰᴏʀᴋꜱ:*_ _*${data.forks_count} forks*_

 _*🌹 ʀᴇᴩᴏ :*_ _*github.com/abdullahjuttofc/ZAHREELA-MD*_`
        
        return await m.reply(cap)
    
    break
     /*   case 'runtime': 
let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                reply(lowq)*/
        break
      case "jid":
        m.reply(m.from)
        break
      case "toqr":
        if (!text) {
          await doReact("❔");
          return m.reply(
            `Please provide an URL to convert into QR code!\n\nExample: *${prefix}toqr https://github.com/abdullahjuttofc/ZAHREELA-MD*`
          );
        }

        const res = await getBuffer(
          `https://www.qrtag.net/api/qr_8.png?url=${text}`
        );
        return Xbot.sendMessage(
          m.from,
          { image: res, caption: `\n*Source:* ${text}` },
          { quoted: m }
        );
        break;
//---------------------------------------------------------------------------------------------------------------
        case 'ping' :
          await doReact("🕒")
          const start = new Date().getTime();
        await doReact("⏱️")

          let pong = await Xbot.sendMessage(m.from , { text : "_*ᴄʜᴇᴄᴋɪɴɢ ᴘɪɴɢ...*_" }, { quoted : m })
          const end = new Date().getTime();

            Xbot.sendMessage(m.from , { text : `_*Rᴇꜱᴘᴏɴꜱᴇ ɪɴ*_ _*${end - start}*_ _*ᴍꜱ*_` , edit : pong.key } , { quoted : m })
          await doReact("✅")
            break
      default:
        break;
//status sender if asks----------------------------------------------------------------
        
    }
  },
};
