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

// CF SETTINGS
global.ApiDns = 'UKl7YY-oTmuwL8kRKbwqhh6WSDK4VrWddvjdNKYJ'
global.ApiRules = 'GCc7rb_FZkD9S9UsV0Kelb1QSITo13HkGR46c_wt'
global.AccountId = '284c26430d8353d124756e4051dbf51d'

// CF SETTINGS 2 - 8
global.zoneid2 = '47afe9f1a5e9584ce6455b7f6f54010f'
global.ApiDns2 = 'UKl7YY-oTmuwL8kRKbwqhh6WSDK4VrWddvjdNKYJ'

global.zoneid3 = 'c2b8651f9d970f4c0b213f3a711c5be6'
global.ApiDns3 = 'UKl7YY-oTmuwL8kRKbwqhh6WSDK4VrWddvjdNKYJ'

global.zoneid4 = '6f9d2650dadf4c3110ef55382d9b5878'
global.AccountId2 = '7e975bdfaa66d26785827a486d09f52e'
global.ApiDns4 = 'czHbwD26uv7x3pEK1uv2XDPIoAFY7cpn5MVPHOoo'

global.zoneid5 = '372d436604ee728acdfa05c4c306ec3d'
global.ApiDns5 = 'UKl7YY-oTmuwL8kRKbwqhh6WSDK4VrWddvjdNKYJ'

global.zoneid6 = '0ea2d7e5371d912a128f0888bab30f81'
global.ApiDns6 = 'UKl7YY-oTmuwL8kRKbwqhh6WSDK4VrWddvjdNKYJ'

global.zoneid7 = 'b6651dff70249985371a35b8bb71806a'
global.ApiDns7 = 'UKl7YY-oTmuwL8kRKbwqhh6WSDK4VrWddvjdNKYJ'

global.zoneid8 = 'd76fefc63929c12685e02c71a27f63bc'
global.ApiDns8 = 'UKl7YY-oTmuwL8kRKbwqhh6WSDK4VrWddvjdNKYJ'

// Domain settings
global.domain2 = 'mycloudpremiumid.xyz'
global.domain3 = 'serverku-pterodactyl.web.id'
global.domain4 = 'pterodactyl-host.xyz'
global.wings = 'node-i.my.id'
global.domain6 = 'cloud-ku.my.id'
global.domain7 = 'panel-i.biz.id'
global.domain8 = 'premium-host.biz.id'

global.limitawal = "10"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
