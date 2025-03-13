import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { CharacterAlchemyPowersTable } from "./characterAlchemyPowers";

export const AlchemyPowersTable = pgTable("alchemy_powers", {
  id,
  name: text("name").notNull(),
  description: text("description"),
  ingridients: text("ingridients"),
  activation: text("activation"),
  dice_pool: text("dice_pool"),
  system: text("system"),
  duration: text("duration"),
  level: integer("level"),
});

export const AlchemyPowersRelations = relations(AlchemyPowersTable, ({ many }) => ({
  char_powers: many(CharacterAlchemyPowersTable),
}));