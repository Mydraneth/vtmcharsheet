import { integer, pgTable, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { relations } from "drizzle-orm";

export const CharacterHumanityTable = pgTable("character_humanity", {
  id,
  char_id: uuid("char_id")
    .notNull()
    .references(() => CharactersTable.id, { onDelete: "cascade" }),
  level: integer("level").notNull().default(0),
  stain_count: integer("stain_count").notNull().default(0),
});

export const CharacterHumanityRelations = relations(
  CharacterHumanityTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterHumanityTable.char_id],
      references: [CharactersTable.id],
    }),
  })
);
