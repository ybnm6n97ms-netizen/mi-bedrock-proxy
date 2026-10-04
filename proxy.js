const { Relay } = require("bedrock-protocol");

const relay = new Relay({
  // Puerto donde se conecta tu Minecraft Bedrock
  host: "0.0.0.0",
  port: 19132,

  // =========================
  // DESTINO: REALM
  // =========================
  destination: {
    realms: {
      pickRealm: (realms) => {
        console.log("\n=== REALMS DISPONIBLES ===");

        realms.forEach((realm, index) => {
          console.log(`${index}: ${realm.name}`);
        });

        console.log("===========================\n");

        // Por ahora entra al primer Realm disponible
        return realms[0];
      }
    }
  },

  // =========================
  // LOGIN MICROSOFT
  // =========================
  onMsaCode: (data) => {
    console.log("\n==============================");
    console.log("   INICIO DE SESIÓN MICROSOFT");
    console.log("==============================");

    console.log("Abre:");
    console.log(data.verification_uri);

    console.log("\nCódigo:");
    console.log(data.user_code);

    console.log("==============================\n");
  }
});

// =========================
// JUGADOR CONECTADO
// =========================

relay.on("connect", (player) => {
  console.log("📱 Jugador conectado al proxy.");

  // Realm → iPhone
  player.on("clientbound", ({ name }) => {
    console.log("Realm → jugador:", name);
  });

  // iPhone → Realm
  player.on("serverbound", ({ name }) => {
    console.log("Jugador → Realm:", name);
  });
});

// =========================
// ERRORES
// =========================

relay.on("error", (error) => {
  console.error("❌ Error del proxy:", error);
});

// =========================
// INICIAR PROXY
// =========================

relay.listen(() => {
  console.log("");
  console.log("================================");
  console.log("   MI BEDROCK PROXY INICIADO");
  console.log("================================");
  console.log("Puerto: 19132");
  console.log("Destino: REALM");
  console.log("================================");
});
