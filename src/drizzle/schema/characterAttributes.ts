import { integer, pgTable, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { relations } from "drizzle-orm";
import { AttributesTable } from "./attributes";

export const CharacterAttributesTable = pgTable("character_attributes", {
  id,
  char_id: uuid("char_id")
    .notNull()
    .references(() => CharactersTable.id, { onDelete: "cascade" }),
  attribute_id: uuid("attribute_id")
    .notNull()
    .references(() => AttributesTable.id, { onDelete: "cascade" }),
  level: integer("level").notNull().default(0),
});

export const CharacterAttributesRelations = relations(
  CharacterAttributesTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterAttributesTable.char_id],
      references: [CharactersTable.id],
    }),
    attribute: one(AttributesTable, {
      fields: [CharacterAttributesTable.attribute_id],
      references: [AttributesTable.id],
    }),
  })
);
