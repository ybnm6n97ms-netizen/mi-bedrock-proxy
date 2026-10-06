const { Relay } = require('bedrock-protocol')
const relay = new Relay({
  host: '0.0.0.0',
  port: 19134,
  offline: false,
  destination: { offline: false, realms: { realmInvite: 'gbUiriAzZ2q8X94' } },
  onMsaCode: (d) => { console.log(d.verification_uri); console.log(d.user_code) }
})
relay.listen(() => console.log('LISTO'))
