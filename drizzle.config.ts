import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "singlestore",
  schema: "src/lib/db/schema.ts",
  tablesFilter: ["portfolio_*"],
  dbCredentials: {
    host: process.env.SINGLESTORE_HOST!,
    user: process.env.SINGLESTORE_USER!,
    password: process.env.SINGLESTORE_PASSWORD!,
    port: parseInt(process.env.SINGLESTORE_PORT!),
    database: process.env.SINGLESTORE_DATABASE!,
    ssl: {},
  },
});
