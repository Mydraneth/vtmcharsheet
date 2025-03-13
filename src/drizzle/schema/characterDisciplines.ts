import { pgTable, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { DisciplinePowersTable } from "./disciplinePowers";
import { relations } from "drizzle-orm";
import { DisciplinesTable } from "./disciplines";



export const CharacterDisciplinesTable = pgTable("character_disciplines", {
    id,
    char_id: uuid("char_id")
        .notNull()
        .references(() => CharactersTable.id, { onDelete: "cascade" }),
    discipline_id: uuid("discipline_id")
        .notNull()
        .references(() => DisciplinesTable.id, { onDelete: "cascade" }),
})

export const CharacterDisciplinesRelations = relations( CharacterDisciplinesTable, ({ one, many }) => ({
    character: one(CharactersTable, {
        fields: [CharacterDisciplinesTable.char_id],
        references: [CharactersTable.id],
    }),
    discipline: one(DisciplinesTable, {
        fields: [CharacterDisciplinesTable.discipline_id],
        references: [DisciplinesTable.id],
    }),
    powers: many(DisciplinePowersTable),
}));