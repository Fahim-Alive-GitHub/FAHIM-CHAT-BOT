const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 aliases: ["admininfo", "infoadmin"],
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 1
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┌───────────────⭓
│ 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
├───────────────
│👤 𝐍𝐚𝐦𝐞 : 𝗘𝗯𝘁𝗶𝗱𝗮 𝗥𝗮𝗵𝗺𝗮𝗻 𝗙𝗮𝗵𝗶𝗺
│🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : 𝗠𝗮𝗹𝗲
│❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝗜𝗻 𝗮 𝗿𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽
│🎂 𝐀𝐠𝐞 : 𝟭𝟴+
│🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : 𝗜𝘀𝗹𝗮𝗺
│🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝗛𝗼𝗻𝘂𝗿𝘀 𝟭𝘀𝘁 𝗬𝗲𝗮𝗿
└───────────────⭓

┌───────────────⭓
│ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
├───────────────
│📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
│https://www.facebook.com/whosfahim0
│💬 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:

└───────────────⭓

┌───────────────⭓
│ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲
├───────────────
│ ${time}
└───────────────⭓
 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/cwd64Av.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
