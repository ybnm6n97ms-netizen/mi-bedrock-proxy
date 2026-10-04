const { createClient } = require("bedrock-protocol");

const client = createClient({
  realms: {
    pickRealm: (realms) => {
      console.log("Realms disponibles:");
      realms.forEach((realm, i) => {
        console.log(`${i}: ${realm.name}`);
      });

      return realms[0];
    }
  },

  onMsaCode: (data) => {
    console.log("Abre:", data.verification_uri);
    console.log("Código:", data.user_code);
  }
});

client.on("join", () => {
  console.log("¡Conectado al Realm!");
});

client.on("error", console.error);
