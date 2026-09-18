const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");
const dataDir = path.join(__dirname, "data");
fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(__dirname, "data", "aqlyven.db"));

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    first_seen TEXT NOT NULL,
    last_seen TEXT NOT NULL,
    requests INTEGER DEFAULT 0,
    plan TEXT DEFAULT 'free',
    blocked INTEGER DEFAULT 0
  )
`);

try {
  const columns = db.prepare("PRAGMA table_info(users)").all().map(c => c.name);

  if (!columns.includes("username")) {
    db.exec("ALTER TABLE users ADD COLUMN username TEXT");
  }

  if (!columns.includes("password_hash")) {
    db.exec("ALTER TABLE users ADD COLUMN password_hash TEXT");
  }

  db.exec("CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username ON users(username)");
  console.log("✅ Account schema ready");
} catch (err) {
  console.error("ACCOUNT SCHEMA ERROR:", err.message);
}

console.log("✅ AQLYVEN database ready");

module.exports = db;
