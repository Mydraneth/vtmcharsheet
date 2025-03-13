import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { AdvantagesTable } from "./advantages";
import { CharactersTable } from "./characters";

export const SectsTable = pgTable("sects", {
  id,
  name: text("name").notNull(),
  description: text("description").notNull(),
});



export const SectsRelations = relations(SectsTable, ({ many }) => ({
  advantages: many(AdvantagesTable),
  character: many(CharactersTable),
}));



