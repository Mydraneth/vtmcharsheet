import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { UsersTable } from "./users";
import { CharactersTable } from "./characters";


export const ChroniclesTable = pgTable("chronicles", {
  id,
  user_id: uuid("user_id").notNull().references(() => UsersTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt,
  updatedAt,
});


export const ChroniclesRelations = relations(
  ChroniclesTable,
  ({ one, many }) => ({
    user: one(UsersTable, {
      fields: [ChroniclesTable.user_id],
      references: [UsersTable.id],
    }),
    characters: many(CharactersTable),
  }),
);
