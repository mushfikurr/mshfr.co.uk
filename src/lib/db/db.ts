import { drizzle } from "drizzle-orm/singlestore";
import { createPool, type Pool } from "mysql2/promise";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn =
  globalForDb.conn ??
  createPool({
    host: process.env.SINGLESTORE_HOST,
    port: parseInt(process.env.SINGLESTORE_PORT!),
    user: process.env.SINGLESTORE_USER,
    password: process.env.SINGLESTORE_PASS,
    database: process.env.SINGLESTORE_DATABASE,
    ssl: {},
    maxIdle: 0,
  });
if (process.env.NODE_ENV !== "production") globalForDb.conn = conn;

conn.addListener("error", (err) => {
  console.error("Database connection error:", err);
});

export const db = drizzle(conn, { schema });
