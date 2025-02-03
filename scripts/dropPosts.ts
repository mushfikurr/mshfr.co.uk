import "dotenv/config";
import { drizzle } from "drizzle-orm/singlestore";
import { createConnection } from "mysql2/promise";
import { blogPosts } from "../src/lib/db/schema";

async function main() {
  const connection = await createConnection({
    host: process.env.SINGLESTORE_HOST,
    user: process.env.SINGLESTORE_USER,
    password: process.env.SINGLESTORE_PASS,
    port: Number(process.env.SINGLESTORE_PORT),
    database: process.env.SINGLESTORE_DATABASE,
    ssl: {
      rejectUnauthorized: true,
    },
  });
  const db = drizzle(connection);

  try {
    const deletedRows = await db.delete(blogPosts);
    console.log(`Deleted ${deletedRows.length} posts.`);
  } catch (error) {
    console.error("Error deleting posts:", error);
  } finally {
    await connection.end();
  }
}

main().catch(console.error);
