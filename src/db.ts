import { Client, createClient } from '@libsql/client/web'

const client = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_AUTH_TOKEN!,
})

export function getDatabaseClient(): Client {
  return client
}
