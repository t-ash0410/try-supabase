const { BFF_PORT, CORS_ORIGIN, USE_HTTPS, TLS_CERT_PATH, TLS_KEY_PATH } =
  process.env

const portAsNumber = BFF_PORT ? Number(BFF_PORT) : 8080
const corsOrigin = CORS_ORIGIN || 'https://localhost:3000'
const useHttps = USE_HTTPS === 'true'
const tlsCertPath = TLS_CERT_PATH || ''
const tlsKeyPath = TLS_KEY_PATH || ''

export {
  portAsNumber as BFF_PORT,
  corsOrigin as CORS_ORIGIN,
  useHttps as USE_HTTPS,
  tlsCertPath as TLS_CERT_PATH,
  tlsKeyPath as TLS_KEY_PATH,
}
