const { createServer } = require("bedrock-protocol");

const server = createServer({
  host: "0.0.0.0",
  port: 19132,
  offline: true
});

server.on("connect", (client) => {
  console.log(`Jugador conectado: ${client.username}`);
});

console.log("Proxy Bedrock iniciado en el puerto 19132");
