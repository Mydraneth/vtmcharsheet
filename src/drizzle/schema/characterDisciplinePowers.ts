import { pgTable, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { DisciplinePowersTable } from "./disciplinePowers";
import { relations } from "drizzle-orm";



export const CharacterDisciplinePowersTable = pgTable("character_discipline_powers", {
    id,
    char_id: uuid("char_id")
        .notNull()
        .references(() => CharactersTable.id, { onDelete: "cascade" }),
    discipline_power_id: uuid("discipline_power_id")
        .notNull()
        .references(() => DisciplinePowersTable.id, { onDelete: "cascade" }),
})

export const CharacterDisciplinePowersRelations = relations( CharacterDisciplinePowersTable, ({ one }) => ({
    character: one(CharactersTable, {
        fields: [CharacterDisciplinePowersTable.char_id],
        references: [CharactersTable.id],
    }),
    discipline_power: one(DisciplinePowersTable, {
        fields: [CharacterDisciplinePowersTable.discipline_power_id],
        references: [DisciplinePowersTable.id],
    }),
}));