import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { CharacterRitualsTable } from "./characterRituals";

export const RitualsTable = pgTable("rituals", {
  id,
  name: text("name").notNull(),
  description: text("description").notNull(),
  ingridients: text("ingridients").notNull(),
  process: text("process").notNull(),
  system: text("system").notNull(),
  level: integer("level").notNull(),
});

export const RitualsRelations = relations(RitualsTable, ({ many }) => ({ 
  character: many(CharacterRitualsTable),
}));