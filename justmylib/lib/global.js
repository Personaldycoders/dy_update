
// *ScBot By dycoders
// NO HAPUS WM! INI JIKA KALIAN TAU CARA MENGHARGAI SEBUAH CODE PADA SC INI
// Kalian Bisa Ganti rename atau pun itu kecuali Hapus Wm INI
// TQ TO ME 
// No kis No hug Only Fix bug

//SALURAN DEV "https://whatsapp.com/channel/0029VagpRL811ulLEm4TnO0h" WA DEVELOPER wa.me/6285719898124
require("./module")
const fs = require('fs');
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})