import { Pool } from "pg";

export const db = new Pool({
  connectionString: process.env.NEXT_DATABASE_URL,
});
