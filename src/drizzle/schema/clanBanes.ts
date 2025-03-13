import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { ClansTable } from "./clans";
import { CharactersTable } from "./characters";


export const ClanBanesTable = pgTable("clan_banes", {
  id,
  name: text("name").notNull(),
  clan_id: uuid("clan_id")
    .notNull()
    .references(() => ClansTable.id, { onDelete: "restrict" }),
  description: text("description").notNull(),
});


export const ClanBanesRelations = relations(
  ClanBanesTable,
  ({ one, many }) => ({
    clan: one(ClansTable, {
      fields: [ClanBanesTable.clan_id],
      references: [ClansTable.id],
    }),
    character: many(CharactersTable),
  })
);
