// *ScBot By dycoders
// NO HAPUS WM! INI JIKA KALIAN TAU CARA MENGHARGAI SEBUAH CODE PADA SC INI
// Kalian Bisa Ganti rename atau pun itu kecuali Hapus Wm INI
// TQ TO ME 
// No kis No hug Only Fix bug

//SALURAN DEV "https://whatsapp.com/channel/0029VagpRL811ulLEm4TnO0h" WA DEVELOPER wa.me/6285719898124
const chalk = require('chalk');
const listcolor = [chalk.cyan, chalk.magenta, chalk.green, chalk.yellow, chalk.blue];
const CFonts = require('cfonts');

const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
console.log(randomcolor(`
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣶⣶⣶⣤⣄⣀⣀⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣶⣤⡀⠄
⠄⠄⠄⠄⠄⠄⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣜⠿⠿⣿⣿⣧⢓
⠄⠄⠄⠄⠄⡠⢛⣿⣿⣿⡟⣿⣿⣽⣋⠻⢻⣿⣿⣿⣿⡻⣧⡠⣭⣭⣿⡧
⠄⠄⠄⠄⠄⢠⣿⡟⣿⢻⠃⣻⣨⣻⠿⡀⣝⡿⣿⣿⣷⣜⣜⢿⣝⡿⡻⢔
⠄⠄⠄⠄⠄⢸⡟⣷⢿⢈⣚⣓⡡⣻⣿⣶⣬⣛⣓⣉⡻⢿⣎⠢⠻⣴⡾⠫
⠄⠄⠄⠄⠄⢸⠃⢹⡼⢸⣿⣿⣿⣦⣹⣿⣿⣿⠿⠿⠿⠷⣎⡼⠆⣿⠵⣫
⠄⠄⠄⠄⠄⠈⠄⠸⡟⡜⣩⡄⠄⣿⣿⣿⣿⣶⢀⢀⣿⣷⣿⣿⡐⡇⡄⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠁⢶⢻⣧⣖⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣇⡟⣇⣷⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣆⣤⣽⣿⡿⠿⠿⣿⣿⣦⣴⡇⣿⢨⣾⣿⢹⢸
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⠊⡛⢿⣿⣿⣿⣿⡿⣫⢱⢺⡇⡏⣿⣿⣸⡼
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡿⠄⣿⣷⣾⡍⣭⣶⣿⣿⡌⣼⣹⢱⠹⣿⣇⣧
⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⠁⣤⣭⣭⡌⢁⣼⣿⣿⣿⢹⡇⣭⣤⣶⣤⡝⡼
⠄⣀⠤⡀⠄⠄⠄⠄⠄⡏⣈⡻⡿⠃⢀⣾⣿⣿⣿⡿⡼⠁⣿⣿⣿⡿⢷⢸
⢰⣷⡧⡢⠄⠄⠄⠄⠠⢠⡛⠿⠄⠠⠬⠿⣿⠭⠭⢱⣇⣀⣭⡅⠶⣾⣷⣶
⠈⢿⣿⣧⠄⠄⠄⠄⢀⡛⠿⠄⠄⠄⠄⢠⠃⠄⠄⡜⠄⠄⣤⢀⣶⣮⡍⣴
⠄⠈⣿⣿⡀⠄⠄⠄⢩⣝⠃⠄⠄⢀⡄⡎⠄⠄⠄⠇⠄⠄⠅⣴⣶⣶⠄⣶
`));
CFonts.say(`dycoders!`, { 
    font: 'tiny', 
    align: 'left', 
    colors: ['blue'] 
});
require('../config');

const { 
    default: 
    makeWASocket, 
    useMultiFileAuthState, 
    DisconnectReason, 
    makeInMemoryStore,
    jidDecode, 
    downloadContentFromMessage,
    generateWAMessageFromContent
} = require("@whiskeysockets/baileys");
const moment = require('moment-timezone');
const pino = require('pino');
const readline = require("readline");
const fs = require('fs');
const crypto = require('crypto')
const {
    Boom 
} = require('@hapi/boom');

const {
    smsg,
    formatSize, 
    isUrl, 
    generateMessageTag,
    getBuffer,
    getSizeMedia, 
    runtime,
    generateProfilePicture,
    fetchJson, 
    sleep 
} = require('./lib/myfunction.js');

const usePairingCode = true;

const question = (text) => {
    const rl = readline.createInterface({ 
        input: process.stdin, output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve)
    });
}

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
});

async function dycodersstart() {
    const { state, saveCreds } = await useMultiFileAuthState('./session');
    const dycoders = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: !usePairingCode,
        auth: state,
        browser: ["Ubuntu", "Chrome", "20.0.04"]
    });

    if (usePairingCode && !dycoders.authState.creds.registered) {
        const phoneNumber = await question('please enter your WhatsApp number, starting with 62:\n');
        const code = await dycoders.requestPairingCode(phoneNumber.trim());
        console.log(`your pairing code: ${code}`);
    }

    store.bind(dycoders.ev);
   
    dycoders.ev.on('messages.upsert', async chatUpdate => {
       try {
	 let mek = chatUpdate.messages[0]
         if (!mek.message) return
	 mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
	 if (mek.key && mek.key.remoteJid === 'status@broadcast') return
     if (!dycoders.public && mek.key.remoteJid !== global.owner && !mek.key.fromMe && chatUpdate.type === 'notify') return
	 let m = smsg(dycoders, mek, store)
	 require("../dy-case.js")(dycoders, m, chatUpdate, mek, store)
       } catch (err) {
	 console.error(err);		
       }
    })

    dycoders.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    dycoders.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = dycoders.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
        }
    });



dycoders.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    
    if (!mime) throw new Error('File tidak memiliki mimetype');
    
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension && type ? `${filename}.${type.ext}` : filename;

    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
};

async function imageToWebp (media) {
    const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)
    fs.writeFileSync(tmpFileIn, media)
    await new Promise((resolve, reject) => {
        ffmpeg(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })
    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

async function videoToWebp (media) {
    const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
    fs.writeFileSync(tmpFileIn, media)
    await new Promise((resolve, reject) => {
        ffmpeg(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
                "-loop",
                "0",
                "-ss",
                "00:00:00",
                "-t",
                "00:00:05",
                "-preset",
                "default",
                "-an",
                "-vsync",
                "0"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })
    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

async function writeExifImg (media, metadata) {
    let wMedia = await imageToWebp(media)
    const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)
    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

async function writeExifVid (media, metadata) {
    let wMedia = await videoToWebp(media)
    const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)
    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

async function writeExif (media, metadata) {
    let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await imageToWebp(media.data) : /video/.test(media.mimetype) ? await videoToWebp(media.data) : ""
    const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)
    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}
dycoders.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../tmp/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }
    }


dycoders.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await dycoders.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;
  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }
  let opt = {
    filename
  };
  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;
  let mtype = '',
    mimetype = type.mime,
    convert;
  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';
  if (options.asDocument) mtype = 'document';
  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;
  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;
  try {
    m = await dycoders.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await dycoders.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}


dycoders.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await dycoders.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

dycoders.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
const tumbnx = global.tumb
const thumbnailIndex = tumbnx[Math.floor(Math.random() * tumbnx.length)];
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await dycoders.sendMessage(jid, { sticker: { url: buffer,
contextInfo: {
    externalAdReply: {
    thowAdAttribution: true,
    title: wm,
    body: `life must be tortured`,
    mediaType: 3,
    renderLargerThumbnail: false,
    thumbnailUrl: thumbnailIndex, 
    sourceUrl: global.wagc
 } } 
}, ...options }, { quoted })
return buffer}


    
    




dycoders.ev.on('group-participants.update', async (anu) => {
    if (global.welcome) {
        console.log(anu);
        try {
            let metadata = await dycoders.groupMetadata(anu.id);
            let participants = anu.participants;

            for (let num of participants) {
                try {
                    // Coba ambil foto profil user
                    ppuser = await dycoders.profilePictureUrl(num, 'image');
                } catch (err) {
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
                }

                try {
                    // Coba ambil foto profil grup
                    ppgroup = await dycoders.profilePictureUrl(anu.id, 'image');
                } catch (err) {
                    ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';
                }

                // Cek jumlah member saat ini
                let memb = metadata.participants.length;

                // Kalau user baru masuk
                if (anu.action === 'add') {
                    let dycodersName = num;
                    let welcomeMessage = `👋 *Selamat Datang* *@${dycodersName.split("@")[0]}* di grup!`;

                    // Kirim pesan dalam format `product`
                    await dycoders.sendMessage(anu.id, {
                        product: {
                            productImage: { url: ppuser }, // Pakai foto profil user
                            productImageCount: 1,
                            title: "SELAMAT DATANG", // Judul di gambar
                            priceAmount1000: 0, // Tidak ada harga
                            currencyCode: "IDR",
                            retailerId: "100001",
                        },
                        businessOwnerJid: num,
                        caption: welcomeMessage, // Pesan welcome
                        title: "Welcome to the Group!", // Title product
                        media: true,
                        viewOnce: true,
                        shop: "WA",
                        id: "171123",
                    });

                // Kalau user keluar grup
                } else if (anu.action === 'remove') {
                    let dycodersName = num;
                    let goodbyeMessage = `😢 *Sampai Jumpa* *@${dycodersName.split("@")[0]}*, semoga sukses di luar sana!`;

                    // Kirim pesan dalam format `product`
                    await dycoders.sendMessage(anu.id, {
                        product: {
                            productImage: { url: ppuser }, // Pakai foto profil user
                            productImageCount: 1,
                            title: "SELAMAT TINGGAL", // Judul di gambar
                            priceAmount1000: 0, // Tidak ada harga
                            currencyCode: "IDR",
                            retailerId: "100002",
                        },
                        businessOwnerJid: num,
                        caption: goodbyeMessage, // Pesan goodbye
                        title: "Goodbye and Take Care!", // Title product
                        media: true,
                        viewOnce: true,
                        shop: "WA",
                        id: "171124",
                    });
                }
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }
});




    dycoders.public = global.status;
dycoders.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
        const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        console.log(lastDisconnect.error);

        if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
            process.exit();
        } else if (reason === DisconnectReason.badSession) {
            console.log(`Bad Session File, Please Delete Session and Scan Again`);
            process.exit();
        } else if (reason === DisconnectReason.connectionClosed) {
            console.log('Connection closed, reconnecting...');
            process.exit();
        } else if (reason === DisconnectReason.connectionLost) {
            console.log('Connection lost, trying to reconnect');
            process.exit();
        } else if (reason === DisconnectReason.connectionReplaced) {
            console.log('Connection Replaced, Another New Session Opened, Please Close Current Session First');
            dycoders.logout();
        } else if (reason === DisconnectReason.loggedOut) {
            console.log(`Device Logged Out, Please Scan Again And Run.`);
            dycoders.logout();
        } else if (reason === DisconnectReason.restartRequired) {
            console.log('Restart Required, Restarting...');
            await dycodersstart();
        } else if (reason === DisconnectReason.timedOut) {
            console.log('Connection TimedOut, Reconnecting...');
            dycodersstart();
        }
    } else if (connection === "connecting") {
        console.log('Menghubungkan . . . ');
    } else if (connection === "open") {
        console.log('Bot Berhasil Tersambung');

        const notifikasi = `Terhubung ke ${dycoders.user.id.split(":")[0]}`;
        
        setTimeout(() => {
            dycoders.sendMessage("6285719898124@s.whatsapp.net", { text: notifikasi }, {});
        }, 5000); 
    }
});


    dycoders.sendText = (jid, text, quoted = '', options) => {
	    dycoders.sendMessage(jid, { text: text, ...options }, { quoted });
    }
    
    dycoders.downloadMediaMessage = async (message) => {
          let mime = (message.msg || message).mimetype || ''
          let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
          const stream = await downloadContentFromMessage(message, messageType)
          let buffer = Buffer.from([])
            for await(const chunk of stream) {
		buffer = Buffer.concat([buffer, chunk])}
	    return buffer
    } 
    
    dycoders.ev.on('creds.update', saveCreds);
    return dycoders;
}

dycodersstart();

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file);
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file];
    require(file);
});
