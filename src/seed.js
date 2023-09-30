const db = require('@libsql/client/web')

// Load .env file into process.env
require('dotenv').config()

const client = db.createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_AUTH_TOKEN,
})

async function main() {
  console.log('Creating accounts table...')
  await client.execute(`
    CREATE TABLE IF NOT EXISTS accounts (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );
  `)

  console.log('Creating heroes table...')
  await client.execute(`
    CREATE TABLE IF NOT EXISTS heroes (
        id TEXT PRIMARY KEY,
        accountId TEXT NOT NULL,
        name TEXT NOT NULL,
        level TEXT NOT NULL,
        class TEXT NOT NULL,
        experience INTEGER NOT NULL DEFAULT 0,
        hiredAt TEXT NOT NULL,
        diedAt TEXT,
        FOREIGN KEY(accountId) REFERENCES accounts(id)
      );
  `)
}

main().catch((e) => {
  console.log(`Error: ${e.message}`)
})
