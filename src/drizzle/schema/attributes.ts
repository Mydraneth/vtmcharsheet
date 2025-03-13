import { pgTable, pgEnum, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { relations } from "drizzle-orm";

export const category = ["Physical", "Social", "Mental"] as const;
export type Category = (typeof category)[number];
export const categoryEnum = pgEnum("category", category);

export const AttributesTable = pgTable("attributes", {
  id,
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: categoryEnum("category").notNull(),
});


export const AttributesRelations = relations(AttributesTable, ({many}) => ({
  character_attributes: many(AttributesTable),
}))