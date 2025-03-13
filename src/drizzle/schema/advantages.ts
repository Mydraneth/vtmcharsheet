import { pgTable, pgEnum, text, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { ClansTable } from "./clans";
import { SectsTable } from "./sects";
import { CharacterAdvantagesTable } from "./characterAdvantages";

export const advantageType = ["Background", "Flaw", "Merit", "Loresheet"] as const;
export type AdvantageType = (typeof advantageType)[number];
export const typeAdvantageType = pgEnum("type", advantageType);

export const forWhom = ["Ghoul", "Vampire"] as const;
export type ForWhom = (typeof forWhom)[number];
export const forWhomEnum = pgEnum("forWhom", forWhom);

export const AdvantagesTable = pgTable("advantages", {
  id,
  parent_name: text("parent_name"),
  name: text("name").notNull(),
  description: text("description").notNull(),
  type: typeAdvantageType("type").notNull(),
  level: integer("level").notNull(),
  for: forWhomEnum("for").notNull(),
  clan_req: uuid("clan_req")
    .references(() => ClansTable.id, { onDelete: "set null" }),
  sect_req: uuid("sect_req")
    .notNull()
    .references(() => SectsTable.id, { onDelete: "set null" }),
});


export const AdvantagesRelations = relations(AdvantagesTable, ({ one, many }) => ({
  clan: one(ClansTable, {
    fields: [AdvantagesTable.clan_req],
    references: [ClansTable.id],
  }),
  sect: one(SectsTable, {
    fields: [AdvantagesTable.sect_req],
    references: [SectsTable.id],
  }),
  character_advantages: many(CharacterAdvantagesTable),
}));
