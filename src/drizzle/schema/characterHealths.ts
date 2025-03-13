import { integer, pgTable, uuid } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";


export const CharacterHealthsTable = pgTable("character_healths", {
  id,
  char_id: uuid("char_id").notNull().references(()=> CharactersTable.id, { onDelete: "cascade"}),
  max_health: integer("max_health").notNull(),
  current_aggravated: integer("current_aggravated").notNull().default(sql`max_health`),
  current_superficial: integer("current_superficial").notNull().default(sql`max_health`),
});


export const CharacterHealthRelations = relations(
    CharacterHealthsTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterHealthsTable.char_id],
      references: [CharactersTable.id],
    }),
  })
);
