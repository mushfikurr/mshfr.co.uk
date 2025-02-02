import {
  bigint,
  singlestoreTableCreator,
  text,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => `portfolio_${name}`
);

export const blogPosts = createTable("blog_posts", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  slug: text("slug").notNull(),
  createdAt: bigint("created_at", { mode: "bigint" }).notNull(),
});
