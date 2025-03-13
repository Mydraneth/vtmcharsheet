import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { CharacterBloodpotenciesTable } from "./characterBloodpotencies";

export const BloodPotencyTable = pgTable("blood_potency", {
  id,
  level: integer("level").notNull(),
  description: text("description"),
  blood_surge: text("blood_surge"),
  damage_mend: text("damage_mend"),
  power_bonus: text("power_bonus"),
  rc_reroll: text("rc_reroll"),
  bane_severity: integer("bane_severity"),
  feeding_penalty: text("feeding_penalty"),
});

export const BloodPotencyRelations = relations(BloodPotencyTable, ({ many }) => ({ 
  characters: many(CharacterBloodpotenciesTable),
} ) );