import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const UsersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);

/**
// Relation example
export const usersRelations = relations(users, ({ many }) => ({
	posts: many(posts),
}));
 
export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	content: text('content').notNull(),
	authorId: integer('author_id').notNull(),
});
 
export const postsRelations = relations(posts, ({ one }) => ({
	author: one(users, { fields: [posts.authorId], references: [users.id] }),
}));
 */
