import dotenv from 'dotenv';
import pg from 'pg';

const { Pool } = pg;
dotenv.config();

let connection;
try {
  connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  await connection.connect();
  console.log('Connected to PostgreSQL');
} catch (error) {
  console.log(error);
}

export default connection;
