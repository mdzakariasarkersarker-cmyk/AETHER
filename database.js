const Database = require("better-sqlite3");
const path = require("path");

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

console.log("✅ AQLYVEN database ready");

module.exports = db;
