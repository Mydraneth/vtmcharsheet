import { integer, pgTable, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { relations } from "drizzle-orm";

export const CharacterHungersTable = pgTable("character_hungers", {
  id,
  char_id: uuid("char_id")
    .notNull()
    .references(() => CharactersTable.id, { onDelete: "cascade" }),
  level: integer("level").notNull().default(0)
});

export const CharacterHungersRelations = relations(
  CharacterHungersTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterHungersTable.char_id],
      references: [CharactersTable.id],
    }),
  })
);
