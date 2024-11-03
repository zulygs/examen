import { Pool } from "pg";

const conn = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "zulypost",
  database: "postgres",
  ssl: true,
});

export { conn };
