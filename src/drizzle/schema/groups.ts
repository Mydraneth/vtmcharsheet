import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { CharactersTable } from "./characters";

export const GroupsTable: any = pgTable("char_groups", {
  id,
  user_id: uuid("user_id")
    .notNull()
    .references(() => UsersTable.id, { onDelete: "cascade" }),
  parent_id: uuid("parent_id").references(()=> GroupsTable.id, { onDelete: "set null"}),
  name: text("name").notNull(),
  description: text("description").notNull(),
});

export const GroupsRelations = relations(
    GroupsTable,
    ({ one, many }) => ({
        group: one(GroupsTable, {
            fields: [GroupsTable.parent_id],
            references: [GroupsTable.id],
        }),
        user: one (UsersTable, {
            fields: [GroupsTable.user_id],
            references: [UsersTable.id],
        }),
        characters: many(CharactersTable),
        children: many(GroupsTable)
    })
);