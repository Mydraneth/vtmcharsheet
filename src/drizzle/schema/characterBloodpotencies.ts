import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { relations } from "drizzle-orm";
import { ClanBanesTable } from "./clanBanes";
import { ClanCompulsionsTable } from "./clanCompulsions";
import { BloodPotencyTable } from "./bloodPotency";

export const CharacterBloodpotenciesTable = pgTable("character_bloodpotencies", {
  id,
  char_id: uuid("char_id")
    .notNull()
    .references(() => CharactersTable.id, { onDelete: "cascade" }),
  blood_potency_level: uuid("blood_potency_level").references(() => BloodPotencyTable.id, { onDelete: "set null" }),
  blood_surge: text("blood_surge"),
  bane_severity: integer("bane_severity").default(0),
  power_bonus: text("power_bonus"),
  feeding_penalty: text("feeding_penalty"),
  mend_amount: integer("mend_amount"),
  rc_reroll: text("rc_reroll"),
  clane_bane: uuid("clane_bane").references(() => ClanBanesTable.id, { onDelete: "set null" }),
  clan_compulsion: uuid("clan_compulsion").references(() => ClanCompulsionsTable.id, { onDelete: "set null" }),

});

export const CharacterBloodpotenciesRelations = relations(
  CharacterBloodpotenciesTable,
  ({ one }) => ({
    character: one(CharactersTable, {
      fields: [CharacterBloodpotenciesTable.char_id],
      references: [CharactersTable.id],
    }),
    bane: one(ClanBanesTable, {
      fields: [CharacterBloodpotenciesTable.clane_bane],
      references: [ClanBanesTable.id],
    }),
    compulsion: one(ClanCompulsionsTable, {
      fields: [CharacterBloodpotenciesTable.clan_compulsion],
      references: [ClanCompulsionsTable.id],
    }),
    blood_potency_level: one(BloodPotencyTable, {
      fields: [CharacterBloodpotenciesTable.blood_potency_level],
      references: [BloodPotencyTable.id],
  })
}));
