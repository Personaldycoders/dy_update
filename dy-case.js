// *ScBot By dycoders
// NO HAPUS WM! INI JIKA KALIAN TAU CARA MENGHARGAI SEBUAH CODE PADA SC INI
// Kalian Bisa Ganti rename atau pun itu kecuali Hapus Wm INI
// TQ TO ME 
// No kis No hug Only Fix bug

//SALURAN DEV "https://whatsapp.com/channel/0029VagpRL811ulLEm4TnO0h" WA DEVELOPER wa.me/6285719898124



require('./config');
const fs = require('fs');
const util = require("util");
const path = require("path")
const moment = require("moment-timezone");
const sharp = require('sharp');
const {
  spawn,
  exec, 
  execSync 
} = require('child_process');
const crypto = require('crypto');
const { Client } = require('ssh2');
const { TelegraPh, UploadFileUgu } = require('./start//lib/uploader');
const uploadImage = require('./start/lib/uploadImage.js')
const { 
  default:
  baileys,
  proto, 
  generateWAMessage,
  MessageType, 
  Mimetype,
  generateWAMessageFromContent,
  getContentType, 
  downloadAndSaveMediaMessage,
  generateWAMessageContent,
  downloadContentFromMessage,
  prepareWAMessageMedia
} = require("@whiskeysockets/baileys");
const { ok } = require('assert');

module.exports = dycoders = async (dycoders, m, chatUpdate, store) => {
  try {
    const body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
    const sender = m.key.fromMe ? dycoders.user.id.split(":")[0] + "@s.whatsapp.net" || dycoders.user.id : m.key.participant || m.key.remoteJid;
    const senderNumber = sender.split('@')[0];
    const budy = (typeof m.text === 'string' ? m.text : '');

    const from = m.key.remoteJid;
    const isGroup = from.endsWith("@g.us");
    const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
    const tumbn = global.tumb
const thumbnail = tumbn[Math.floor(Math.random() * tumbn.length)];
    const botNumber = await dycoders.decodeJid(dycoders.user.id);
const siowner = [dycoders.decodeJid(dycoders.user.id), ...global.rowner.map(([number]) => number), ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);

const prefix = ".";  
const isCmd = body.startsWith(prefix);  
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : null;

 
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const text = q = args.join(" ");
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || '';
    const qmsg = (quoted.msg || quoted);
    const isMedia = /image|video|sticker|audio/.test(mime);

 const groupMetadata = isGroup ? await dycoders.groupMetadata(m.chat).catch(() => ({})) : {};
const groupOwner = groupMetadata.owner || "";
const groupName = groupMetadata.subject || "";
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin !== null).map(v => v.id);
const groupMembers = participants.map(v => v.id);

    const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
    const isBotAdmins = groupAdmins.includes(botNumber);
    const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
    





    const { 
      smsg,
      formatSize,
      isUrl,
      generateMessageTag,
      getBuffer,
      getSizeMedia,
      runtime,
      fetchJson,
      sleep 
    } = require('./start/lib/myfunction');
const { pinterest, pinterest2, mediafire, tiktokDl } = require('./start/lib/scraper');

const formatp = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};



async function remini(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}



const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}
const Reply = async (teks) => {
return dycoders.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.saluran }, 
externalAdReply: {
title: botname, 
body: `© Created By dycoders.xyz`, 
thumbnailUrl: thumbnail, 
sourceUrl: null, 
}}}, {quoted: null})
}
if (!dycoders.public) {
if (!m.key.fromMe && !siowner) return;
}


async function quote(text, avatar, name) {
  const json = {
    type: "quote",
    format: "png",
    backgroundColor: "#FFFFFF",
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: name,
          photo: {
            url: avatar,
          },
        },
        text: text,
        replyMessage: {},
      },
    ],
  };
  const res = await axios.post("https://quotly.netorare.codes/generate", json, {
    headers: { "Content-Type": "application/json" },
  });
  const buffer =  Buffer.from(res.data.result.image, "base64")
  return buffer;
}
async function forbiden(txt) {
const Dyganteng = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
renderLargerThumbnail: true,
forwardedNewsletterMessageInfo: {
newsletterName: botname,
newsletterJid: "120363303267333730@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: `¥ dy_net ¥ `,
body: '로dycoders.xyz',
thumbnailUrl: global.forbiden,
sourceUrl: 'https://dycoders.xyz',
},
},
text: txt,
}
return dycoders.sendMessage(m.chat, Dyganteng, {
quoted: fswtag,
})
}




const premFile = path.join(__dirname, './start/lib/database/prem.json');

function loadPremium() {
    if (!fs.existsSync(premFile)) fs.writeFileSync(premFile, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(premFile));
}


function savePremium(data) {
    fs.writeFileSync(premFile, JSON.stringify(data, null, 2));
}

function isPremium(user) {
    let prem = loadPremium();
    return prem.includes(user);
}

const resellerFile = path.join(__dirname, './start/lib/database/reseller.json');

function loadReseller() {
    if (!fs.existsSync(resellerFile)) fs.writeFileSync(resellerFile, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(resellerFile));
}

function saveReseller(data) {
    fs.writeFileSync(resellerFile, JSON.stringify(data, null, 2));
}

function isReseller(user) {
    let resellers = loadReseller();
    return resellers.includes(user);
}

const dbPath = path.join(__dirname, './start/lib/database/pendaftar.json');

function loadDB() {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

function saveDB(db) {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

function getLimit(sender) {
    let db = loadDB();
    let user = db.find(u => u.nomer === sender);

    if (!user) {
        user = { nomer: sender, nama: m.pushName, limit: parseInt(global.limitawal) || 10 };
        db.push(user);
        saveDB(db);
    }

    return user.limit;
}

function uselimit(sender) {
    let db = loadDB();
    let index = db.findIndex(u => u.nomer === sender);

    if (index === -1) {
        db.push({ nomer: sender, nama: m.pushName, limit: parseInt(global.limitawal) || 10 });
        index = db.length - 1;
    }

    if (db[index].limit > 0) {
        db[index].limit -= 1;
        saveDB(db);
    }
}

function addLimit(sender, jumlah) {
    let db = loadDB();
    let user = db.find(u => u.nomer === sender);

    if (!user) {
        user = { nomer: sender, nama: m.pushName, limit: parseInt(global.limitawal) || 10 };
        db.push(user);
    }

    jumlah = parseInt(jumlah);
    if (isNaN(jumlah)) return console.log(`Error: jumlah limit bukan angka!`);

    user.limit += jumlah;
    saveDB(db);
}
let limitnya = getLimit(sender);

const totalFitur = () =>{
            var mytext = fs.readFileSync("./dy-case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

const fsaluran = { key : {remoteJid: '0@s.whatsapp.net',participant : '0@s.whatsapp.net'},message: {newsletterAdminInviteMessage: {newsletterJid: saluran,newsletterName: '',caption: body}}}

const fswtag = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { groupStatusMentionMessage: { message: { protocolMessage: { key: m.key,  type: 25 }}}}};
const qml = { 
    key: { remoteJid: "639692369842@s.whatsapp.net", participant: "639692369842@s.whatsapp.net" }, 
    message: { extendedTextMessage: { text: `` } } 
};
        const qtelkom = { 
    key: { remoteJid: "6281111111111@s.whatsapp.net", participant: "6281111111111@s.whatsapp.net" }, 
    message: { extendedTextMessage: { text: `` } } 
};
const qgopay = { 
    key: { remoteJid: "6281519434797@s.whatsapp.net", participant: "6281519434797@s.whatsapp.net" }, 
    message: { extendedTextMessage: { text: `` } } 
};
const qmeta = { key: { participant: "13135550002@s.whatsapp.net" },

		message: {

			"liveLocationMessage": {

				"caption": "verified",

				"h": '',

				'jpegThumbnail': global.image

			}

		}

	};
  
const qmeta2 = {

key: {remoteJid:"13135550002@s.whatsapp.net", participant:""},

message:{extendedTextMessage:{text:m.quoted}}

}
    const qtes = { 

    key: { remoteJid: "13135550002@s.whatsapp.net", participant: "" }, 

    message: { extendedTextMessage: { text: `tes123` } } 

};   
        const qpoll = {

key: {

remoteJid: '0@s.whatsapp.net',

participant: '0@s.whatsapp.net'

},

message: {

pollCreationMessage: {

name: 'Rass',

options: [

{ optionName: 'Opsi 1' },

{ optionName: 'Opsi 2' },

{ optionName: 'Opsi 3' }

],

selectableOptionsCount: 1

}

}

};
const qmp4 = {
key: {
remoteJid: '0@s.whatsapp.net',
participant: '0@s.whatsapp.net'
},
message: {
videoMessage: {
mimetype: 'video/mp4',
caption: 'Fake video message',
seconds: 30, 
gifPlayback: false 
}
}
};        
 const qswtag = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { groupStatusMentionMessage: { message: { protocolMessage: { key: m.key,  type: 25 }}}}};


    const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    
    if (m.message) {
      console.log('\x1b[30m--------------------\x1b[0m');
      console.log('\x1b[1m\x1b[41m\x1b[97m▢ New Message\x1b[0m');
      console.log('\x1b[42m\x1b[30m' +
    `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
    `   ⌬ Pengirim: ${m.pushName} \n` +
    `   ⌬ JID: ${senderNumber}\x1b[0m`
  );

    if (m.isGroup) {
      console.log('\x1b[42m\x1b[30m' +
      `   ⌬ Grup: ${groupName} \n` +
      `   ⌬ GroupJid: ${m.chat}\x1b[0m`
    );
  }

  console.log();
}

let mode = dycoders.public ? "Public" : "Self";





const cloudflare = ` 
*✨ hallo ${m.pushName} 👋, saya adalah dynet bot! ✨*  
_bot ini dikembangkan oleh_ dycoders.xyz 

╔══✪ 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝙗𝙤𝙩 ✪══╗  
║ 📛 *botname:* ${botname}  
║ 🔢 *version:* 1.1.0  
║ 🌐 *mode:* ${mode}  
║ 🧑‍💻 *creator:* dycoders.xyz  
╚═══════════════════╝  

╔══✪ 𝙘𝙡𝙤𝙪𝙙𝙛𝙡𝙖𝙧𝙚 𝙢𝙚𝙣𝙪 ✪══╗  
║ 🌐 *.subdomain1*= cloud-ku.my.id
║ 🌐 *.subdomain2*= mycloudpremiumid.xyz  
║ 🌐 *.subdomain3*= serverku-pterodactyl.web.id
║ 🌐 *.subdomain4*= pterodactyl-host.xyz
║ 🛠️ .*editdns* id|yes/no  
║ 📌 *.addiprules* note|ipvps  
║ 🌩 *.autocf* iddomain|ipvps
╚═══════════════════╝  

`
const cpanelnya = `
┏━━━⚡ *dynet bot* ⚡━━━┓  
┃ 👋 hallo ${m.pushName}, saya adalah dynet bot  
┃    yang dikembangkan oleh dycoders.xyz  
┗━━━━━━━━━━━━━━━━━━┛  

📌 *informasi bot:*  
┣╾📛 *botname:* ${botname}  
┣╾🔢 *version:* 1.1.0  
┣╾🌐 *mode:* ${mode}  
┣╾🧑‍💻 *creator:* dycoders.xyz  
┗━━━━━━━━━━━━━━━━━━┛  

📌 *berikut list cpanel:*  
┣╾ .1gb  
┣╾ .2gb  
┣╾ .3gb  
┣╾ .4gb  
┣╾ .5gb  
┣╾ .6gb  
┣╾ .7gb  
┣╾ .9gb  
┣╾ .10gb  
┣╾ .unli  
┣╾ .listsrv  
┣╾ .delsrv  
┣╾ .listusr  
┣╾ .delusr  
┣╾ .createadmin/adp
┗━━━━━━━━━━━━━━━━━━┛  

`


const cpnelnyav2 = `
┏━━━⚡ *dynet bot* ⚡━━━┓  
┃ 👋 hallo ${m.pushName}, saya adalah dynet bot  
┃    yang dikembangkan oleh dycoders.xyz  
┗━━━━━━━━━━━━━━━━━━┛  

📌 *informasi bot:*  
┣╾📛 *botname:* ${botname}  
┣╾🔢 *version:* 1.1.0  
┣╾🌐 *mode:* ${mode}  
┣╾🧑‍💻 *creator:* dycoders.xyz  
┗━━━━━━━━━━━━━━━━━━┛  

📌 *berikut list cpanel-v2:*  
┣╾ .1gb-v2 
┣╾ .2gb-v2 
┣╾ .3gb-v2  
┣╾ .4gb-v2  
┣╾ .5gb-v2  
┣╾ .6gb-v2  
┣╾ .7gb-v2
┣╾ .9gb-v2 
┣╾ .10gb-v2  
┣╾ .unli-v2  
┣╾ .listsrv-v2 
┣╾ .delsrv-v2
┣╾ .listusr-v2
┣╾ .delusr-v2
┣╾ .createadmin-v2/adp-v2
┗━━━━━━━━━━━━━━━━━━┛  

`



const allmenu = ` 
╭━━━〔 🤖 𝐃𝐘_𝐍𝐄𝐓 𝐁𝐎𝐓 〕━━━⬣  
│ 👋 _Hallo ${m.pushName}, selamat datang!_  
│ 🛠 Saya adalah *Dy_Net Bot*  
│ 🔧 Dikembangkan oleh *dycoders.xyz*  
╰━━━━━━━━━━━━━━━━⬣  

╭━━━〔 🏷 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 〕━━━⬣  
│ 📛 *Botname:* Dy_Net  
│ 🔢 *Version:* 1.1.0  
│ 🌐 *Mode:* ${mode}  
│ 🧑‍💻 *Creator:* dycoders.xyz  
╰━━━━━━━━━━━━━━━━⬣  

╭━━━〔 👑 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 〕━━━⬣  
│ ✨ .addprem [user]  
│ ✨ .delprem [user]  
│ ✨ .addreseller [number]
│ ✨ .delreseller [number]
│ ✨ .self
│ ✨ .public
│ ✨ .deletedns1 id
│ ✨ .deletedns2 id
│ ✨ .setdomain
│ ✨ .setplta
│ ✨ .setpltc
│ ✨ .setplta-v2
│ ✨ .setpltc-v2
│ ✨ .setdomain-v2
│ ✨ .ambilsw
│ ✨ .cekidgc
│ ✨ .addlimit
│ ✨ .setppbot
│ ✨ .getcase
│ ✨ .setbotname
│ ✨ .delsampah
│ ✨ .addowner nomer
│ ✨ .setwelcome on/off
╰━━━━━━━━━━━━━━━━⬣  

╭━━━〔 💾 𝐜𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮 〕━━━⬣  
│ 🗂 .1gb 
│ 🗂 .2gb
│ 🗂 .3gb
│ 🗂 .4gb
│ 🗂 .5gb
│ 🗂 .6gb
│ 🗂 .7gb
│ 🗂 .8gb
│ 🗂 .9gb
│ 🗂 .10gb
│ 🗂 .unli
│ 💽 .listsrv
│ 🗑 .delsrv id
│ 🗑 .delusr id
│ 👤 .listusr
│ 👤 .adp
╰━━━━━━━━━━━━━━━━⬣  

╭━━━〔 🖥 𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮 〕━━━⬣  
│ 🚀 .installpanel [ipvps|pwvps|panel.com|node.com]  
│ 🚀 .startwings ipvps|pwvps|token_node
│ 🐣 .ambileggs khusus eggs botwa
╰━━━━━━━━━━━━━━━━⬣  

╭━━━〔 ☁️ 𝐂𝐥𝐨𝐮𝐝𝐟𝐥𝐚𝐫𝐞 〕━━━⬣  
│ 🌐 .subdomain1 > cloud-ku.my.id
│ 🌐 .subdomain2 > mycloudpremium.xyz
│ 🌐 .subdomain3 > serverku-pterodactyl.web.id
│ 🌐 .subdomain4 > pterodactyl-host.xyz
│ 📝 .editdns id|yes/no
│ 📌 .addiprules note|ipvps  
│ 🌩️ .autocf iddomain|ipvps
╰━━━━━━━━━━━━━━━━⬣  

╭━━━〔 👥 𝐆𝐫𝐮𝐩 𝐌𝐞𝐧𝐮 〕━━━⬣  
│ 🚪 .kick [user]  
│ 🔓 .gc buka|tutup|info|member  
│ ⬆️ .promote [user]  
│ ⬇️ .demote [user]  
│ 🏷️ .tagall 
│ 👻 .hidetag [text]  
│ 🔗 .linkgc  
│ ♻️ .resetlinkgc  
╰━━━━━━━━━━━━━━━━⬣


╭━━━〔 🔧 𝐎𝐓𝐇𝐄𝐑 𝐓𝐎𝐎𝐋𝐒〕━━━⬣  
│ 📝 .bratvid teks
│ 📝 .brat teks
│ 📝 .sticker image/video
│ 🎥 .tiktok
│ 📁 .mediafire url
│ 📁 .git urlrepo
│ 📄 .post-paste
│ 🔗 .tourl img/video
│ 📚 .totalfitur
│ 🔍 .searchsubdo
│ 😎 .qc teks/reply
│ 📼 .toimg reply sticker
│ 💡 .hd/.remini reply img
╰━━━━━━━━━━━━━━━━⬣



📌 *Gunakan perintah dengan bijak!*  
💬 _Hubungi owner jika butuh bantuan._  
🚀 *Don't Forget Support dycoders.xyz*

`





const menunya = ` 
*_Hallo ${m.pushName}👋 Saya Adalah dynet Bot yang di kembanhkan Oleh dycoders.xyz*
   ╭──『 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 』
   │ 📛 *Botname:* dy_net
   │ 🔢 *Version:* 1.1.0
   │ 🌐 *Mode:* ${mode}
   │ 🧑‍💻 *Creator:* dycoders.xyz
   ╰───────────────── 
`



switch (command) {

case 'brat': {
if (limitnya < 1) return Reply(mess.limit);
if (!text) return Reply(`masukkan text nya juga`)

const apis1 = `https://vapis.my.id/api/bratv1?q=${text}`
await dycoders.sendImageAsSticker(m.chat, apis1, m, { packname: global.wmbot, author: global.wmbot })
}
uselimit(sender);
break;

case 's': case 'sticker': case 'stiker': {
if (!quoted) return Reply(`Reply gambar/video/gif dengan caption ${command}\nBatas durasi video 1-9 detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await dycoders.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.wm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return Reply(`Reply gambar/video/gif dengan caption ${command}\nBatas durasi video 1-9 detik`)
let media = await quoted.download()
let encmedia = await dycoders.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.wm })
} else {
Reply(`Reply gambar/video/gif dengan caption ${command}\nBatas durasi video 1-9 detik`)
}}
break

case 'bratvideo': case 'bratvid': {
const axios = require('axios');
const { execSync } = require('child_process')
  if (!text) return Reply(`Contoh: ${prefix+command} halo saya dycoders.xyz`)
  if (text.length > 40) return Reply(`Karakter terbatas, max 40 huruf character!`)
  const words = text.split(" ")
  const tempDir = path.join(process.cwd(), './start/tmp')
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
  const framePaths = []
  try {
    for (let i = 0; i < words.length; i++) {
      const currentText = words.slice(0, i + 1).join(" ")
      const res = await axios.get(
        `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`,
        { responseType: "arraybuffer" }
      ).catch((e) => e.response)
      const framePath = path.join(tempDir, `frame${i}.mp4`)
      fs.writeFileSync(framePath, res.data)
      framePaths.push(framePath)
    }
    const fileListPath = path.join(tempDir, "filelist.txt")
    let fileListContent = ""
    for (let i = 0; i < framePaths.length; i++) {
      fileListContent += `file '${framePaths[i]}'\n`
      fileListContent += `duration 0.7\n`
    }
    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
    fileListContent += `duration 2\n`
    fs.writeFileSync(fileListPath, fileListContent)
    const outputVideoPath = path.join(tempDir, "output.mp4")
    execSync(
      `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
    )
    await dycoders.sendImageAsSticker(m.chat, outputVideoPath, m, {
      packname: global.wmbot,
      author: global.wmbot
    })
    framePaths.forEach((frame) => {
      if (fs.existsSync(frame)) fs.unlinkSync(frame)
    })
    if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
    if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
  } catch (e) {
    console.error(e)
    Reply('Terjadi kesalahan')
  }
}
break

case 'createadmin': case 'adp': {  
if (!siowner) return forbiden(mess.owner)


    let t = text.split(',');  
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);  

    let username = t[0].trim();  
    let inputNumber = t[1].replace(/[^0-9]/g, '');  
    if (!inputNumber.startsWith('62')) inputNumber = '62' + inputNumber;  
    let u = inputNumber + '@s.whatsapp.net';  

    let email = username + "@dycoders.xyz";  
    let password = crypto.randomBytes(5).toString('hex');  

    try {  
        let userRes = await fetch(`${domain}/api/application/users`, {  
            method: "POST",  
            headers: {  
                "Accept": "application/json",  
                "Content-Type": "application/json",  
                "Authorization": `Bearer ${apikey}`  
            },  
            body: JSON.stringify({  
                email,  
                username,  
                first_name: username,  
                last_name: username,  
                language: "en",  
                password,  
                root_admin: true 
                
            })  
        });  

        let userData = await userRes.json();  
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));  

        dycoders.sendMessage(u, {  
            image: { url: thumbnail },  
            caption: "🔹 *DATA ADMIN PANEL ANDA* 🔹",
            footer: wm,  
            buttons: [  
                {  
                    buttonId: 'action',  
                    buttonText: { displayText: '🔗 Akses Panel' },  
                    type: 4,  
                    nativeFlowInfo: {  
                        name: 'single_select',  
                        paramsJson: JSON.stringify({  
                            title: '🔹 Akun Admin Panel anda 🔹',  
                            sections: [  
                                {  
                                    title: wm,  
                                    highlight_label: 'Login Info',  
                                    rows: [  
                                        {  
                                            header: '🌍 Panel Login',  
                                            title: '',  
                                            description: `${domain}`,  
                                            id: '.panel',  
                                        },  
                                        {  
                                            header: '👤 Copy Username',  
                                            title: '',  
                                            description: `username: ${username}`,  
                                            id: '.copyuser',  
                                        },  
                                        {  
                                            header: '🔒 Copy Password',  
                                            title: '',  
                                            description: `password:${password}`,  
                                            id: '.copypass',  
                                        }  
                                    ],  
                                },  
                            ],  
                        }),  
                    },  
                },  
            ],  
            headerType: 1,  
            viewOnce: true  
        });  

        m.reply(`✅ *Akun berhasil dibuat!* \n\n📩 Data telah dikirim ke nomor: *${inputNumber}*`);  

    } catch (error) {  
        console.error(error);  
        m.reply("❌ Terjadi kesalahan saat membuat akun. Cek kembali konfigurasi dan input Anda.");  
    }  
    break;  
}

case 'createadmin-v2': case 'adp-v2': {  
if (!siowner) return forbiden(mess.owner)


    let t = text.split(',');  
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);  

    let username = t[0].trim();  
    let inputNumber = t[1].replace(/[^0-9]/g, '');  
    if (!inputNumber.startsWith('62')) inputNumber = '62' + inputNumber;  
    let u = inputNumber + '@s.whatsapp.net';  

    let email = username + "@dycoders.xyz";  
    let password = crypto.randomBytes(5).toString('hex');  

    try {  
        let userRes = await fetch(`${cpanelv2}/api/application/users`, {  
            method: "POST",  
            headers: {  
                "Accept": "application/json",  
                "Content-Type": "application/json",  
                "Authorization": `Bearer ${siptakey2}`  
            },  
            body: JSON.stringify({  
                email,  
                username,  
                first_name: username,  
                last_name: username,  
                language: "en",  
                password,  
                root_admin: true 
                
            })  
        });  

        let userData = await userRes.json();  
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));  

        dycoders.sendMessage(u, {  
            image: { url: thumbnail },  
            caption: "🔹 *DATA ADMIN PANEL ANDA* 🔹",
            footer: wm,  
            buttons: [  
                {  
                    buttonId: 'action',  
                    buttonText: { displayText: '🔗 Akses Panel' },  
                    type: 4,  
                    nativeFlowInfo: {  
                        name: 'single_select',  
                        paramsJson: JSON.stringify({  
                            title: '🔹 Akun Admin Panel anda 🔹',  
                            sections: [  
                                {  
                                    title: wm,  
                                    highlight_label: 'Login Info',  
                                    rows: [  
                                        {  
                                            header: '🌍 Panel Login',  
                                            title: '',  
                                            description: `${domain}`,  
                                            id: '.panel',  
                                        },  
                                        {  
                                            header: '👤 Copy Username',  
                                            title: '',  
                                            description: `username: ${username}`,  
                                            id: '.copyuser',  
                                        },  
                                        {  
                                            header: '🔒 Copy Password',  
                                            title: '',  
                                            description: `password:${password}`,  
                                            id: '.copypass',  
                                        }  
                                    ],  
                                },  
                            ],  
                        }),  
                    },  
                },  
            ],  
            headerType: 1,  
            viewOnce: true  
        });  

        m.reply(`✅ *Akun berhasil dibuat!* \n\n📩 Data telah dikirim ke nomor: *${inputNumber}*`);  

    } catch (error) {  
        console.error(error);  
        m.reply("❌ Terjadi kesalahan saat membuat akun. Cek kembali konfigurasi dan input Anda.");  
    }  
    break;  
}


case 'addreseller': {

 if (!siowner) return forbiden(mess.owner)

    if (!text) return Reply("Masukkan nomor! Contoh: .addreseller 628xxx");

    let number = text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    let resellers = loadReseller();

    if (resellers.includes(number)) return Reply("User sudah menjadi reseller!");

    resellers.push(number);
    saveReseller(resellers);

  Reply(`✅ Berhasil menambahkan ${number} sebagai reseller!`);
    break;
}

case 'delreseller': {
   if (!siowner) return forbiden(mess.owner)

    if (!text) return Reply("Masukkan nomor! Contoh: .delreseller 628xxx");

    let number = text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    let resellers = loadReseller();

    if (!resellers.includes(number)) return Reply("User tidak ada dalam daftar reseller!");

    resellers = resellers.filter(user => user !== number);
    saveReseller(resellers);

    Reply(`✅ Berhasil menghapus ${number} dari daftar reseller!`);
    break;
}



case 'self': {
                 if (!siowner) return forbiden(mess.owner)
                dycoders.public = false
                Reply(`𝙱𝚎𝚛𝚊𝚕𝚒𝚑 𝚔𝚎 𝚖𝚘𝚍𝚎 𝚜𝚎𝚕𝚏!`)
            }
            break
            case 'public': {
                 if (!siowner) return forbiden(mess.owner)
                dycoders.public = true
                Reply(`𝙱𝚎𝚛𝚊𝚕𝚒𝚑 𝚔𝚎 𝚖𝚘𝚍𝚎 𝚙𝚞𝚋𝚕𝚒??!`)
            }
            break
            
case 'ping': case 'botstatus': {
  const os = require('os');
const fs = require('fs');
const { performance } = require('perf_hooks');
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.values(cpu.times).reduce((last, time) => last + time, 0);
        return cpu;
    });

    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        Object.keys(cpu.times).forEach(type => {
            last.times[type] += cpu.times[type];
        });
        return last;
    }, {
        speed: 0,
        total: 0,
        times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
    });

    let timestamp = performance.now();
    let latensi = performance.now() - timestamp;

    let oldd = performance.now();
    await new Promise(resolve => setTimeout(resolve, 100)); 
    let neww = performance.now();

    let respon = `Kecepatan Respon ${latensi.toFixed(4)} _detik_\n${(neww - oldd).toFixed(2)} _milidetik_

🔋 Waktu Berjalan
RUN: ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

💽 _NodeJS Memory Usage_
${Object.keys(used).map(key => `${key}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed.toFixed(2)} MHz)
${Object.keys(cpu.times).map(type => `- *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHz)
${Object.keys(cpu.times).map(type => `- *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
    `.trim();
let invite = generateWAMessageFromContent(from, proto.Message.fromObject({
groupInviteMessage: {
groupJid: idgc,
inviteCode: "JU36ze/gq5VH4UTR",
inviteExpiration: 86400,
groupName: `⚡ᴋᴇᴄᴇᴘᴀᴛᴀɴ ʀᴇsᴘᴏɴ`,
jpegThumbnailUrl: thumbnail, 
caption: respon                       
}}), { userJid: m.sender, quoted: fswtag})
await dycoders.relayMessage(m.chat, invite.message, { messageId: invite.key.id })
  }
break;
case 'menu': {
    dycoders.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }});

    await dycoders.sendMessage(m.chat, {
        image: { url: thumbnail },
        caption: menunya,
        footer: wm,
        buttons: [
            {
                buttonId: '.ping',
                buttonText: { displayText: 'Response Bot' },
                type: 1,
            },
            {
                buttonId: '.tqto',
                buttonText: { displayText: 'TQ TO' },
                type: 1,
            },
            {
                buttonId: '.owner',
                buttonText: { displayText: 'Owner Bot' },
                type: 1,
            },
            {
                buttonId: 'action',
                buttonText: { displayText: 'kntol' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Select Here!',
                        sections: [
                            {
                                title: wm,
                                highlight_label: 'All Fitur',
                                rows: [
                                    {
                                        header: 'All Menu',
                                        title: '',
                                        description: 'Display to show all menu',
                                        id: '.allmenu',
                                    }
                                ],
                            },
                            {
                                title: 'CPanel Management',
                                highlight_label: 'Cpanel',
                                rows: [
                                    {
                                        header: 'CPanel',
                                        title: '',
                                        description: 'Access to CPanel settings',
                                        id: '.cpanel',
                                    },
                                    {
                                        header: 'CPanel V2',
                                        title: '',
                                        description: 'Access to CPanel V2 settings',
                                        id: '.cpanelv2',
                                    }
                                ],
                            },
                            {
                                title: 'Cloudflare Management',
                                highlight_label: 'CloudFlare',
                                rows: [
                                    {
                                        header: 'Cloudflare',
                                        title: '',
                                        description: 'Subdomain cloudflare',
                                        id: '.cloudflaremenu',
                                    }
                                ],
                            }
                        ],
                    }),
                },
            },
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: fsaluran });

}
break;

case 'tqto': {
    let teks = `*╔══❖✦✦❖══╗*\n      *TQ TO*\n*╚══❖✦✦❖══╝*\n\n🔹 *DyCoders* (Developer)\n🔹 *Member dycoders* (Support)\n🔹 *Asta-store* My friends`;

    await dycoders.sendMessage(m.chat, {
        image: { url: thumbnail },
        caption: teks,
        footer: wm,
        buttons: [
            {
                buttonId: '.menu',
                buttonText: { displayText: 'Back to Menu' },
                type: 1,
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: m });

}
break;



case 'allmenu': {
await dycoders.sendMessage(m.chat,
    {
        product: {
            productImage: { url: thumbnail }, 
            productImageCount: 1,
            title: "INI MENU NYA",
            description: "MAAF JIKA MASIH DIKIT SC MASIH DALAM PERKEMBANGAN", 
            priceAmount1000: 20000 * 1000,
            currencyCode: "IDR", 
            retailerId: "100000", 
            url: "https://dycoders.xyz",    
        },
        businessOwnerJid: m.sender,
        caption: allmenu, 
        title: wmbot,
        footer: "dycoders.xyz", 
        media: true,
        viewOnce: true, 
        shop: "WA",
        id: "171123",
    },
  {
    quoted : fsaluran
  }
)
}
break

case 'cpanelv2': {
await dycoders.sendMessage(m.chat,
    {
        product: {
            productImage: { url: 'https://files.catbox.moe/nmptrt.jpg' }, 
            productImageCount: 1,
            title: "MENU CPANEL-V2",
            description: "cpanel-v2", 
            priceAmount1000: 200000 * 10000,
            currencyCode: "IDR", 
            retailerId: "100000", 
            url: "https://dycoders.xyz",    
        },
        businessOwnerJid: m.sender,
        caption: cpnelnyav2, 
        title: wmbot,
        footer: "dycoders.xyz", 
        media: true,
        viewOnce: true, 
        shop: "WA",
        id: "171123",
    },
  {
    quoted : fsaluran
  }
)
}
break
case 'cpanel': {
await dycoders.sendMessage(m.chat,
    {
        product: {
            productImage: { url: 'https://files.catbox.moe/nmptrt.jpg' }, // Masukkan link gambar di tanda kutip
            productImageCount: 1,
            title: "Cpanel Pterodactyl", // input title in thumbnail
            description: "Reseller only", // G usah kalo gw
            priceAmount1000: 50000 * 1000, // harga
            currencyCode: "IDR", // indonesia 
            retailerId: "100000", 
            url: "https://files.catbox.moe/nmptrt.jpg", // G usah kalo gw           
        },
        businessOwnerJid: m.sender,
        caption: cpanelnya, //, input caption
        title: wmbot, // Input title product
        footer: "dycoders.xyz", // G usah kalo gw
        media: true,
        viewOnce: true, 
        shop: "WA",
        id: "171123",
    },
  {
    quoted : fswtag
  }
)
}
break

	case 'cloudflaremenu': {
dycoders.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }})
await dycoders.sendMessage(m.chat, {
   image: {url: thumcloud},
   caption: cloudflare,
   footer: wm,
   buttons: [
   {
    buttonId: '.ping',
    buttonText: {
      displayText: 'Response Bot'
    },
    type: 1,
  },
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Owner Bot'
    },
    type: 1,
  }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m })
}
break



case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
  if (!isReseller(sender)) return Reply("Fitur ini hanya untuk reseller!");


    if (!text) return Reply("username,nomor");

    let t = text.split(',');
    if (t.length < 2) return Reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    if (!inputNumber.startsWith('62')) inputNumber = '62' + inputNumber;
    let u = inputNumber + '@s.whatsapp.net';

   

    let ram, disknya, cpu;
    if (command == "1gb") {
        ram = "1000"; disknya = "1000"; cpu = "40";
    } else if (command == "2gb") {
        ram = "2000"; disknya = "1000"; cpu = "60";
    } else if (command == "3gb") {
        ram = "3000"; disknya = "2000"; cpu = "80";
    } else if (command == "4gb") {
        ram = "4000"; disknya = "2000"; cpu = "100";
    } else if (command == "5gb") {
        ram = "5000"; disknya = "3000"; cpu = "120";
    } else if (command == "6gb") {
        ram = "6000"; disknya = "3000"; cpu = "140";
    } else if (command == "7gb") {
        ram = "7000"; disknya = "4000"; cpu = "160";
    } else if (command == "8gb") {
        ram = "8000"; disknya = "4000"; cpu = "180";
    } else if (command == "9gb") {
        ram = "9000"; disknya = "5000"; cpu = "200";
    } else if (command == "10gb") {
        ram = "10000"; disknya = "5000"; cpu = "220";
    } else {
        ram = "0"; disknya = "0"; cpu = "0";
    }
    let name = username;  
    let egg = `${eggnya}`;  
    let loc = `${locnya}`;  
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server ${command.toUpperCase()} - Aktif 1 Bulan`;

    try {

   
        let userRes = await fetch(`${domain}/api/application/users`, {  
            method: "POST",  
            headers: {  
                "Accept": "application/json",  
                "Content-Type": "application/json",  
                "Authorization": `Bearer ${apikey}`  
            },  
            body: JSON.stringify({  
                email,  
                username,  
                first_name: username,  
                last_name: username,  
                language: "en",  
                password  
            })  
        });  
        let userData = await userRes.json();  
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));  
        let user = userData.attributes;  

        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {  
            method: "GET",  
            headers: {  
                "Accept": "application/json",  
                "Content-Type": "application/json",  
                "Authorization": `Bearer ${apikey}`  
            }  
        });  
        let eggData = await eggRes.json();  
        let startupCmd = eggData.attributes.startup;  

        let serverRes = await fetch(`${domain}/api/application/servers`, {  
            method: "POST",  
            headers: {  
                "Accept": "application/json",  
                "Content-Type": "application/json",  
                "Authorization": `Bearer ${apikey}`  
            },  
            body: JSON.stringify({  
                name,  
                description: deskripsi,  
                user: user.id,  
                egg: parseInt(egg),  
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",  
                startup: startupCmd,  
                environment: {  
                    "INST": "npm",  
                    "USER_UPLOAD": "0",  
                    "AUTO_UPDATE": "0",  
                    "CMD_RUN": "npm start"  
                },  
                limits: {  
                    memory: ram,  
                    swap: 0,  
                    disk: disknya,  
                    io: 500,  
                    cpu: cpu  
                },  
                feature_limits: {  
                    databases: 0,  
                    backups: 0,  
                    allocations: 0  
                },  
                deploy: {  
                    locations: [parseInt(loc)],  
                    dedicated_ip: false,  
                    port_range: []  
                }  
            })  
        });  
        let serverData = await serverRes.json();  
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));  
let server = serverData.attributes;  

        dycoders.sendMessage(u, {
            image: { url: thumbnail },
            caption: "🔹 *DATA PANEL ANDA* 🔹",
            footer: wm,
            buttons: [
                {
                    buttonId: '.ping',
                    buttonText: { displayText: '✅ Test Response' },
                    type: 1,
                },
                {
                    buttonId: 'action',
                    buttonText: { displayText: '🔗 Akses Panel' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: '🔹 Data Panel Anda 🔹',
                            sections: [
                                {
                                    title: wm,
                                    highlight_label: 'Login Info',
                                    rows: [
                                        {
                                            header: '🌍 Panel Login',
                                            title: '',
                                            description: `${domain}`,
                                            id: '.panel',
                                        },
                                        {
                                            header: '👤 Copy Username',
                                            title: '',
                                            description: `username: ${username}`,
                                            id: '.copyuser',
                                        },
                                        {
                                            header: '🔒 Copy Password',
                                            title: '',
                                            description: `password: ${password}`,
                                            id: '.copypass',
                                        }
                                    ],
                                },
                            ],
                        }),
                    },
                },
            ],
            headerType: 1,
            viewOnce: true
        });

        Reply(`✅ *Akun & server berhasil dibuat!* \n\n📩 Data telah dikirim ke nomor: *${inputNumber}*`);

    } catch (error) {
        console.error(error);
        Reply("❌ Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}


case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
  if (!isReseller(sender)) return Reply("Fitur ini hanya untuk reseller!");


    if (!text) return Reply("username,nomor");

    let t = text.split(',');
    if (t.length < 2) return Reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    if (!inputNumber.startsWith('62')) inputNumber = '62' + inputNumber;
    let u = inputNumber + '@s.whatsapp.net';

   

    let ram, disknya, cpu;
    if (command == "1gb-v2") {
        ram = "1000"; disknya = "1000"; cpu = "40";
    } else if (command == "2gb-v2") {
        ram = "2000"; disknya = "1000"; cpu = "60";
    } else if (command == "3gb-v2") {
        ram = "3000"; disknya = "2000"; cpu = "80";
    } else if (command == "4gb-v2") {
        ram = "4000"; disknya = "2000"; cpu = "100";
    } else if (command == "5gb-v2") {
        ram = "5000"; disknya = "3000"; cpu = "120";
    } else if (command == "6gb-v2") {
        ram = "6000"; disknya = "3000"; cpu = "140";
    } else if (command == "7gb-v2") {
        ram = "7000"; disknya = "4000"; cpu = "160";
    } else if (command == "8gb-v2") {
        ram = "8000"; disknya = "4000"; cpu = "180";
    } else if (command == "9gb-v2") {
        ram = "9000"; disknya = "5000"; cpu = "200";
    } else if (command == "10gb-v2") {
        ram = "10000"; disknya = "5000"; cpu = "220";
    } else {
        ram = "0"; disknya = "0"; cpu = "0";
    }
    let name = username;  
    let egg = `${eggnya}`;  
    let loc = `${locnya}`;  
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server ${command.toUpperCase()} - Aktif 1 Bulan`;

    try {

   
        let userRes = await fetch(`${cpanelv2}/api/application/users`, {  
            method: "POST",  
            headers: {  
                "Accept": "application/json",  
                "Content-Type": "application/json",  
                "Authorization": `Bearer ${siptakey2}`  
            },  
            body: JSON.stringify({  
                email,  
                username,  
                first_name: username,  
                last_name: username,  
                language: "en",  
                password  
            })  
        });  
        let userData = await userRes.json();  
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));  
        let user = userData.attributes;  

        let eggRes = await fetch(`${cpanelv2}/api/application/nests/5/eggs/${egg}`, {  
            method: "GET",  
            headers: {  
                "Accept": "application/json",  
                "Content-Type": "application/json",  
                "Authorization": `Bearer ${siptakey2}`  
            }  
        });  
        let eggData = await eggRes.json();  
        let startupCmd = eggData.attributes.startup;  

        let serverRes = await fetch(`${cpanelv2}/api/application/servers`, {  
            method: "POST",  
            headers: {  
                "Accept": "application/json",  
                "Content-Type": "application/json",  
                "Authorization": `Bearer ${siptakey2}`  
            },  
            body: JSON.stringify({  
                name,  
                description: deskripsi,  
                user: user.id,  
                egg: parseInt(egg),  
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",  
                startup: startupCmd,  
                environment: {  
                    "INST": "npm",  
                    "USER_UPLOAD": "0",  
                    "AUTO_UPDATE": "0",  
                    "CMD_RUN": "npm start"  
                },  
                limits: {  
                    memory: ram,  
                    swap: 0,  
                    disk: disknya,  
                    io: 500,  
                    cpu: cpu  
                },  
                feature_limits: {  
                    databases: 0,  
                    backups: 0,  
                    allocations: 0  
                },  
                deploy: {  
                    locations: [parseInt(loc)],  
                    dedicated_ip: false,  
                    port_range: []  
                }  
            })  
        });  
        let serverData = await serverRes.json();  
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));  
let server = serverData.attributes;  

        dycoders.sendMessage(u, {
            image: { url: thumbnail },
            caption: "🔹 *DATA PANEL ANDA* 🔹",
            footer: wm,
            buttons: [
                {
                    buttonId: '.ping',
                    buttonText: { displayText: '✅ Test Response' },
                    type: 1,
                },
                {
                    buttonId: 'action',
                    buttonText: { displayText: '🔗 Akses Panel' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: '🔹 Data Panel Anda 🔹',
                            sections: [
                                {
                                    title: wm,
                                    highlight_label: 'Login Info',
                                    rows: [
                                        {
                                            header: '🌍 Panel Login',
                                            title: '',
                                            description: `${cpanelv2}`,
                                            id: '.panel',
                                        },
                                        {
                                            header: '👤 Copy Username',
                                            title: '',
                                            description: `username: ${username}`,
                                            id: '.copyuser',
                                        },
                                        {
                                            header: '🔒 Copy Password',
                                            title: '',
                                            description: `password: ${password}`,
                                            id: '.copypass',
                                        }
                                    ],
                                },
                            ],
                        }),
                    },
                },
            ],
            headerType: 1,
            viewOnce: true
        });

        Reply(`✅ *Akun & server berhasil dibuat!* \n\n📩 Data telah dikirim ke nomor: *${inputNumber}*`);

    } catch (error) {
        console.error(error);
        Reply("❌ Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}


case 'tagsw': case 'upsw': {
    
    const stat = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": "","fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./start/lib/dy.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
    if (!text) return Reply(`Masukkan teks untuk caption status dan. reply \n- video\n- gambar\n- audio\n- text`);
    let [caption, jid] = text.split('|');
    if (!jid) return Reply("Masukkan JID setelah tanda '|'");
    
    let media = null;
    let options = {};
    const jids = [jid.trim()];
    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: caption || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: caption || m.quoted.text || '',
            };
         } else if (mime.includes('audio')) {
            media = await m.quoted.download();
            options = {
                audio: media,
                mimetype: 'audio/mp4',
                ptt: true,
            };
        } else {
            options = {
                text: caption || m.quoted.text || '',
            };
        }
    } else {
        options = {
            text: caption || m.quoted.text,
        };
    }
const randomColor = () => {
const randomHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
return `#${randomHex()}${randomHex()}${randomHex()}`;
};
await dycoders.sendMessage("status@broadcast", options, {
        backgroundColor: randomColor(),
        textArgb: 0xffffffff,
        font: 1,
        statusJidList: await (await dycoders.groupMetadata(jid.trim())).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((j) => ({
                            tag: "to",
                            attrs: { jid: j },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
await dycoders.sendMessage(jid.trim(), {
text: `@${jid.trim()}`,
contextInfo: {
mentionedJid: [jid.trim()], 
groupMentions: [
   {
groupSubject: `group ini disebut`,
groupJid: jid.trim(),
 }, ], },},{quoted: fswtag });
}
break;


case 'cekidgc': {
if (!siowner) return forbiden(mess.owner)
    try {
     
        const allGroups = await dycoders.groupFetchAllParticipating();
        if (!allGroups || allGroups.length === 0) {
            return Reply('❌ Bot tidak bergabung dalam grup manapun!');
        }

  
        let groupList = Object.values(allGroups).map((group, index) => {
            return `*${index + 1}.* 📋 *Grup name:* ${group.subject}\n*ID Grup:* ${group.id}\n🔗 Format: wa.me/${group.id.replace('@g.us', '')}`;
        }).join('\n\n');

      Reply(`*Daftar ID Grup WhatsApp yang Diikuti:*\n\n${groupList}`);
    } catch (error) {
        console.error(error);
        Reply('❌ Terjadi kesalahan saat membaca daftar grup.');
    }
}
break;





case 'ambilsw':{

    const quotedMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMessage) return reply("📌 Balas pesan gambar/video yang ingin diambil!");

    if (quotedMessage.imageMessage) {
        let imageUrl = await dycoders.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        return dycoders.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
        let videoUrl = await dycoders.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        return dycoders.sendMessage(m.chat, { video: { url: videoUrl } }, { quoted: m });
    }

    return Reply("❌ Hanya bisa mengambil gambar atau video dari pesan yang dikutip!");
}
break;


case 'ambileggs': {
    let filePath = './start/lib/eggs.zip';

 
    const fs = require('fs');
    if (!fs.existsSync(filePath)) {
        return Reply('❌ File eggs.zip tidak ditemukan!');
    }

    // Kirim file
    dycoders.sendMessage(m.chat, { 
        document: { url: filePath }, 
        mimetype: 'application/zip', 
        fileName: 'eggs.zip'
    }, { quoted: m });

    break;
}
async function replaceValueInSettings(key, value, m) {
    const settingsPath = path.join(__dirname, 'config.js');

    try {
        let settings = fs.readFileSync(settingsPath, 'utf8');
        
        console.log("🔍 DEBUG: File config.js terbaca:", settings);

        
        console.log("🔍 DEBUG: File config.js terbaca:", settings); // Cek apakah file terbaca

        
        console.log("🔍 DEBUG: File config.js terbaca:", settings);

        
        let regex = new RegExp(`(global\\.${key}\\s*=\\s*)(["'\`]?)(.*?)(\\2)(?=;|\\n|$)`, 'g');

        if (regex.test(settings)) {
            let formattedValue = typeof value === "string" ? `"${value}"` : value;
            settings = settings.replace(regex, `$1${formattedValue};`);
            fs.writeFileSync(settingsPath, settings, 'utf8');

            Reply(`✅ *${key} berhasil diperbarui!*\n➡️ *${value}*`);


        } else {
            Reply(`❌ *${key} tidak ditemukan di config.js!*`);
        }
    } catch (err) {
        console.error("❌ ERROR: Gagal membaca atau menulis file!", err);
        Reply('❌ Gagal memperbarui setting!');
    }
}
case 'setplta': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply('❌ Masukkan API key Pterodactyl!\nContoh: `.setplta ptla_xxxx`');
    await replaceValueInSettings('apikey', text, m);
    break;
}

case 'setpltc': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply('❌ Masukkan API key kedua!\nContoh: `.setpltc ptlc_xxxx`');
    await replaceValueInSettings('capikey', text, m);
    break;
}

case 'setdomain': {
    if (!siowner) return forbiden(mess.owner);
    if (!text.startsWith('http')) return Reply('❌ Masukkan URL domain yang valid!\nContoh: `.setdomain https://yourpanel.com`');
    await replaceValueInSettings('domain', text, m);
    break;
}

case 'setplta-v2': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply('❌ Masukkan API key Pterodactyl V2!\nContoh: `.setplta-v2 ptla_xxxx`');
    await replaceValueInSettings('siptakey2', text, m);
    break;
}

case 'setpltc-v2': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply('❌ Masukkan API key kedua V2!\nContoh: `.setpltc-v2 ptlc_xxxx`');
    await replaceValueInSettings('sipltcikey2', text, m);
    break;
}

case 'setdomain-v2': {
    if (!siowner) return forbiden(mess.owner);
    if (!text.startsWith('http')) return Reply('❌ Masukkan URL domain yang valid!\nContoh: `.setdomain-v2 https://yourpanel.com`');
    await replaceValueInSettings('cpanelv2', text, m);
    break;
}

async function updateConfigValue(key, value, m) {
    const settingsPath = path.join(__dirname, 'config.js');
    

    try {
        let settings = fs.readFileSync(settingsPath, 'utf8');

async function updateConfigValue(key, value, m) {
    const settingsPath = path.join(__dirname, 'config.js');

    try {
        let settings = fs.readFileSync(settingsPath, 'utf8');

       
        let regex = new RegExp(`(global\\.${key}\\s*=\\s*)(true|false)(?=;|\\n|$)`, 'g');

        if (regex.test(settings)) {
            settings = settings.replace(regex, `$1${value};`);
            fs.writeFileSync(settingsPath, settings, 'utf8');

            Reply(`✅ *Welcome berhasil diubah ke ${value.toUpperCase()}!*`);
        } else {
            Reply(`❌ *Setting ${key} tidak ditemukan di config.js!*`);
        }
    } catch (err) {
        console.error("❌ ERROR:", err);
        Reply('❌ Gagal memperbarui setting!');
    }

case 'setwelcome': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply('❌ Masukkan `on` atau `off`!\nContoh: `.welcome on` atau `.welcome off`');

    let value = text.toLowerCase() === "on" ? "true" : text.toLowerCase() === "off" ? "false" : null;
    if (value === null) return Reply('❌ Pilih `on` atau `off` saja!');

    await updateConfigValue('welcome', value, m);
    break;
}


case "uninstallpanel": {
    if (!text || !text.split("|")) return Reply("ipvps|pwvps")
    var vpsnya = text.split("|")
    if (vpsnya.length < 2) return Reply("ipvps|pwvps|domain")
    let ipvps = vpsnya[0]
    let passwd = vpsnya[1]

    const connSettings = {
        host: ipvps, port: '22', username: 'root', password: passwd
    }
    
    const uninstallCommand = `bash <(curl -s https://pterodactyl-installer.se)`;
    const removeSSLCommand = `rm -rf /etc/letsencrypt && systemctl restart nginx`;
    const boostmysql = `\n`;

    const ress = new Client();
    ress.on('ready', async () => {
        await Reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selesai...")

        ress.exec(uninstallCommand, async (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {

                // Eksekusi perintah boostmysql
                ress.exec(boostmysql, async (err, stream) => {
                    if (err) throw err;
                    stream.on('close', async (code, signal) => {
                        await m.reply("Berhasil *uninstall* server panel ✅\nMenghapus SSL & restart Nginx...")

                        // Eksekusi perintah hapus SSL & restart Nginx
                        ress.exec(removeSSLCommand, async (err, stream) => {
                            if (err) throw err;
                            stream.on('close', async (code, signal) => {
                                await m.reply("SSL berhasil dihapus dan Nginx telah direstart ✅")
                                ress.end();
                            }).stderr.on('data', (data) => {
                                Rply('Error saat menghapus SSL: ' + data);
                            });
                        });

                    }).on('data', async (data) => {
                        await console.log(data.toString())
                        if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
                            await stream.write("\x09\n")
                        }
                    }).stderr.on('data', (data) => {
                        m.reply('Berhasil Uninstall Server Panel ✅');
                    });
                });

            }).on('data', async (data) => {
                await console.log(data.toString())
                if (data.toString().includes(`Input 0-6`)) {
                    await stream.write("6\n")
                }
                if (data.toString().includes(`(y/N)`)) {
                    await stream.write("y\n")
                }
                if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
                    await stream.write("\n")
                }
                if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
                    await stream.write("\n")
                }
            }).stderr.on('data', (data) => {
                m.reply('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        Reply('Kata sandi atau IP tidak valid');
    }).connect(connSettings);
}
break;





       case 'getpp': {
    let nomorTelepon;
    if (m.quoted) {
        const quotedParticipant = m.quoted.sender || m.quoted.from;
        nomorTelepon = quotedParticipant; 
    } if (!nomorTelepon && text && text.length >= 6) {
        nomorTelepon = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'; 
    } if (!nomorTelepon) {
        return Reply('Silakan masukkan nomor telepon yang valid atau Reply/tag nomor yang ingin diambil PP-nya. Contoh: `getpp +6287862115557`');
    } try {
        var ppuser = await dycoders.profilePictureUrl(nomorTelepon, 'image');
    } catch (err) {
        var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
    }  
    dycoders.sendMessage(m.chat, { image: { url: ppuser } }, { quoted: m });
}
    break;     
    
case "startwings": case "configurewings": {

let t = text.split('|')
if (t.length < 3) return Reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await Reply("*Berhasil menjalankan wings 🔥*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
Reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

    
    
    
    
case 'listsrv': { 
if (!isReseller(sender)) return Reply("Fitur ini hanya untuk reseller!");
    let page = args[0] ? args[0] : '1'; 

    let f = await fetch(domain + "/api/application/servers?page=" + page, { 
        "method": "GET", 
        "headers": { 
            "Accept": "application/json", 
            "Content-Type": "application/json", 
            "Authorization": "Bearer " + apikey 
        } 
    }); 

    let res = await f.json(); 
    let servers = res.data; 
    let rows = []; 

    for (let server of servers) { 
        let s = server.attributes;  
        
        // Fetch status server
        let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", { 
            "method": "GET", 
            "headers": { 
                "Accept": "application/json", 
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + capikey 
            } 
        }); 
        let data = await f3.json(); 
        let status = data.attributes ? data.attributes.current_state : s.status; 

      
        let f4 = await fetch(domain + "/api/application/users/" + s.user, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
            }
        });
        let userData = await f4.json();
        let username = userData.attributes ? userData.attributes.username : "Unknown"; 


        rows.push({
            header: `Server ID: ${s.id}`,
            title: `${s.name} (${username})`,
            description: `Status: ${status}`,
            id: `.delsrv ${s.id}`, 
        });
    } 

    let buttons = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Manage Servers' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: 'Server List',
                    sections: [
                        {
                            title: 'Daftar Server',
                            highlight_label: 'Klik untuk hapus server',
                            rows: rows
                        }
                    ]
                })
            }
        }
    ];

    if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
        buttons.push({
            buttonId: `.listsrv ${res.meta.pagination.current_page + 1}`,
            buttonText: { displayText: `Halaman ${res.meta.pagination.current_page + 1}` },
            type: 1
        });
    }

    await dycoders.sendMessage(m.chat, { 
        text: `🔹 *List Server (Halaman ${res.meta.pagination.current_page})*`,
        footer: wm,
        buttons: buttons,
        headerType: 1, 
        viewOnce: true 
    }, { quoted: fsaluran }); 

} break;


case 'delusr': {
 if (!siowner) return forbiden(mess.owner)
let usr = args[0]
if (!usr) return Reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return Reply('User tidak ditemukan!')
Reply('Sukses menghapus user!')
}
break


case 'delusr-v2': {
 if (!siowner) return forbiden(mess.owner)
let usr = args[0]
if (!usr) return Reply('ID nya mana?')
let f = await fetch(cpanelv2 + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + siptakey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return Reply('User tidak ditemukan!')
Reply('Sukses menghapus user!')
}
break
case 'mediafire': {
  
async function mediaFire(url) {
  try {
    const response = await fetch('https://r.jina.ai/' + url);
    const text = await response.text();

    const result = {
      title: (text.match(/Title: (.+)/) || [])[1]?.trim() || '',
      link: (text.match(/URL Source: (.+)/) || [])[1]?.trim() || '',
      filename: '',
      url: '',
      size: '',
      repair: ''
    };

    if (result.link) {
      const fileMatch = result.link.match(/\/([^\/]+\.zip)/);
      if (fileMatch) result.filename = fileMatch[1];
    }

    const matches = [...text.matchAll(/\[(.*?)\]\((https:\/\/[^\s]+)\)/g)];
    for (const match of matches) {
      const desc = match[1].trim();
      const link = match[2].trim();
      
      if (desc.toLowerCase().includes('download') && desc.match(/\((\d+(\.\d+)?[KMGT]B)\)/)) {
        result.url = link;
        result.size = (desc.match(/\((\d+(\.\d+)?[KMG]?B)\)/) || [])[1] || '';
      }
      if (desc.toLowerCase().includes('repair')) {
        result.repair = link;
      }
    }

    return result;
  } catch (error) {
    return { error: error.message };
  }
}

if (!text) return Reply('Masukin URL MediaFire-nya!');

try {
    const url = text.trim();
    const result = await mediaFire(url);

    if (result.error) return Reply(`❌ Gagal mengambil data: ${result.error}`);
    if (!result.url) return Reply('❌ Gagal mendapatkan link download!');

    let caption = `📂 *MediaFire Download*\n\n`;
    caption += `📌 *Nama:* ${result.filename || 'Unknown'}\n`;
    caption += `📏 *Ukuran:* ${result.size || 'Unknown'}\n`;
    caption += `🔗 *Link:* ${result.url}\n\n`;

    Reply(caption);

    // 🔹 Nama File Acak
    const randomFileName = `file_${Math.random().toString(36).slice(2, 10)}.zip`;

    // 🔹 Download File
    const response = await fetch(result.url);
    if (!response.ok) return Reply('❌ Gagal mendownload file!');

    const fileBuffer = await response.buffer();

    // 🔹 Kirim File ke Chat
    await dycoders.sendMessage(m.chat, {
        document: fileBuffer,
        mimetype: 'application/zip', 
        fileName: randomFileName
    }, { quoted: m });

    // 🔹 Hapus File dari Buffer
    fileBuffer.fill(0);
    console.log(`✅ File ${randomFileName} sudah dihapus dari memori.`);
    
} catch (err) {
    console.error(err);
    Reply('❌ Terjadi kesalahan! Coba lagi nanti.');
}
}
break;


case "installpanel": {

if (!text) return Reply(example("ipvps|pwvps|panel.com|node.com"))
let vii = text.split("|")

let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/Personaldycoders/perpanel/refs/heads/main/node.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await dycoders.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => { 
await console.log(data.toString());
                    if (data.toString().includes("Masukkan nama lokasi: ")) {
                        stream.write('Singapore\n');
                    }
                    if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
                        stream.write('Node By dy_net\n');
                    }
                    if (data.toString().includes("Masukkan domain: ")) {
                        stream.write(`${domainnode}\n`);
                    }
                    if (data.toString().includes("Masukkan nama node: ")) {
                        stream.write('Node By dy_net\n');
                    }
                    if (data.toString().includes("Masukkan Locid: ")) {
                        stream.write('1\n');
                    }
                }).stderr.on('data', async (data) => {
                    console.log('Stderr : ' + data);
                });
            });

}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
     if (data.toString().includes('Database host username (pterodactyluser)')) {
               stream.write(`admin${getRandom("")}\n`);
                }
if (data.toString().includes('Database host password')) {
stream.write(`admin001\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
 if (data.toString().includes('Database name (panel)')) {
                    stream.write(`admin${getRandom("")}\n`);
                }
                if (data.toString().includes('Database username (pterodactyl)')) {
                    stream.write(`admin${getRandom("")}\n`);
                }
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await Reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selesai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  


case "installnebula": {

if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}


if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *thema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nebula* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('2\n');
stream.write('\n');
stream.write('\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "installblueprint": {
    if (!text || !text.includes("|")) return m.reply("Format salah! Contoh: .installblueprint ipvps|pwvps");
    let [ipvps, passwd] = text.split("|").map(t => t.trim());

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash &&
    echo "export NODE_OPTIONS=--openssl-legacy-provider" >> ~/.bashrc &&
    source ~/.bashrc &&
    nvm install 20 &&
    nvm use 20 &&
    apt install npm -y &&
    cd /var/www/pterodactyl &&
    npm install -g yarn &&
    yarn add react-feather &&
    bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)
    `;

    const ress = new Client();

    ress.on('ready', async () => {
        m.reply("Memproses instalasi blueprint, tunggu beberapa menit...");
        ress.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', async () => {
                await m.reply("✅ Installasi blueprint selesai! Ketik .installnebula");
                ress.end();
            }).on('data', (data) => {
                console.log(data.toString());

                // Kirim input otomatis ke script bash
                if (data.toString().includes("Enter option")) {
                    stream.write('11\n');  // Pilih opsi 11
                }
                if (data.toString().includes("Enter region")) {
                    stream.write('A\n');   // Pilih region 'A'
                }
                if (data.toString().includes("Continue?")) {
                    stream.write('Y\n');   // Konfirmasi lanjut
                }
                if (data.toString().includes("Confirm installation")) {
                    stream.write('Y\n');   // Konfirmasi instalasi
                }

            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('❌ Gagal terhubung ke VPS. Cek IP atau Password.');
    }).connect(connSettings);
}
break;


case 'listsrv-v2': { 
if (!isReseller(sender)) return Reply("Fitur ini hanya untuk reseller!");
    let page = args[0] ? args[0] : '1'; 

    let f = await fetch(cpanelv2 + "/api/application/servers?page=" + page, { 
        "method": "GET", 
        "headers": { 
            "Accept": "application/json", 
            "Content-Type": "application/json", 
            "Authorization": "Bearer " + siptakey2 
        } 
    }); 

    let res = await f.json(); 
    let servers = res.data; 
    let rows = []; 

    for (let server of servers) { 
        let s = server.attributes;  
        
        // Fetch status server
        let f3 = await fetch(cpanelv2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", { 
            "method": "GET", 
            "headers": { 
                "Accept": "application/json", 
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + sipltcikey2
            } 
        }); 
        let data = await f3.json(); 
        let status = data.attributes ? data.attributes.current_state : s.status; 

      
        let f4 = await fetch(cpanelv2 + "/api/application/users/" + s.user, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + siptakey2
            }
        });
        let userData = await f4.json();
        let username = userData.attributes ? userData.attributes.username : "Unknown"; 


        rows.push({
            header: `Server ID: ${s.id}`,
            title: `${s.name} (${username})`,
            description: `Status: ${status}`,
            id: `.delsrv-v2 ${s.id}`, 
        });
    } 

    let buttons = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Manage Servers' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: 'Server List',
                    sections: [
                        {
                            title: 'Daftar Server',
                            highlight_label: 'Klik untuk hapus server',
                            rows: rows
                        }
                    ]
                })
            }
        }
    ];

    if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
        buttons.push({
            buttonId: `.listsrv-v2 ${res.meta.pagination.current_page + 1}`,
            buttonText: { displayText: `Halaman ${res.meta.pagination.current_page + 1}` },
            type: 1
        });
    }

    await dycoders.sendMessage(m.chat, { 
        text: `🔹 *List Server (Halaman ${res.meta.pagination.current_page})*`,
        footer: wm,
        buttons: buttons,
        headerType: 1, 
        viewOnce: true 
    }, { quoted: fsaluran }); 

} break;


case 'listusr': { 
if (!isReseller(sender)) return Reply("Fitur ini hanya untuk reseller!");

    let page = args[0] ? args[0] : '1'; 
    let f = await fetch(domain + "/api/application/users?page=" + page + "&per_page=8", {  
        "method": "GET", 
        "headers": { 
            "Accept": "application/json", 
            "Content-Type": "application/json", 
            "Authorization": "Bearer " + apikey 
        } 
    }); 

    let res = await f.json(); 
    let users = res.data; 
    let rows = []; 

    for (let user of users) { 
        let u = user.attributes; 
        let status = u.user?.server_limit === null ? "❌ Non-Aktif" : "✅ Aktif"; 

        rows.push({
            title: `🆔 ${u.id} - ${u.username} (${status})`,
            description: 'Klik untuk menghapus user ini',
            id: `.delusr ${u.id}`
        });
    } 

    let buttons = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Manage Users' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: 'User List',
                    sections: [
                        {
                            title: 'Daftar User',
                            highlight_label: 'Klik untuk hapus user',
                            rows: rows
                        }
                    ]
                })
            }
        }
    ];

    if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
        buttons.push({
            buttonId: `.listusr ${res.meta.pagination.current_page + 1}`,
            buttonText: { displayText: `Halaman ${res.meta.pagination.current_page + 1}` },
            type: 1
        });
    }

    await dycoders.sendMessage(m.chat, { 
        text: `🔹 *List User (Halaman ${res.meta.pagination.current_page})*`,
        footer: wm,
        buttons: buttons,
        headerType: 1, 
        viewOnce: true 
    }, { quoted: m }); 

} break;


case 'listusr-v2': { 
if (!isReseller(sender)) return Reply("Fitur ini hanya untuk reseller!");

    let page = args[0] ? args[0] : '1'; 
    let f = await fetch(cpanelv2 + "/api/application/users?page=" + page + "&per_page=40", {  
        "method": "GET", 
        "headers": { 
            "Accept": "application/json", 
            "Content-Type": "application/json", 
            "Authorization": "Bearer " + siptakey2 
        } 
    }); 

    let res = await f.json(); 
    let users = res.data; 
    let rows = []; 

    for (let user of users) { 
        let u = user.attributes; 
        let status = u.user?.server_limit === null ? "❌ Non-Aktif" : "✅ Aktif"; 

        rows.push({
            title: `🆔 ${u.id} - ${u.username} (${status})`,
            description: 'Klik untuk menghapus user ini',
            id: `.delusr-v2 ${u.id}`
        });
    } 

    let buttons = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Manage Users' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: 'User List',
                    sections: [
                        {
                            title: 'Daftar User',
                            highlight_label: 'Klik untuk hapus user',
                            rows: rows
                        }
                    ]
                })
            }
        }
    ];

    if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
        buttons.push({
            buttonId: `.listusr-v2 ${res.meta.pagination.current_page + 1}`,
            buttonText: { displayText: `Halaman ${res.meta.pagination.current_page + 1}` },
            type: 1
        });
    }

    await dycoders.sendMessage(m.chat, { 
        text: `🔹 *List User (Halaman ${res.meta.pagination.current_page})*`,
        footer: wm,
        buttons: buttons,
        headerType: 1, 
        viewOnce: true 
    }, { quoted: m }); 

} break;




case 'get': {
  const axios = require('axios');
if (!isPremium(m.sender)) return;
if (!text) return Reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return Reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return Reply(textData);
} else if (text.includes('webp')) {
return dycoders.imgToSticker(m.chat, text, m, { packname: "", author: "Hann Universe!!" })
} else if (/image/i.test(contentType)) { return dycoders.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return dycoders.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return dycoders.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return dycoders.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return dycoders.sendFile(m.chat, text, '', text, m)
} else {
return Reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return Reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break

case 'tourl': {
    if (!/video/.test(mime) && !/image/.test(mime)) {
        return m.reply(`Reply gambar atau video dengan keterangan/caption ${prefix + command}`);
    }

    try {
        const pnis = m.quoted ? m.quoted : m; 
        const media = await pnis.download();
        const link = await TelegraPh(media); 
        await dycoders.sendMessage(m.chat, { text: `Here is your link:\n${link}` }, { quoted: fswtag });
    } catch (err) {
        m.reply('Terjadi kesalahan saat mengunggah file: ' + err.message);
    }
}
break;




case 'delsrv': {
 if (!siowner) return forbiden(mess.owner)
    let srvList = args[0];
    if (!srvList) return Reply('ID servernya mana? Contoh: delsrv 1,2,3');
    
    let ids = srvList.split(',').map(id => id.trim());
    if (ids.length === 0) return Reply('Tidak ada ID server yang valid.');
    
    let failed = [];
    let success = [];
    
    for (let srv of ids) {
        try {
            let f = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });
            
            if (f.ok) {
                success.push(srv);
            } else {
                let res = await f.json();
                if (res.errors) failed.push(srv);
            }
        } catch (error) {
            failed.push(srv);
        }
    }
    
    let message = '*Hasil Penghapusan Server:*\n\n';
    if (success.length > 0) message += `✅ Berhasil dihapus: ${success.join(', ')}\n`;
    if (failed.length > 0) message += `❌ Gagal dihapus: ${failed.join(', ')}\n`;
    
    Reply(message);
}
break;


case 'delsrv-v2': {
 if (!siowner) return forbiden(mess.owner)
    let srvList = args[0];
    if (!srvList) return Reply('ID servernya mana? Contoh: delsrv-v2 1,2,3');
    
    let ids = srvList.split(',').map(id => id.trim());
    if (ids.length === 0) return Reply('Tidak ada ID server yang valid.');
    
    let failed = [];
    let success = [];
    
    for (let srv of ids) {
        try {
            let f = await fetch(cpanelv2 + "/api/application/servers/" + srv, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + siptakey2,
                }
            });
            
            if (f.ok) {
                success.push(srv);
            } else {
                let res = await f.json();
                if (res.errors) failed.push(srv);
            }
        } catch (error) {
            failed.push(srv);
        }
    }
    
    let message = '*Hasil Penghapusan Server:*\n\n';
    if (success.length > 0) message += `✅ Berhasil dihapus: ${success.join(', ')}\n`;
    if (failed.length > 0) message += `❌ Gagal dihapus: ${failed.join(', ')}\n`;
    
    Reply(message);
}
break;


case 'soundcloud': {
    if (!text) return Reply("Masukkan teks pencarian atau URL SoundCloud!");

    const SoundCloud = require('./start/lib/soundcloud');

    try {
        let downloadUrl;

        if (text.includes('soundcloud.com')) {
            Reply('🔄 Sedang mendownload audio...');
            let downloadData = await SoundCloud.download(text);
            if (!downloadData || !downloadData.download) return Reply("Gagal mendapatkan link download!");
            downloadUrl = downloadData.download;
        } else {
            Reply('🔍 Sedang mencari lagu...');
            let results = await SoundCloud.search(text);
            if (!Array.isArray(results) || results.length === 0) return Reply("Tidak ditemukan hasil!");

            let firstTrack = results[0];
            Reply(`🎵 *Mendownload:* ${firstTrack.title}\n🔗 ${firstTrack.url}`);

            let downloadData = await SoundCloud.download(firstTrack.url);
            if (!downloadData || !downloadData.download) return Reply("Gagal mendapatkan link download!");
            downloadUrl = downloadData.download;
        }

        console.log("Final Download URL:", downloadUrl); // Debugging

        await dycoders.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: m });

    } catch (error) {
        console.error("Error:", error);
        Reply("Terjadi kesalahan saat mengambil data dari SoundCloud.");
    }
    break;
}

case 'editdns': {
    if (!isPremium(m.sender)) return Reply("Fitur ini hanya untuk pengguna premium!");
    if (!text.includes('|')) return Reply('Format salah! Contoh: .editdns id_dns|yes/no');

    let [recordId, proxy] = text.split('|').map(t => t.trim());
    let proxied = proxy.toLowerCase() === 'yes';

    let apiToken = global.ApiDns;
    let zoneIds = [global.zoneid, global.zoneid2, global.zoneid3, global.zoneid4, global.zoneid5, global.zoneid6 ]; 

    let success = false;
    let lastError = null;

    for (let zoneId of zoneIds) {
        try {
            let response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records/${recordId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${apiToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ proxied })
            });

            let result = await response.json();

            if (result.success) {
                Reply(`✅ Proxy berhasil diperbarui  \n🆔 ID: ${recordId}\n🛡 Proxy: ${proxied ? 'Aktif' : 'Nonaktif'}`);
                success = true;
                break;
            } else {
                lastError = result.errors;
            }
        } catch (err) {
            lastError = err.message;
        }
    }

    if (!success) {
        Reply(`❌ Gagal mengedit DNS di semua Zone ID!\n🔻 Error: ${JSON.stringify(lastError, null, 2)}`);
    }
    break;
}

case 'addprem': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply("Masukkan nomor! Contoh: .addprem 628xxx");

    let number = text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    let prem = loadPremium();

    if (prem.includes(number)) return Reply("User sudah menjadi premium!");

    prem.push(number);
    savePremium(prem);

    Reply(`✅ Berhasil menambahkan ${number} sebagai pengguna premium!`);

  
    await dycoders.sendMessage(number, {
        image: { url: thumbnail },
        caption: "🎉 Selamat! Kamu telah menjadi pengguna premium.\n\nNikmati fitur-fitur eksklusif yang tersedia!",
        footer: wm,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: { displayText: 'Owner Bot' },
                type: 1,
            }
        ],
        headerType: 1,
        viewOnce: true
    });

    break;
}


case 'delprem': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply("Masukkan nomor! Contoh: .delprem 628xxx");

    let number = text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    let prem = loadPremium();

    if (!prem.includes(number)) return Reply("User tidak ada dalam daftar premium!");

    prem = prem.filter(user => user !== number);
    savePremium(prem);

    Reply(`✅ Berhasil menghapus ${number} dari daftar premium!`);

    break;
}
case 'delowner': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply("Masukkan nomor yang mau dihapus! Contoh: .delowner 628xxx");

    let number = text.replace(/[^0-9]/g, ''); 
    
    let number = text.replace(/[^0-9]/g, ''); 

    let index = global.rowner.findIndex(([num]) => num === number);
    if (index === -1) return Reply("Nomor ini bukan owner!");

    global.rowner.splice(index, 1);

    let number = text.replace(/[^0-9]/g, ''); 

    let index = global.rowner.findIndex(([num]) => num === number);
    if (index === -1) return Reply("Nomor ini bukan owner!");

    global.rowner.splice(index, 1);

    let configPath = './config.js';
    let configContent = fs.readFileSync(configPath, 'utf-8');
    let newRowner = `global.rowner = ${JSON.stringify(global.rowner, null, 4)};`;
    configContent = configContent.replace(/global\.rowner\s*=\s*\[([\s\S]*?)\];/, newRowner);
    fs.writeFileSync(configPath, configContent, 'utf-8');

    Reply(`✅ Berhasil menghapus ${number} dari daftar owner!`);
    
    let jid = number + "@s.whatsapp.net";
    await dycoders.sendMessage(jid, {
        image: { url: thumbnail },
        caption: "⚠️ Kamu telah dihapus dari daftar *Owner Bot*.\n\nJika ini kesalahan, hubungi owner utama.",
        footer: wm,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: { displayText: 'Hubungi Owner' },
                type: 1,
            }
        ],
        headerType: 1,
        viewOnce: true
    });

    break;
}

case 'addowner': {
    if (!siowner) return forbiden(mess.owner);
    if (!text) return Reply("Masukkan nomor! Contoh: .addowner 628xxx");

    let number = text.replace(/[^0-9]/g, '');

    
    let number = text.replace(/[^0-9]/g, ''); // Bersihin selain angka

    let number = text.replace(/[^0-9]/g, '');

    
    if (global.rowner.some(([num]) => num === number)) {
        return Reply("Nomor ini sudah jadi owner!");
    }
   
    global.rowner.push([number, "dycoders.xyz", true]);
   
    // Tambahin owner baru ke global.rowner
    global.rowner.push([number, "dycoders.xyz", true]);

   
    global.rowner.push([number, "dycoders.xyz", true]);
   
    let configPath = './config.js';
    let configContent = fs.readFileSync(configPath, 'utf-8');
    let newRowner = `global.rowner = ${JSON.stringify(global.rowner, null, 4)};`;
    configContent = configContent.replace(/global\.rowner\s*=\s*\[([\s\S]*?)\];/, newRowner);
    fs.writeFileSync(configPath, configContent, 'utf-8');

    Reply(`✅ Berhasil menambahkan ${number} sebagai owner bot!`);

    let jid = number + "@s.whatsapp.net";
    await dycoders.sendMessage(jid, {
        image: { url: thumbnail },
        caption: "🎉 Selamat! Kamu telah menjadi *Owner Bot*.\n\nGunakan command dengan bijak ya!",
        footer: wm,
        buttons: [
            {
                buttonId: '.menu',
                buttonText: { displayText: 'Lihat Menu Bot' },
                type: 1,
            }
        ],
        headerType: 1,
        viewOnce: true
    });

    break;
}


case 'addiprules': { 
    if (!isPremium(m.sender)) return Reply("Fitur ini hanya untuk pengguna premium!"); 
    if (!text.includes('|')) return Reply('Format salah! Contoh: .addiprules note|123.456.789.10'); 

    let [note, ip] = text.split('|').map(t => t.trim()); 

    let apiToken = global.ApiRules; 
    let accountId = global.AccountId; 
    let mode = "whitelist";

    let response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/firewall/access_rules/rules`, { 
        method: 'POST', 
        headers: { 
            'Authorization': `Bearer ${apiToken}`, 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify({ 
            mode, 
            configuration: { 
                target: "ip", 
                value: ip 
            }, 
            notes: note 
        }) 
    }); 

    let result = await response.json(); 
    if (result.success) { 
        Reply(`✅ IP Access Rule berhasil ditambahkan!\n📌 Note: ${note}\n📍 IP: ${ip}\n⚙ Action: Allow`); 
    } else { 
        Reply(`❌ Gagal menambahkan IP Access Rule!\n🔻 Error: ${JSON.stringify(result.errors, null, 2)}`); 
    } 
    break;  
}

case 'autocf': {
    if (!isPremium(m.sender)) return Reply("Fitur ini hanya untuk pengguna premium!");
    if (!text.includes('|')) return Reply('Format salah! Contoh: .autocf id_dns|ipvps');

    let [recordId, ip] = text.split('|').map(t => t.trim());
    let proxied = true; 

    let apiTokenDns = global.ApiDns;
    let apiTokenRules = global.ApiRules;
    let accountId = global.AccountId;
    let zoneIds = [global.zoneid2, global.zoneid3, global.zoneid5, global.zoneid6]; 
    let success = false;
    let lastError = null;

    
    for (let zoneId of zoneIds) {
        try {
            let response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records/${recordId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${apiTokenDns}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ proxied })
            });

            let result = await response.json();

            if (result.success) {
                Reply(`✅ Proxy berhasil diaktifkan!\n🆔 ID: ${recordId}`);
                success = true;
                break; 
            } else {
                lastError = result.errors;
            }
        } catch (err) {
            lastError = err.message;
        }
    }

    if (!success) {
        return Reply(`❌ Gagal mengedit DNS di semua Zone ID!\n🔻 Error: ${JSON.stringify(lastError, null, 2)}`);
    }

   
    let note = `AutoCF-${crypto.randomBytes(4).toString('hex')}`; 
    let mode = "whitelist";

    try {
        let response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/firewall/access_rules/rules`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiTokenRules}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mode,
                configuration: {
                    target: "ip",
                    value: ip
                },
                notes: note
            })
        });

        let result = await response.json();

        if (result.success) {
            Reply(`✅ IP Access Rule berhasil ditambahkan!\n📌 Note: ${note}\n📍 IP: ${ip}\n⚙ Action: Allow`);
        } else {
            Reply(`❌ Gagal menambahkan IP Access Rule!\n🔻 Error: ${JSON.stringify(result.errors, null, 2)}`);
        }
    } catch (err) {
        Reply(`❌ Error saat menambahkan IP ke whitelist!\n🔻 Error: ${err.message}`);
    }
    break;
}

case 'owner': {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ciaa xyzz\nORG:dycoders.xyz\nTITLE:soft\nitem1.TEL;waid=6285719898124:6285719898124\nitem1.X-ABLabel:Ponsel\nitem2.URL:https://dycoders.xyz\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET:xyydycoders@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
      const sentMsg = await dycoders.sendMessage(
    m.chat,
    {
      contacts: {
        displayName: siowner,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "M Y  O W N E R",
          body: "THIS MY OWNER YNG GANTENG",
          thumbnailUrl: "https://files.catbox.moe/igl635.jpg",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: fswtag },
  );
    }
    break



case 'subdomain3': {
    if (!isPremium(m.sender)) return Reply("Fitur ini hanya untuk pengguna premium!");
    if (!text.includes('|')) return Reply('Format salah! Contoh: .subdomain3 sub|123.456.789.10|yes');

    let [hostname, ip, proxy] = text.split('|').map(t => t.trim());
    let proxied = proxy.toLowerCase() === 'yes';
    
    let apiToken = global.ApiDns3;
    let zoneId = global.zoneid3;
    let domain = global.domain3;

    let response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'A',
            name: `${hostname}.${domain}`,
            content: ip,
            ttl: 1,
            proxied
        })
    });
    
    let result = await response.json();
    if (result.success) {
        let fullSubdomain = `https://${hostname}.${domain}`;
        let recordId = result.result.id;
        let teks = `✅ Subdomain berhasil dibuat!\n🌐 Hostname: ${hostname}.${domain}\n📍 IP: ${ip}\n🛡 Proxy: ${proxied ? 'Aktif' : 'Nonaktif'}\n🔗 Link: ${fullSubdomain}\n🆔 ID: ${recordId}`;
        
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: {
                        body: { text: teks },
                        footer: { text: wm },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy ID","copy_code": "${recordId}"}`
                                },
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy Domain","copy_code": "${fullSubdomain}"}`
                                }
                            ],
                        },
                    },
                },
            },
        }, { quoted: m });
        
        await dycoders.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    } else {
        Reply(`❌ Gagal membuat subdomain!\n🔻 Error: ${JSON.stringify(result.errors, null, 2)}`);
    }
    break;
}
case 'subdowings': {
    if (!isPremium(m.sender)) return Reply("Fitur ini hanya untuk pengguna premium!");
    if (!text.includes('|')) return Reply('Format salah! Contoh: .subdowings sub|123.456.789.10|yes');

    let [hostname, ip, proxy] = text.split('|').map(t => t.trim());
    let proxied = proxy.toLowerCase() === 'yes';
    
    let apiToken = global.ApiDns5;
    let zoneId = global.zoneid5;
    let domain = global.wings;

    let response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'A',
            name: `${hostname}.${domain}`,
            content: ip,
            ttl: 1,
            proxied
        })
    });
    
    let result = await response.json();
    if (result.success) {
        let fullSubdomain = `${hostname}.${domain}`;
        let recordId = result.result.id;
        let teks = `✅ Subdomain berhasil dibuat!\n🌐 Hostname: ${fullSubdomain}\n📍 IP: ${ip}\n🛡 Proxy: ${proxied ? 'Aktif' : 'Nonaktif'}\n🔗 Link: https://${fullSubdomain}\n🆔 ID: ${recordId}`;
        
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: {
                        body: { text: teks },
                        footer: { text: wm },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy ID","copy_code": "${recordId}"}`
                                },
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy Domain","copy_code": "${fullSubdomain}"}`
                                }
                            ],
                        },
                    },
                },
            },
        }, { quoted: m });
        
        await dycoders.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    } else {
        Reply(`❌ Gagal membuat subdomain!\n🔻 Error: ${JSON.stringify(result.errors, null, 2)}`);
    }
    break;
}

case 'subdomain1': {
    if (!isPremium(m.sender)) return Reply("Fitur ini hanya untuk pengguna premium!");
    if (!text.includes('|')) return Reply('Format salah! Contoh: .subdomain1 sub|123.456.789.10|yes');

    let [hostname, ip, proxy] = text.split('|').map(t => t.trim());
    let proxied = proxy.toLowerCase() === 'yes';
    
    let apiToken = global.ApiDns5;
    let zoneId = global.zoneid6;
    let domain = global.domain6;

    let response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'A',
            name: `${hostname}.${domain}`,
            content: ip,
            ttl: 1,
            proxied
        })
    });
    
    let result = await response.json();
    if (result.success) {
        let fullSubdomain = `${hostname}.${domain}`;
        let recordId = result.result.id;
        let teks = `✅ Subdomain berhasil dibuat!\n🌐 Hostname: ${fullSubdomain}\n📍 IP: ${ip}\n🛡 Proxy: ${proxied ? 'Aktif' : 'Nonaktif'}\n🔗 Link: https://${fullSubdomain}\n🆔 ID: ${recordId}`;
        
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: {
                        body: { text: teks },
                        footer: { text: wm },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy ID","copy_code": "${recordId}"}`
                                },
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy Domain","copy_code": "${fullSubdomain}"}`
                                }
                            ],
                        },
                    },
                },
            },
        }, { quoted: m });
        
        await dycoders.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    } else {
        Reply(`❌ Gagal membuat subdomain!\n🔻 Error: ${JSON.stringify(result.errors, null, 2)}`);
    }
    break;
}



case 'subdomain2': {
    if (!isPremium(m.sender)) return Reply("Fitur ini hanya untuk pengguna premium!");
    if (!text.includes('|')) return Reply('Format salah! Contoh: .subdomain2 sub|123.456.789.10|yes');

    let [hostname, ip, proxy] = text.split('|').map(t => t.trim());
    let proxied = proxy.toLowerCase() === 'yes';
    
    let apiToken = global.ApiDns2;
    let zoneId = global.zoneid2;
    let domain = global.domain2;

    let response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'A',
            name: `${hostname}.${domain}`,
            content: ip,
            ttl: 1,
            proxied
        })
    });
    
    let result = await response.json();
    if (result.success) {
        let fullSubdomain = `https://${hostname}.${domain}`;
        let recordId = result.result.id;
        let teks = `✅ Subdomain berhasil dibuat!\n🌐 Hostname: ${hostname}.${domain}\n📍 IP: ${ip}\n🛡 Proxy: ${proxied ? 'Aktif' : 'Nonaktif'}\n🔗 Link: ${fullSubdomain}\n🆔 ID: ${recordId}`;
        
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: {
                        body: { text: teks },
                        footer: { text: wm },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy ID","copy_code": "${recordId}"}`
                                },
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy Domain","copy_code": "${fullSubdomain}"}`
                                }
                            ],
                        },
                    },
                },
            },
        }, { quoted: m });
        
        await dycoders.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    } else {
        Reply(`❌ Gagal membuat subdomain!\n🔻 Error: ${JSON.stringify(result.errors, null, 2)}`);
    }
    break;
}



case 'subdomain4': {
    if (!isPremium(m.sender)) return Reply("Fitur ini hanya untuk pengguna premium!");
    if (!text.includes('|')) return Reply('Format salah! Contoh: .subdomain4 sub|123.456.789.10|yes');

    let [hostname, ip, proxy] = text.split('|').map(t => t.trim());
    let proxied = proxy.toLowerCase() === 'yes';
    
    let apiToken = global.ApiDns4;
    let zoneId = global.zoneid4;
    let domain = global.domain4;

    let response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'A',
            name: `${hostname}.${domain}`,
            content: ip,
            ttl: 1,
            proxied
        })
    });
    
    let result = await response.json();
    if (result.success) {
        let fullSubdomain = `https://${hostname}.${domain}`;
        let recordId = result.result.id;
        let teks = `✅ Subdomain berhasil dibuat!\n🌐 Hostname: ${hostname}.${domain}\n📍 IP: ${ip}\n🛡 Proxy: ${proxied ? 'Aktif' : 'Nonaktif'}\n🔗 Link: ${fullSubdomain}\n🆔 ID: ${recordId}`;
        
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: {
                        body: { text: teks },
                        footer: { text: wm },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy ID","copy_code": "${recordId}"}`
                                },
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy Domain","copy_code": "${fullSubdomain}"}`
                                }
                            ],
                        },
                    },
                },
            },
        }, { quoted: m });
        
        await dycoders.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    } else {
        Reply(`❌ Gagal membuat subdomain!\n🔻 Error: ${JSON.stringify(result.errors, null, 2)}`);
    }
    break;
}


case "leave": {
 if (!siowner) return forbiden(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await Reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await dycoders.groupLeave(m.chat)
}
break

case 'idch': case 'cekidch': {
if (!text) return Reply(example("linkchnya mana"))
if (!text.includes("https://whatsapp.com/channel/")) return Reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await dycoders.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`

let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: wm }, 
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : m });
await dycoders.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break

case "resetlinkgc": {
if (!siowner) return forbiden(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!isBotAdmins) return Reply(mess.botAdmin)
await dycoders.groupRevokeInvite(m.chat)
Reply("Berhasil mereset link grup ✅")
}
break








case "tagall": {
    if (!m.isGroup) return Reply(mess.group);
    if (!siowner) return forbiden(mess.owner)
    if (!text) return Reply(example("pesannya"));


    const groupMetadata = await dycoders.groupMetadata(m.chat).catch(() => ({}));
    const participants = groupMetadata.participants || [];

    
    let member = participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender);

  
    let teks = text + "\n\n";
    for (let e of member) {
        teks += `@${e.split("@")[0]}\n`;
    }

  
    await dycoders.sendMessage(m.chat, { 
        text: teks, 
        mentions: member 
    }, { quoted: m });

 
}
break;

case 'post-paste': {
  if (!siowner) return forbiden(mess.owner);
 
  async function createPaste(title, content) {
    const data = new URLSearchParams({
      api_dev_key: "MRCBEZuCB5LPiSJq6heAcTMhfWNi0fVT",
      api_user_key: "b7ed0f0acda1df95d68855abe97903e0",
      api_paste_name: title,
      api_paste_code: content,
      api_paste_format: "text",
      api_paste_expire_date: "N",
      api_option: "paste"
    });
 
    try {
      const response = await axios.post("https://pastebin.com/api/api_post.php", data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
 
      if (response.data.includes("Bad API request")) {
        throw new Error(`Gagal membuat paste: ${response.data}`);
      }
 
      const result = response.data;
      const rawUrl = result.replace(/^(https:\/\/pastebin\.com\/)([a-zA-Z0-9]+)$/, "$1raw/$2");
 
      return { status: 0, original: result, raw: rawUrl };
    } catch (error) {
      console.error("Error posting Pastebin:", error);
      return { status: 1, original: null, raw: null };
    }
  }
 
  if (!text.includes('#')) return m.reply(`🚩 Format salah! Gunakan: .post-paste judul # context`);
 
  const [title, content] = text.trim().split('#');
  if (!title || !content) return m.reply(`🚩 Format salah! Gunakan: .post-paste judul # context`);
 
  let results = await createPaste(title, content);
  if (results.status === 1) return m.reply("⚠️ Gagal membuat paste di Pastebin!");
 
  let hasilUrl = `✅ Berhasil posting ke Pastebin!\n\n🔗 *Original:* ${results.original}\n🔗 *Raw:* ${results.raw}`;
 
  dycoders.sendMessage(m.chat, {
    text: hasilUrl,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: 'paste bin',
        body: 'dynet',
        thumbnail: await getBuffer("https://files.catbox.moe/qur5ed.jpg"),
        sourceUrl: results.original,
        mediaType: 1
      }
    }
  }, { quoted: fswtag });
}
break;





case "ht": case "hidetag": {
    if (!m.isGroup) return Reply(mess.group);
    if (!siowner) return forbiden(mess.owner)
    if (!text) return Reply(example("pesannya"));
    
 
    const groupMetadata = await dycoders.groupMetadata(m.chat).catch(() => ({}));
    const participants = groupMetadata.participants || [];

    const groupMembers = participants.map(v => v.id);


    await dycoders.sendMessage(m.chat, { 
        text: text, 
        mentions: groupMembers 
    }, { quoted: fswtag });

}
break;




 
 
case 'gc':
case 'group': {
 if (!m.isGroup) return Reply(mess.group);
  if (!siowner) return forbiden(mess.owner)
     const groupCommand = text;
    if (groupCommand === 'buka') {
    	if (!isBotAdmins) return Reply(mess.botAdmin);
        try {
            await dycoders.groupSettingUpdate(m.chat, 'not_announcement'); // Membuka grup
            await dycoders.sendMessage(m.chat, { text: 'Grup telah dibuka untuk semua anggota.' }, { quoted: m });
        } catch (err) {
            console.error(err);
            return dycoders.sendMessage(m.chat, { text: 'Terjadi kesalahan saat membuka grup.' }, { quoted: m });
        }
    } else if (groupCommand === 'tutup') {
    	if (!isBotAdmins) return Reply(mess.botAdmin);
        try {
            await dycoders.groupSettingUpdate(m.chat, 'announcement'); // Menutup grup
            await dycoders.sendMessage(m.chat, { text: 'Grup telah ditutup hanya untuk admin' }, { quoted: m });
        } catch (err) {
            console.error(err);
            return dycoders.sendMessage(m.chat, { text: 'Terjadi kesalahan saat menutup grup' }, { quoted: m });
        }
    } else if (groupCommand === 'info') {
        try {
            const ppUrl = await dycoders.profilePictureUrl(m.chat, 'image'); // Dapatkan PP grup
            const jumlahAnggota = groupMetadata.participants.length;
            const jumlahAdmin = groupAdmins.length;
            const groupDesc = groupMetadata.desc ? groupMetadata.desc : 'Tidak ada deskripsi';
            const message = `
*Info Grup*:
• Nama: ${groupMetadata.subject}
\n• Jumlah Anggota:\n ${jumlahAnggota}
\n• Jumlah Admin:\n ${jumlahAdmin}
\n• Deskripsi:\n ${groupDesc}
            `;
            await dycoders.sendMessage(m.chat, {
                image: { url: ppUrl },
                caption: message
            }, { quoted: m });
        } catch (err) {
            console.error(err);
            return dycoders.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mendapatkan info grup.' }, { quoted: m });
            }
       } else if (groupCommand === 'member') {
        try {
            const members = groupMetadata.participants;
            const memberCountries = {};
            for (const member of members) {
                const countryCode = member.id.split('@')[0].slice(0, 2); // Ambil kode negara dari nomor
                if (memberCountries[countryCode]) {
                    memberCountries[countryCode]++;
                } else {
                    memberCountries[countryCode] = 1;
                }
            }
            let countryMessage = '*Jumlah Anggota Berdasarkan Negara:*\n';
            for (const [country, count] of Object.entries(memberCountries)) {
                countryMessage += `+${country}: ${count}\n`;
            }
            await Reply(countryMessage);
        } catch (err) {
            console.error(err);
            return dycoders.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mendapatkan info anggota grup.' }, { quoted: m });
        }
    } else {
        return dycoders.sendMessage(m.chat, { text: 'Perintah grup tidak dikenali. Gunakan "group buka", "group tutup", "group info", atau "group member".' }, { quoted: m });
    }}
 break;


case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!isBotAdmins) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await dycoders.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await dycoders.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break
case 'kick': {
   if (!m.isGroup) return Reply(mess.group)
   if (!isBotAdmins) return Reply(mess.botAdmin)
   if (!isAdmins) return reply(mess.admin)
    if (!siowner) return forbiden(mess.owner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dycoders.groupParticipantsUpdate(m.chat, [users], 'remove')
await Reply(`Succes Kick anomali`)
}
break

case "tt": case "tiktok": {
if (!text) return Reply(example("url"))

await tiktokDl(q).then(async (result) => {
await dycoders.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return Reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: dycoders.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await dycoders.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await dycoders.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await dycoders.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case "pin": case "pinterest": {
    if (!text) return Reply(example("anime dark"));

    await dycoders.sendMessage(m.chat, { react: { text: '🔎', key: m.key } });

    try {
        let pin = await pinterest(text); // Pakai function yang lo udah panggil sebelumnya

        if (pin.length === 0) return Reply("Gak ada hasil dari Pinterest!");

        if (pin.length > 10) pin = pin.slice(0, 10);

        let araara = [];
        for (let a of pin) {
            let imgsc = await prepareWAMessageMedia(
                { image: { url: a } }, 
                { upload: dycoders.waUploadToServer }
            );

            araara.push({
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    hasMediaAttachment: true,
                    ...imgsc
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{                  
                        "name": "cta_url",
                        "buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                })
            });
        }

        const msgii = await generateWAMessageFromContent(m.chat, {
            viewOnceMessageV2Extension: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    }, 
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `\nBerikut adalah foto hasil pencarian dari *Pinterest*`
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: araara
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: m });

        await dycoders.relayMessage(m.chat, msgii.message, { 
            messageId: msgii.key.id 
        });

        await dycoders.sendMessage(m.chat, { react: { text: '', key: m.key } });

    } catch (err) {
        console.log(err);
        Reply("Terjadi kesalahan saat mengambil data dari Pinterest.");
    }
}
break;



case 'remini': case 'hd': {
if (limitnya < 1) return Reply(mess.limit)
dycoders.enhancer = dycoders.enhancer ? dycoders.enhancer : {};
if (m.sender in dycoders.enhancer)
return Reply(m.chat, "Masih Ada Proses Yang Belum Selesai Kak, Silahkan Tunggu Sampai Selesai Yah >//<", m)
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime)
return Reply(m.chat, `Send/Reply Images with the caption *${prefix + command}`, m)
if (!/image\/(jpe?g|png)/.test(mime))
return Reply(m.chat, `Mime ${mime} tidak support`, m)
else dycoders.enhancer[m.sender] = true;
dycoders.sendMessage(m.chat, {
react: {
text: '🕒',
key: m.key,
}
});
let img = await q.download?.();
let error;
try {
const This = await remini(img, "enhance");
dycoders.sendMessage(m.chat, {
react: {
text: '☑️',
key: m.key,
}
});
dycoders.sendFile(m.chat, This, "", "```Success...```", m);
} catch (er) {
error = true;
} finally {
if (error) {
dycoders.reply(m.chat, "Proses Gagal :(", m)
}
delete dycoders.enhancer[m.sender];
}
uselimit(sender);
break;
}
case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group);
if (!isBotAdmins) return Reply(mess.botAdmin);
  if (!siowner) return forbiden(mess.owner)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await dycoders.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await dycoders.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return Reply(example("@tag/6285###"))
}
}
break


case 'zptv': {
    try {
        if (!/video/.test(mime)) return Reply('Invalid media. Harap balas sebuah video!');
        if (!m.quoted.seconds > 30) return Reply('Durasi maksimal adalah 30 detik!');

        hjhj = text ? text : from; 
        const msg = await require('@whiskeysockets/baileys').generateWAMessageContent({
            video: await m.quoted.download(),
        }, {
            upload: dycoders.waUploadToServer,
        });

     
        await dycoders.relayMessage(hjhj, {
            ptvMessage: msg.videoMessage, 
        }, {});

   
    } catch (error) {
        console.error(error);
        Reply('Terjadi kesalahan saat memproses video.');
    }
    break;
}
case 'buka': case 'rvo': {
    if (!m.quoted || !m.quoted.message) return Reply("Reply ke gambar atau video!");

    let type = Object.keys(m.quoted.message || {})[0]; 
    let quotedType = m.quoted.message[type];

    if (!quotedType) return reply("Pesan yang direply tidak valid!");

    var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video");
    let buffer = Buffer.from([]);
    
    for await (let chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    if (/video/.test(type)) {
        await dycoders.sendMessage(m.chat, {
            video: buffer,
            caption: quotedType.caption || ""
        }, {
            quoted: fswtag
        });
    } else if (/image/.test(type)) {
        await dycoders.sendMessage(m.chat, {
            image: buffer,
            caption: quotedType.caption || ""
        }, {
            quoted: fswtag
        });
    }
}
break;


case 'git': case 'gitclone': {
    if (!args[0]) return Reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
    if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {
        method: 'HEAD'
    })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    dycoders.sendMessage(m.chat, {
        document: {
            url: url
        },
        fileName: filename + '.zip',
        mimetype: 'application/zip'
    }, {
        quoted: fswtag
    }).catch((err) => reply('emror'))
    }
    break  
    
case 'totalfitur': {
Reply(`${totalFitur()} Features`)
}
break


case 'searchsubdo': {
    if (!text) return Reply('Masukkan domain! Contoh: `.subdomain example.com`');

    let domain = text.trim().replace(/^https?:\/\//, '');

    async function searchSubdomains(domain) {
        const url = `https://crt.sh/?q=${domain}&output=json`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const subdomains = data.map(entry => entry.name_value);
            const uniqueSubdomains = [...new Set(subdomains)];
            uniqueSubdomains.sort();
            return uniqueSubdomains;
        } catch (error) {
            console.error('Error fetching subdomains:', error);
            return null;
        }
    }

    Reply('🔍 Sedang mencari subdomain...');

    let result = await searchSubdomains(domain);
    if (!result || result.length === 0) {
        return Reply(`❌ Tidak ditemukan subdomain untuk *${domain}*`);
    }

    let subList = result.join('\n');
    let caption = `🔎 *Subdomain Result*\n\n🌐 *Domain:* ${domain}\n📋 *Ditemukan:* ${result.length} subdomain\n\n${subList}`;

    dycoders.sendMessage(m.chat, { text: caption }, { quoted: m });
    break;
}

case 'backup':{
if (!siowner) return forbiden(mess.owner);
  const { execSync } = require("child_process");
  const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "session" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await dycoders.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "dycoders.zip",},{quoted: fswtag}); await execSync("rm -rf backup.zip");
}
break
case 'addlimit': {
if (!siowner) return Reply(mess.owner);
    let [nomor, jumlah] = text.split(',');

    if (!nomor || !jumlah) return Reply('Contoh: .addlimit 628xxx,10');

    nomor = nomor.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    jumlah = parseInt(jumlah);

    if (isNaN(jumlah)) return Reply('Jumlah harus angka!');

    addLimit(nomor, jumlah);
    Reply(`✅ Berhasil menambahkan ${jumlah} limit ke ${nomor}!`);
    
    break;
}

case 'delsampah': {
  if (!siowner) return Reply(mess.owner);
  let directoryPath = './session'
  fs.readdir(directoryPath, async (err, files) => {
    if (err) {
      console.error('Unable to scan directory: ', err);
      return Reply(`Gagal memindai direktori: ${err.message}`);
    }
    const filteredArray = files.filter(item => 
      item.startsWith('pre-key') || 
      item.startsWith('sender-key') || 
      item.startsWith('session-') || 
      item.startsWith('app-state')
    );
    let teks = `Terdeteksi ${filteredArray.length} file sampah! \n\n`;
    if (filteredArray.length === 0) {
      return reply(teks);
    }
    filteredArray.forEach((file, i) => {
      teks += `${i + 1}. ${file}\n`;
    });
    Reply(teks);
    await sleep(2000);
    const tuts = await Reply('_Menghapus sampah..._');
    for (const file of filteredArray) {
      try {
        fs.unlinkSync(`${directoryPath}/${file}`);
      } catch (e) {
        console.error(`Gagal menghapus file: ${file}`, e);
      }}
    await sleep(2000);
    await dycoders.sendMessage(m.chat, { react: { text: '✅', key: tuts.key },});
  });
}
break;


case "getcase": {
    if (!siowner) return Reply(mess.owner);
    if (!text) return Reply(example("menu"));

    const getcase = (cases) => {
        const fileContent = fs.readFileSync('./dy-case.js').toString();
        const regex = new RegExp(`case [\'\"]${cases}[\'\"]`, 'g');
        const match = fileContent.match(regex);

        if (!match) return `Case *${cases}* tidak ditemukan`;

        const splitBy = match[0];
        const result = fileContent.split(splitBy)[1].split("break")[0];

        return `case ${splitBy}${result}break`;
    };

    try {
        let teks = getcase(q);

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: {
                        body: { text: teks },
                        footer: { text: wm },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{"display_text": "Copy Case","copy_code": "${teks}"}`
                                },
                            ],
                        },
                    },
                },
            },
        }, { quoted: m });

        await dycoders.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } catch (e) {
        return Reply(`Case *${text}* tidak ditemukan`);
    }
}
break;


case 'setppbot': {
if (!siowner) return Reply(mess.owner);
            if (!quoted) return Reply('Reply sebuah gambar dengan perintah *setppbot* untuk mengubah foto profil bot.');
            if (!/image/.test(mime)) return Reply('Hanya bisa digunakan untuk gambar.');

            try {
                
                const media = await quoted.download();

              
                const imageBuffer = await sharp(media)
                    .resize(640, 640) 
                    .jpeg() 
                    .toBuffer();

                
                await dycoders.updateProfilePicture(dycoders.user.id, imageBuffer);
                await Reply('Foto profil bot berhasil diubah!');
            } catch (err) {
                console.error('Error mengubah foto profil:', err);
                await Reply('Terjadi kesalahan saat mengubah foto profil bot.');
            }
            break;
        }

case 'setbotname':{
if (!siowner) return Reply(mess.owner);
if (!text) return Reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} dycoders`)
await dycoders.updateProfileName(text)
Reply(`Berhasil Mengubah Nama Bot Tuan✅`)
}
break

case 'qc': {
  if (limitnya < 1) return Reply(mess.limit)
    try {
     
        let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
        if (!teks) return Reply(`Example: ${prefix + command} <Reply/Input Text>`);

      
        let ppuser;
        try {
            ppuser = await dycoders.profilePictureUrl(m.sender, 'image');
        } catch {
            ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'; 
        }

       
        const res = await quote(teks, ppuser, pushname);
        await dycoders.sendImageAsSticker(m.chat, res, m, {
            packname: `${global.packname}`,
            author: `${global.siowner}`
        });
    } catch (err) {
        console.error(err);
        Reply('Terjadi kesalahan saat membuat sticker.');
    }
    uselimit(sender);
    break;
}

 case 'toimg': {
 if (!quoted) reply ('m?.reply Image')
if (!/webp/.test(mime)) Reply (`Balas sticker dengan caption *${prefix + command}*`)
let media = await dycoders.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) reply (err)
let buffer = fs.readFileSync(ran)
dycoders.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

  default:
    if (budy.startsWith('>')) {
if (!siowner) return forbiden(mess.owner)
      try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await Reply(evaled);
      } catch (err) {
        Reply(String(err));
      }
    }
        
    if (budy.startsWith('<')) {
      if (!siowner) return forbiden(mess.owner)
        let kode = budy.trim().split(/ +/)[0]
          let teks
            try {
              teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
            } catch (e) {
              teks = e
            } finally {
              await Reply(require('util').format(teks))
            }
    }

    if (budy.startsWith('-')) {
if (!siowner) return forbiden(mess.owner)
      if (text == "rm -rf *") return Reply("😹")
        exec(budy.slice(2), (err, stdout) => {
      if (err) return Reply(`${err}`)
        if (stdout) return Reply(stdout)  
        })
      }
         
  }
  } catch (err) {
    console.log(require("util").format(err));
  }
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});
