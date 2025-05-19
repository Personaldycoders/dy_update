const https = require("https");

const configUrl = "https://github.com/dycoders45/domain/raw/refs/heads/main/domainku.json";

function loadConfig() {
  https.get(configUrl, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const config = JSON.parse(data);

        global.CF_Settings = config.cf_settings;
        global.Domains = config.domains;

        // Generate global variables dynamically for Zone ID, API DNS, API Rules, and Account ID
        Object.keys(global.CF_Settings).forEach((zone) => {
          const zoneNumber = zone.replace("zoneid", ""); // Ambil angka dari zoneid
          const zoneData = global.CF_Settings[zone];

          global[`zoneid${zoneNumber}`] = zoneData[`zone_id${zoneNumber}`];
          global[`ApiDns${zoneNumber}`] = zoneData[`api_dns${zoneNumber}`];
          global[`ApiRules${zoneNumber}`] = zoneData[`api_rules`] || null;
          global[`AccountId${zoneNumber}`] = zoneData[`account_id`] || null;
        });

        // Generate global variables for domains
        Object.keys(global.Domains).forEach((key, index) => {
          global[`domain${index + 1}`] = global.Domains[key];
        });

        console.log("✅ Config Loaded Successfully!");
      } catch (error) {
        console.error("❌ Error parsing config:", error.message);
      }
    });
  }).on("error", (err) => {
    console.error("❌ Error fetching config:", err.message);
  });
}

// Panggil fungsi untuk load config saat script dijalankan
loadConfig();
