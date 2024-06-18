const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/database.db');
const db = ne   w sqlite3.Database(dbPath);

