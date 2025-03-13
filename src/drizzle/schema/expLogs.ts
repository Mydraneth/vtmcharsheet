import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createdAt, id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { UsersTable } from "./users";

export const ExpLogsTable = pgTable("exp_logs", {
  id,
  user_id: uuid("user_id")
    .notNull()
    .references(() => UsersTable.id, { onDelete: "cascade" }),
  char_id: uuid("char_id")
    .notNull()
    .references(() => CharactersTable.id, { onDelete: "cascade" }),
  section: text("section"), // section of the character sheet that was changed (attributes, skills, etc)
  name: text("name"), // name of the item that was changed (strength, awareness, etc)
  prev_level: integer("prev_level"),
  new_level: integer("new_level"),
  expanditure: integer("expanditure"),
  createdAt,
});

export const ExpLogsRelations = relations(ExpLogsTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [ExpLogsTable.char_id],
    references: [UsersTable.id],
  }),
  character: one(CharactersTable, {
    fields: [ExpLogsTable.char_id],
    references: [CharactersTable.id],
  }),
}));
