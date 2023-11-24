const { Client } = require("fnbr");

(async () => {
  const client = new Client({
      auth: {
        killOtherTokens: false,
        deviceAuth: {
            deviceId: '', 
            accountId: '',
            secret: ''
        }
    },
    connectToXMPP: false,
    forceNewParty: false,
  });

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.displayName}`);

    setInterval(function () {
      client.party.me.setOutfit(
        "CID_029_Athena_Commando_F_Halloween",
        [{ channel: "Material", variant: "Mat3" }],
        [],
        "/Game/Athena/Items/Cosmetics/Characters"
      );
    }, 2000);
  });

  client.login();
})();
