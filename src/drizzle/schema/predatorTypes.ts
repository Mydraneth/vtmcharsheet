import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { CharactersTable } from "./characters";

export const PredatorTypesTable = pgTable("predator_types", {
  id,
  name: text("name").notNull(),
  description: text("description").notNull(),
  dice_pool: text("dice_pool").notNull(),
  benefits: text("benefits").notNull(),
});

export const PredatorTypesRelations = relations(PredatorTypesTable, ({ many}) => ({
  character: many(CharactersTable),
}))