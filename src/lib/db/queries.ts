import { db } from "@/lib/db/db";
import { blogPosts as blogPostsSchema } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const QUERIES = {
  getAllPosts: async function () {
    return db.select().from(blogPostsSchema).orderBy(blogPostsSchema.createdAt);
  },

  getPostById: async function (postId: bigint) {
    const post = await db
      .select()
      .from(blogPostsSchema)
      .where(eq(blogPostsSchema.id, postId));
    return post[0];
  },

  getPostByTitle: async function (title: string) {
    const post = await db
      .select()
      .from(blogPostsSchema)
      .where(eq(blogPostsSchema.title, title))
      .limit(1);
    return post.length > 0;
  },
};

export const MUTATIONS = {
  createPost: async function (
    title: string,
    description: string,
    slug: string,
    type: "projects" | "blog",
    date: number
  ) {
    return db.insert(blogPostsSchema).values({
      title,
      description,
      slug,
      type,
      createdAt: BigInt(date),
    });
  },

  updatePost: async function (
    postId: bigint,
    data: { title?: string; description?: string; slug?: string }
  ) {
    return db
      .update(blogPostsSchema)
      .set(data)
      .where(eq(blogPostsSchema.id, postId));
  },

  deletePost: async function (postId: bigint) {
    return db.delete(blogPostsSchema).where(eq(blogPostsSchema.id, postId));
  },
};
