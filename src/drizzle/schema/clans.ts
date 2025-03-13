import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { ClanBanesTable } from "./clanBanes";
import { ClanCompulsionsTable } from "./clanCompulsions";
import { AdvantagesTable } from "./advantages";
import { CharactersTable } from "./characters";


export const ClansTable = pgTable("clans", {
  id,
  name: text("name").notNull(),
  description: text("description").notNull(),
});



export const ClansRelations = relations(ClansTable, ({ many }) => ({
  clan_banes: many(ClanBanesTable),
  clan_compulsions: many(ClanCompulsionsTable),
  advantages: many(AdvantagesTable),
  character: many(CharactersTable),
}));



