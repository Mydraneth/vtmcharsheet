import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";


export const CharacterProfileTable = pgTable("character_profile", {
  id,
  char_id: uuid("char_id").notNull().references(()=> CharactersTable.id, { onDelete: "cascade"}),
  description: text("description").notNull(),
  birthday: timestamp("birthday", { withTimezone: true }).notNull(),
  notes: text("notes"),
  age: integer("age").notNull(),
  embracedAt: timestamp("embraced_at", { withTimezone: true }).notNull(),
  apparentAge: integer("apparent_age").notNull(),
  concept: text("concept"),
});


export const CharacterProfileRelations = relations(
    CharacterProfileTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterProfileTable.id],
      references: [CharactersTable.id],
    }),
  })
);
