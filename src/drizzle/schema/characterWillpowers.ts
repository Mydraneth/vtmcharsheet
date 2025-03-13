import { integer, pgTable, uuid } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";


export const CharacterWillpowersTable = pgTable("character_willpowers", {
  id,
  char_id: uuid("char_id").notNull().references(()=> CharactersTable.id, { onDelete: "cascade"}),
  max_willpower: integer("max_willpower").notNull(),
  current_aggravated: integer("current_aggravated").notNull().default(sql`max_willpower`),
  current_superficial: integer("current_superficial").notNull().default(sql`max_willpower`),
});


export const CharacterWillpowersRelations = relations(
    CharacterWillpowersTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterWillpowersTable.char_id],
      references: [CharactersTable.id],
    }),
  })
);
