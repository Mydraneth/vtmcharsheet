import { pgTable, uuid } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { CharactersTable } from "./characters";
import { relations } from "drizzle-orm";
import { AlchemyPowersTable } from "./alchemyPowers";



export const CharacterAlchemyPowersTable = pgTable("character_alchemy_powers", {
    id,
    char_id: uuid("char_id")
        .notNull()
        .references(() => CharactersTable.id, { onDelete: "cascade" }),
    alchemy_power_id: uuid("alchemy_power_id")
        .notNull()
        .references(() => AlchemyPowersTable.id, { onDelete: "cascade" }),
})

export const CharacterAlchemyPowersRelations = relations( CharacterAlchemyPowersTable, ({ one }) => ({
    character: one(CharactersTable, {
        fields: [CharacterAlchemyPowersTable.char_id],
        references: [CharactersTable.id],
    }),
    alchemy_power: one(AlchemyPowersTable, {
        fields: [CharacterAlchemyPowersTable.alchemy_power_id],
        references: [AlchemyPowersTable.id],
    }),
}));