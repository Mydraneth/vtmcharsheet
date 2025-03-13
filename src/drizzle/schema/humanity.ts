import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { CharacterHumanityTable } from "./characterHumanity";

export const HumanityTable = pgTable("humanity", {
  id,
  description: text("description").notNull(),
  level: integer("level").notNull(),
});
export const HumanityRelations = relations(HumanityTable, ({ many }) => ({ 
  character: many(CharacterHumanityTable),
 }) );
