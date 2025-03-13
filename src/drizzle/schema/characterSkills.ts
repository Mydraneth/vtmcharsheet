import { integer, pgTable, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { relations } from "drizzle-orm";
import { SkillsTable } from "./skills";


export const CharacterSkillsTable = pgTable("character_skills", {
  id,
  char_id: uuid("char_id")
    .notNull()
    .references(() => CharactersTable.id, { onDelete: "cascade" }),
  skill_id: uuid("skill_id")
    .notNull()
    .references(() => SkillsTable.id, { onDelete: "cascade" }),
    level: integer("level").notNull().default(0),
});

export const CharacterSkillsRelations = relations(
  CharacterSkillsTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterSkillsTable.char_id],
      references: [CharactersTable.id],
    }),
    skill: one(SkillsTable, {
      fields: [CharacterSkillsTable.skill_id],
      references: [SkillsTable.id],
    }),
  })
);
