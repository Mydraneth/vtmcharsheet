import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { DisciplinePowersTable } from "./disciplinePowers";
import { CharacterDisciplinesTable } from "./characterDisciplines";

export const DisciplinesTable = pgTable("disciplines", {
  id,
  name: text("name").notNull(),
  description: text("description").notNull(),
  nicknames: text("nicknames").notNull(),
  characteristics: text("characteristics").notNull(),
  type: text("type").notNull(),
  masquerade_threat: text("masquerade_threat").notNull(),
  blood_resonance: text("blood_resonance").notNull(),
});

export const DisciplinesRelations = relations(DisciplinesTable, ({ many }) => ({
  discipline_powers: many(DisciplinePowersTable),
  character: many(CharacterDisciplinesTable),
}));
