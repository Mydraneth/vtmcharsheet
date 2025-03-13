import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { CharacterSkillsTable } from "./characterSkills";
import { CharacterSpecialtiesTable } from "./characterSpecialties";

export const SkillsTable = pgTable("skills", {
  id,
  name: text("name").notNull(),
  description: text("description").notNull(),
});

export const SkillsRelations = relations(SkillsTable, ({ many }) => ({ 
  character: many(CharacterSkillsTable),
  char_specialties: many(CharacterSpecialtiesTable),
 }));
 