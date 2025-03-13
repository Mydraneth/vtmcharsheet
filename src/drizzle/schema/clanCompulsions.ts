import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { ClansTable } from "./clans";
import { CharactersTable } from "./characters";


export const ClanCompulsionsTable = pgTable("clan_compulsions", {
  id,
  name: text("name").notNull(),
  clan_id: uuid("clan_id")
    .notNull()
    .references(() => ClansTable.id, { onDelete: "restrict" }),
  description: text("description").notNull(),
});


export const ClanCompulsionsRelations = relations(
  ClanCompulsionsTable,
  ({ one, many }) => ({
    clan: one(ClansTable, {
      fields: [ClanCompulsionsTable.clan_id],
      references: [ClansTable.id],
    }),
    character: many(CharactersTable),
  })
);
