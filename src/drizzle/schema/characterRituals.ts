import { pgTable, uuid } from "drizzle-orm/pg-core"
import { id } from "../schemaHelpers"
import { CharactersTable } from "./characters"
import { RitualsTable } from "./rituals"
import { relations } from "drizzle-orm";


export const CharacterRitualsTable = pgTable("character_rituals", {
    id,
    char_id: uuid("char_id").notNull().references(() => CharactersTable.id, { onDelete: "cascade"}),
    ritual_id: uuid("ritual_id").notNull().references(() => RitualsTable.id, { onDelete: "cascade" }),
});

export const CharacterRitualsRelations = relations(CharacterRitualsTable, ({ one }) => (
    {
        character: one(CharactersTable, {
            fields: [CharacterRitualsTable.char_id],
            references: [CharactersTable.id]
        }),
        ritual: one(RitualsTable, {
            fields: [CharacterRitualsTable.ritual_id],
            references: [RitualsTable.id]
        })
    }
))
