import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { DisciplinesTable } from "./disciplines";
import { relations } from "drizzle-orm";
import { CharacterDisciplinePowersTable } from "./characterDisciplinePowers";

export const DisciplinePowersTable = pgTable("discipline_powers", {
  id,
  discipline_id: uuid("discipline_id")
    .notNull()
    .references(() => DisciplinesTable.id, { onDelete: "restrict" }),
  name: text("name").notNull(),
  level: integer("level").notNull(),
  description: text("description").notNull(),
  dice_pool: text("dice_pool").notNull(),
  cost: text("cost").notNull(),
  prerequisites: text("prerequisites").notNull(),
  amalgam: text("amalgam").notNull(),
  system: text("system").notNull(),
  duration: text("duration").notNull(),
});

export const DisciplinePowersRelations = relations(
  DisciplinePowersTable,
  ({ one, many }) => ({
    discipline: one(DisciplinesTable, {
      fields: [DisciplinePowersTable.discipline_id],
      references: [DisciplinesTable.id],
    }),
    character:many(CharacterDisciplinePowersTable),
  })
);
