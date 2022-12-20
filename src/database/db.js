import dotenv from 'dotenv';
import pg from 'pg';

const { Pool } = pg;

async function createConnectionPool() {
  try {
    dotenv.config();
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined');
    }
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    await pool.connect();
    console.log('connected to PostgreSQL');
    return pool;
  } catch (error) {
    console.error(error);
  }
}

export default createConnectionPool();
