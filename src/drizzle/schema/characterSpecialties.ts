import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { SkillsTable } from "./skills";
import { relations } from "drizzle-orm";

export const CharacterSpecialtiesTable = pgTable("character_specialties", {
  id,
  char_id: uuid("char_id")
    .notNull()
    .references(() => CharactersTable.id, { onDelete: "cascade" }),
  skill_id: uuid("skill_id")
    .notNull()
    .references(() => SkillsTable.id, { onDelete: "set null" }),
  specialty_name: text("specialty_name").notNull(),
});

export const CharacterSpecialtiesRelations = relations(
  CharacterSpecialtiesTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterSpecialtiesTable.char_id],
      references: [CharactersTable.id],
    }),
    skill: one(SkillsTable, {
      fields: [CharacterSpecialtiesTable.skill_id],
      references: [SkillsTable.id],
    }),
  })
);
