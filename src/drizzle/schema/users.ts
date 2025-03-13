import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { ChroniclesTable } from "./chronicles";
import { GroupsTable } from "./groups";




export const UsersTable = pgTable("users", {
    id,
    clerkUserId: text("clerk_user_id").notNull().unique(),
    email: text("email").notNull().unique(),
    name: text("name").notNull(),
    imageUrl: text("image_url"),
    deletedAt: timestamp("deleted_at",{ withTimezone: true }),
    createdAt,
    updatedAt,
})

export const UsersRelations = relations(UsersTable, ({ many }) => ({
  chronicles: many(ChroniclesTable),
  groups: many(GroupsTable),
}));  