require("./justmylib/lib/module.js")

const fs = require('fs')
global.rowner = [["6285719898124", "dycoders.xyz", true], ["6285719898124", "dycoders.xyz", true]];
global.owner = "6285719898124"
global.status = true
global.welcome = true;
global.autoread = true
global.wm = "dycoders.xyz" 
global.botname = 'dy_net'
global.packname = 'dy_net'
global.siowner = "dycoders.xyz"
global.mess = {
  owner: "khusus owner cik",
  group: "khusus group cik",
  admin: "khusus admin cik",
  botAdmin: "bot harus admin cik",
  limit: "Yahh limit lu habis",
  wait: `sabar...`,
  done: 'done cihuy',
  res: 'khusus reseller cik',
  prem: 'khusus prem cik'
}
global.ifowner = "khusus owner cik"
global.tumb = [
  "https://files.catbox.moe/qur5ed.jpg"
];
global.forbiden = 'https://files.catbox.moe/69dmjt.jpg'
global.thumcloud = 'https://files.catbox.moe/zik1x6.jpg'

// CPANEL UTAMA
global.domain = "https://server-pterodactyl.dycoders.xyz";
global.apikey = "ptla_IQqbdCx8tiS9vub5nEc6y3FklzxumOiHNBl8tbZihFJ";
global.capikey = "ptlc_mPN6BEH0BgJBTk5xdoYtUisPiGUJIqMlHs4pRNvNick";
global.eggnya = "15"
global.locnya = "1"

// CPANEL V2
global.cpanelv2 = "https://server-pterodactyl.dycoders.xyz";
global.siptakey2 = "ptla_IQqbdCx8tiS9vub5nEc6y3FklzxumOiHNBl8tbZihFJ";
global.sipltcikey2 = "ptlc_mPN6BEH0BgJBTk5xdoYtUisPiGUJIqMlHs4pRNvNick";

global.wagc = "120363366464617179@g.us"
global.wmbot = "dycoders.xyz" 
global.saluran = "120363303267333730@newsletter"
global.idgc = "120363248826862499@g.us"

global.limitawal = "10"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
