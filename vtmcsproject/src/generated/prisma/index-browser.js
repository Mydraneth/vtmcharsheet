
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdvantagesScalarFieldEnum = {
  id: 'id',
  parent_name: 'parent_name',
  name: 'name',
  description: 'description',
  type: 'type',
  level: 'level',
  for: 'for',
  clan_req: 'clan_req',
  sect_req: 'sect_req'
};

exports.Prisma.Alchemy_powersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  ingridients: 'ingridients',
  activation: 'activation',
  dice_pool: 'dice_pool',
  system: 'system',
  duration: 'duration',
  level: 'level'
};

exports.Prisma.AttributesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category'
};

exports.Prisma.Blood_potencyScalarFieldEnum = {
  id: 'id',
  level: 'level',
  description: 'description',
  blood_surge: 'blood_surge',
  damage_mend: 'damage_mend',
  power_bonus: 'power_bonus',
  rc_reroll: 'rc_reroll',
  bane_severity: 'bane_severity',
  feeding_penalty: 'feeding_penalty'
};

exports.Prisma.Char_groupsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  parent_id: 'parent_id',
  name: 'name',
  description: 'description'
};

exports.Prisma.Character_advantagesScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  advantage_id: 'advantage_id'
};

exports.Prisma.Character_alchemy_powersScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  alchemy_power_id: 'alchemy_power_id'
};

exports.Prisma.Character_attributesScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  attribute_id: 'attribute_id',
  level: 'level'
};

exports.Prisma.Character_bloodpotenciesScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  blood_potency_level: 'blood_potency_level',
  blood_surge: 'blood_surge',
  bane_severity: 'bane_severity',
  power_bonus: 'power_bonus',
  feeding_penalty: 'feeding_penalty',
  mend_amount: 'mend_amount',
  rc_reroll: 'rc_reroll',
  clane_bane: 'clane_bane',
  clan_compulsion: 'clan_compulsion'
};

exports.Prisma.Character_discipline_powersScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  discipline_power_id: 'discipline_power_id'
};

exports.Prisma.Character_disciplinesScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  discipline_id: 'discipline_id'
};

exports.Prisma.Character_healthsScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  max_health: 'max_health',
  current_aggravated: 'current_aggravated',
  current_superficial: 'current_superficial'
};

exports.Prisma.Character_humanityScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  level: 'level',
  stain_count: 'stain_count'
};

exports.Prisma.Character_profileScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  description: 'description',
  birthday: 'birthday',
  notes: 'notes',
  age: 'age',
  embraced_at: 'embraced_at',
  apparent_age: 'apparent_age',
  concept: 'concept'
};

exports.Prisma.Character_ritualsScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  ritual_id: 'ritual_id'
};

exports.Prisma.Character_skillsScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  skill_id: 'skill_id',
  level: 'level'
};

exports.Prisma.Character_specialtiesScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  skill_id: 'skill_id',
  specialty_name: 'specialty_name'
};

exports.Prisma.Character_willpowersScalarFieldEnum = {
  id: 'id',
  char_id: 'char_id',
  max_willpower: 'max_willpower',
  current_aggravated: 'current_aggravated',
  current_superficial: 'current_superficial'
};

exports.Prisma.CharactersScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  clan_id: 'clan_id',
  clan_bane: 'clan_bane',
  clan_compulsion: 'clan_compulsion',
  sect_id: 'sect_id',
  player: 'player',
  predator_type: 'predator_type',
  generation: 'generation',
  chronicle_id: 'chronicle_id',
  custom_chronicle: 'custom_chronicle',
  ambition: 'ambition',
  desire: 'desire',
  sire: 'sire',
  type: 'type',
  total_experience: 'total_experience',
  chronicle_tenets: 'chronicle_tenets',
  group_id: 'group_id'
};

exports.Prisma.ChroniclesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Clan_banesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  clan_id: 'clan_id',
  description: 'description'
};

exports.Prisma.Clan_compulsionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  clan_id: 'clan_id',
  description: 'description'
};

exports.Prisma.ClansScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.Discipline_powersScalarFieldEnum = {
  id: 'id',
  discipline_id: 'discipline_id',
  name: 'name',
  level: 'level',
  description: 'description',
  dice_pool: 'dice_pool',
  cost: 'cost',
  prerequisites: 'prerequisites',
  amalgam: 'amalgam',
  system: 'system',
  duration: 'duration'
};

exports.Prisma.DisciplinesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  nicknames: 'nicknames',
  characteristics: 'characteristics',
  type: 'type',
  masquerade_threat: 'masquerade_threat',
  blood_resonance: 'blood_resonance'
};

exports.Prisma.Exp_logsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  char_id: 'char_id',
  section: 'section',
  name: 'name',
  prev_level: 'prev_level',
  new_level: 'new_level',
  expanditure: 'expanditure',
  created_at: 'created_at'
};

exports.Prisma.HumanityScalarFieldEnum = {
  id: 'id',
  description: 'description',
  level: 'level'
};

exports.Prisma.Predator_typesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  dice_pool: 'dice_pool',
  benefits: 'benefits'
};

exports.Prisma.RitualsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  ingridients: 'ingridients',
  process: 'process',
  system: 'system',
  level: 'level'
};

exports.Prisma.SectsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.SkillsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  clerk_user_id: 'clerk_user_id',
  email: 'email',
  name: 'name',
  image_url: 'image_url',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.type = exports.$Enums.type = {
  All: 'All',
  Ghoul: 'Ghoul',
  Vampire: 'Vampire'
};

exports.forWhom = exports.$Enums.forWhom = {
  Ghoul: 'Ghoul',
  Vampire: 'Vampire'
};

exports.category = exports.$Enums.category = {
  Physical: 'Physical',
  Social: 'Social',
  Mental: 'Mental'
};

exports.Prisma.ModelName = {
  advantages: 'advantages',
  alchemy_powers: 'alchemy_powers',
  attributes: 'attributes',
  blood_potency: 'blood_potency',
  char_groups: 'char_groups',
  character_advantages: 'character_advantages',
  character_alchemy_powers: 'character_alchemy_powers',
  character_attributes: 'character_attributes',
  character_bloodpotencies: 'character_bloodpotencies',
  character_discipline_powers: 'character_discipline_powers',
  character_disciplines: 'character_disciplines',
  character_healths: 'character_healths',
  character_humanity: 'character_humanity',
  character_profile: 'character_profile',
  character_rituals: 'character_rituals',
  character_skills: 'character_skills',
  character_specialties: 'character_specialties',
  character_willpowers: 'character_willpowers',
  characters: 'characters',
  chronicles: 'chronicles',
  clan_banes: 'clan_banes',
  clan_compulsions: 'clan_compulsions',
  clans: 'clans',
  discipline_powers: 'discipline_powers',
  disciplines: 'disciplines',
  exp_logs: 'exp_logs',
  humanity: 'humanity',
  predator_types: 'predator_types',
  rituals: 'rituals',
  sects: 'sects',
  skills: 'skills',
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
