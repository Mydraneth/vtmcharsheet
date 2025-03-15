import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { UsersTable } from "./users";
import { ClansTable } from "./clans";
import { SectsTable } from "./sects";
import { PredatorTypesTable } from "./predatorTypes";
import { ChroniclesTable } from "./chronicles";
import { GroupsTable } from "./groups";
import { relations, sql } from "drizzle-orm";
import { CharacterHealthsTable } from "./characterHealths";
import { CharacterAlchemyPowersTable } from "./characterAlchemyPowers";
import { CharacterAttributesTable } from "./characterAttributes";
import { CharacterBloodpotenciesTable } from "./characterBloodpotencies";
import { CharacterDisciplinePowersTable } from "./characterDisciplinePowers";
import { CharacterDisciplinesTable } from "./characterDisciplines";
import { CharacterHumanityTable } from "./characterHumanity";
import { CharacterProfileTable } from "./characterProfile";
import { CharacterSkillsTable } from "./characterSkills";
import { CharacterSpecialtiesTable } from "./characterSpecialties";
import { CharacterWillpowersTable } from "./characterWillpowers";
import { CharacterAdvantagesTable } from "./characterAdvantages";
import { ClanBanesTable } from "./clanBanes";
import { ClanCompulsionsTable } from "./clanCompulsions";
import { ExpLogsTable } from "./expLogs";
import { CharacterRitualsTable } from "./characterRituals";

export const charType = ["All", "Ghoul", "Vampire"] as const;
export type CharType = (typeof charType)[number];
export const charTypeEnum = pgEnum("type", charType);

export const CharactersTable = pgTable("characters", {
  id,
  user_id: uuid("user_id")
    .notNull()
    .references(() => UsersTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  clan_id: uuid("clan_id")
    .references(() => ClansTable.id, { onDelete: "set null" }),
  clan_bane: uuid("clan_bane").references(() => ClanBanesTable.id, { onDelete: "set null" }),
  clan_compulsion: uuid("clan_compulsion").references(() => ClanCompulsionsTable.id, { onDelete: "set null" }),
  sect_id: uuid("sect_id")
    .references(() => SectsTable.id, { onDelete: "set null" }),
  player: text("player").notNull(),
  predator_type: uuid("predator_type")
    .notNull()
    .references(() => PredatorTypesTable.id, { onDelete: "no action" }),
  generation: integer("generation").notNull(),
  chronicle_id: uuid("chronicle_id")
    .references(() => ChroniclesTable.id, { onDelete: "no action" }),
  custom_chronicle: text("custom_chronicle"),
  ambition: text("ambition").notNull(),
  desire: text("desire").notNull(),
  sire: text("sire").notNull(),
  type: charTypeEnum("type").notNull().default("Vampire"),
  total_experience: integer("total_experience").notNull().default(0),
  chronicle_tenets: text("chronicle_tenets").notNull(),
  group_id: uuid("group_id")
    .notNull()
    .references(() => GroupsTable.id, { onDelete: "set null" }),
});

export const CharactersRelations = relations(CharactersTable, ({ one, many }) => ({
  user: one(UsersTable, {
    fields: [CharactersTable.user_id],
    references: [UsersTable.id],
  }),
  clan: one(ClansTable, {
    fields: [CharactersTable.clan_id],
    references: [ClansTable.id],
  }),
  sect: one(SectsTable, {
    fields: [CharactersTable.sect_id],
    references: [SectsTable.id],
  }),
  predator_type: one(PredatorTypesTable, {
    fields: [CharactersTable.predator_type],
    references: [PredatorTypesTable.id],
  }),
  chronicle: one(ChroniclesTable, {
    fields: [CharactersTable.chronicle_id],
    references: [ChroniclesTable.id],
  }),
  group: one(GroupsTable, {
    fields: [CharactersTable.group_id],
    references: [GroupsTable.id],
  }),
  clan_bane: one(ClanBanesTable, {
    fields: [CharactersTable.clan_bane],
    references: [ClanBanesTable.id],
  }),
  clan_compulsion: one(ClanCompulsionsTable, {
    fields: [CharactersTable.clan_compulsion],
    references: [ClanCompulsionsTable.id],
  }),
  health: many(CharacterHealthsTable),
  alchemy_powers: many(CharacterAlchemyPowersTable),
  attributes: many(CharacterAttributesTable),
  blood_potency: many(CharacterBloodpotenciesTable),
  discipline_powers: many(CharacterDisciplinePowersTable),
  disciplines: many(CharacterDisciplinesTable),
  hunger: many(CharacterHealthsTable),
  humanity: many(CharacterHumanityTable),
  profile: many(CharacterProfileTable),
  skills: many(CharacterSkillsTable),
  specialties: many(CharacterSpecialtiesTable),
  willpower: many(CharacterWillpowersTable),
  advantages: many(CharacterAdvantagesTable),
  exp_logs: many(ExpLogsTable),
  rituals: many(CharacterRitualsTable),
}));
