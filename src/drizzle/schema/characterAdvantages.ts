import { pgTable, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { relations } from "drizzle-orm";
import { AdvantagesTable } from "./advantages";


export const CharacterAdvantagesTable = pgTable("character_advantages", {
  id,
  char_id: uuid("char_id")
    .notNull()
    .references(() => CharactersTable.id, { onDelete: "cascade" }),
  advantage_id: uuid("advantage_id")
    .notNull()
    .references(() => AdvantagesTable.id, { onDelete: "cascade" }),
});

export const CharacterAdvantagesRelations = relations(
  CharacterAdvantagesTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterAdvantagesTable.char_id],
      references: [CharactersTable.id],
    }),
    skill: one(AdvantagesTable, {
      fields: [CharacterAdvantagesTable.advantage_id],
      references: [AdvantagesTable.id],
    }),
  })
);
