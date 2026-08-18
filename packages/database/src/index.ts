import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema.js';

const sqlite = new Database('sqlite.db');
sqlite.pragma('journal_mode = WAL');

export const closeDb = () => {
  sqlite.close();
};

export const db = drizzle(sqlite, { schema });
export * from './schema.js';
