global.ApiDns = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";
global.ApiDns1 = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";
global.ApiDns1 = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";
global.ApiDns2 = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";
global.ApiDns3 = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";
global.ApiDns4 = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";
global.ApiDns5 = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";
global.ApiDns6 = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";
global.ApiDns7 = "FEo_2OYMZJMNnmsx69MF5NC0AGva3Yp9O9EEplTO";






global.zoneid1 = "0ea2d7e5371d912a128f0888bab30f81";
global.zoneid2 = "47afe9f1a5e9584ce6455b7f6f54010f";
global.zoneid3 = "372d436604ee728acdfa05c4c306ec3d";
global.zoneid4 = "b6651dff70249985371a35b8bb71806a";
global.zoneid5 = "d76fefc63929c12685e02c71a27f63bc";
global.zoneid6 = "c2b8651f9d970f4c0b213f3a711c5be6";
global.zoneid7 = "5f3abeffe122dac376636c6568f9f1b5";


global.AccountId = "284c26430d8353d124756e4051dbf51d";


global.domain1 = "cloud-ku.my.id";
global.domain2 = "mycloudpremiumid.xyz";
global.domain3 = "node-i.my.id";
global.domain4 = "panel-i.biz.id";
global.domain5 = "premium-host.biz.id";
global.domain6 = "serverku-pterodactyl.web.id";
global.domain7 = "srv-i.my.id";

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
