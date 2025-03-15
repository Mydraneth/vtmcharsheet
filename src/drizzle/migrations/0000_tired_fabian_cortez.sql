CREATE TYPE "public"."forWhom" AS ENUM('Ghoul', 'Vampire');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('All', 'Ghoul', 'Vampire');--> statement-breakpoint
CREATE TYPE "public"."category" AS ENUM('Physical', 'Social', 'Mental');--> statement-breakpoint
CREATE TABLE "advantages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"parent_name" text,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"type" "type" NOT NULL,
	"level" integer NOT NULL,
	"for" "forWhom" NOT NULL,
	"clan_req" uuid,
	"sect_req" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "alchemy_powers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"ingridients" text,
	"activation" text,
	"dice_pool" text,
	"system" text,
	"duration" text,
	"level" integer
);
--> statement-breakpoint
CREATE TABLE "attributes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"category" "category" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blood_potency" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"level" integer NOT NULL,
	"description" text,
	"blood_surge" text,
	"damage_mend" text,
	"power_bonus" text,
	"rc_reroll" text,
	"bane_severity" integer,
	"feeding_penalty" text
);
--> statement-breakpoint
CREATE TABLE "character_advantages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"advantage_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_alchemy_powers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"alchemy_power_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_attributes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"attribute_id" uuid NOT NULL,
	"level" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_bloodpotencies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"blood_potency_level" uuid,
	"blood_surge" text,
	"bane_severity" integer DEFAULT 0,
	"power_bonus" text,
	"feeding_penalty" text,
	"mend_amount" integer,
	"rc_reroll" text,
	"clane_bane" uuid,
	"clan_compulsion" uuid
);
--> statement-breakpoint
CREATE TABLE "character_discipline_powers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"discipline_power_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_disciplines" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"discipline_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_healths" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"max_health" integer NOT NULL,
	"current_aggravated" integer DEFAULT 0 NOT NULL,
	"current_superficial" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_humanity" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"level" integer DEFAULT 0 NOT NULL,
	"stain_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_profile" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"description" text NOT NULL,
	"birthday" timestamp with time zone NOT NULL,
	"notes" text,
	"age" integer NOT NULL,
	"embraced_at" timestamp with time zone NOT NULL,
	"apparent_age" integer NOT NULL,
	"concept" text
);
--> statement-breakpoint
CREATE TABLE "character_rituals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"ritual_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "characters" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"name" text NOT NULL,
	"clan_id" uuid,
	"clan_bane" uuid,
	"clan_compulsion" uuid,
	"sect_id" uuid,
	"player" text NOT NULL,
	"predator_type" uuid NOT NULL,
	"generation" integer NOT NULL,
	"chronicle_id" uuid,
	"custom_chronicle" text,
	"ambition" text NOT NULL,
	"desire" text NOT NULL,
	"sire" text NOT NULL,
	"type" "type" DEFAULT 'Vampire' NOT NULL,
	"total_experience" integer DEFAULT 0 NOT NULL,
	"chronicle_tenets" text NOT NULL,
	"group_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_skills" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"skill_id" uuid NOT NULL,
	"level" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_specialties" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"skill_id" uuid NOT NULL,
	"specialty_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "character_willpowers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"char_id" uuid NOT NULL,
	"max_willpower" integer NOT NULL,
	"current_aggravated" integer DEFAULT 0 NOT NULL,
	"current_superficial" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chronicles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "clan_banes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"clan_id" uuid NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "clan_compulsions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"clan_id" uuid NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "clans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "discipline_powers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"discipline_id" uuid NOT NULL,
	"name" text NOT NULL,
	"level" integer NOT NULL,
	"description" text NOT NULL,
	"dice_pool" text NOT NULL,
	"cost" text NOT NULL,
	"prerequisites" text NOT NULL,
	"amalgam" text NOT NULL,
	"system" text NOT NULL,
	"duration" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "disciplines" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"nicknames" text NOT NULL,
	"characteristics" text NOT NULL,
	"type" text NOT NULL,
	"masquerade_threat" text NOT NULL,
	"blood_resonance" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exp_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"char_id" uuid NOT NULL,
	"section" text,
	"name" text,
	"prev_level" integer,
	"new_level" integer,
	"expanditure" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "char_groups" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"parent_id" uuid,
	"name" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "humanity" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"description" text NOT NULL,
	"level" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "predator_types" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"dice_pool" text NOT NULL,
	"benefits" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rituals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"ingridients" text NOT NULL,
	"process" text NOT NULL,
	"system" text NOT NULL,
	"level" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_user_id" text NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"image_url" text,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_clerk_user_id_unique" UNIQUE("clerk_user_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "advantages" ADD CONSTRAINT "advantages_clan_req_clans_id_fk" FOREIGN KEY ("clan_req") REFERENCES "public"."clans"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "advantages" ADD CONSTRAINT "advantages_sect_req_sects_id_fk" FOREIGN KEY ("sect_req") REFERENCES "public"."sects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_advantages" ADD CONSTRAINT "character_advantages_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_advantages" ADD CONSTRAINT "character_advantages_advantage_id_advantages_id_fk" FOREIGN KEY ("advantage_id") REFERENCES "public"."advantages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_alchemy_powers" ADD CONSTRAINT "character_alchemy_powers_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_alchemy_powers" ADD CONSTRAINT "character_alchemy_powers_alchemy_power_id_alchemy_powers_id_fk" FOREIGN KEY ("alchemy_power_id") REFERENCES "public"."alchemy_powers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_attributes" ADD CONSTRAINT "character_attributes_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_attributes" ADD CONSTRAINT "character_attributes_attribute_id_attributes_id_fk" FOREIGN KEY ("attribute_id") REFERENCES "public"."attributes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_bloodpotencies" ADD CONSTRAINT "character_bloodpotencies_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_bloodpotencies" ADD CONSTRAINT "character_bloodpotencies_blood_potency_level_blood_potency_id_fk" FOREIGN KEY ("blood_potency_level") REFERENCES "public"."blood_potency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_bloodpotencies" ADD CONSTRAINT "character_bloodpotencies_clane_bane_clan_banes_id_fk" FOREIGN KEY ("clane_bane") REFERENCES "public"."clan_banes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_bloodpotencies" ADD CONSTRAINT "character_bloodpotencies_clan_compulsion_clan_compulsions_id_fk" FOREIGN KEY ("clan_compulsion") REFERENCES "public"."clan_compulsions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_discipline_powers" ADD CONSTRAINT "character_discipline_powers_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_discipline_powers" ADD CONSTRAINT "character_discipline_powers_discipline_power_id_discipline_powers_id_fk" FOREIGN KEY ("discipline_power_id") REFERENCES "public"."discipline_powers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_disciplines" ADD CONSTRAINT "character_disciplines_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_disciplines" ADD CONSTRAINT "character_disciplines_discipline_id_disciplines_id_fk" FOREIGN KEY ("discipline_id") REFERENCES "public"."disciplines"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_healths" ADD CONSTRAINT "character_healths_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_humanity" ADD CONSTRAINT "character_humanity_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_profile" ADD CONSTRAINT "character_profile_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_rituals" ADD CONSTRAINT "character_rituals_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_rituals" ADD CONSTRAINT "character_rituals_ritual_id_rituals_id_fk" FOREIGN KEY ("ritual_id") REFERENCES "public"."rituals"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_clan_id_clans_id_fk" FOREIGN KEY ("clan_id") REFERENCES "public"."clans"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_clan_bane_clan_banes_id_fk" FOREIGN KEY ("clan_bane") REFERENCES "public"."clan_banes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_clan_compulsion_clan_compulsions_id_fk" FOREIGN KEY ("clan_compulsion") REFERENCES "public"."clan_compulsions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_sect_id_sects_id_fk" FOREIGN KEY ("sect_id") REFERENCES "public"."sects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_predator_type_predator_types_id_fk" FOREIGN KEY ("predator_type") REFERENCES "public"."predator_types"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_chronicle_id_chronicles_id_fk" FOREIGN KEY ("chronicle_id") REFERENCES "public"."chronicles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_group_id_char_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."char_groups"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_specialties" ADD CONSTRAINT "character_specialties_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_specialties" ADD CONSTRAINT "character_specialties_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "character_willpowers" ADD CONSTRAINT "character_willpowers_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chronicles" ADD CONSTRAINT "chronicles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "clan_banes" ADD CONSTRAINT "clan_banes_clan_id_clans_id_fk" FOREIGN KEY ("clan_id") REFERENCES "public"."clans"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "clan_compulsions" ADD CONSTRAINT "clan_compulsions_clan_id_clans_id_fk" FOREIGN KEY ("clan_id") REFERENCES "public"."clans"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "discipline_powers" ADD CONSTRAINT "discipline_powers_discipline_id_disciplines_id_fk" FOREIGN KEY ("discipline_id") REFERENCES "public"."disciplines"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exp_logs" ADD CONSTRAINT "exp_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exp_logs" ADD CONSTRAINT "exp_logs_char_id_characters_id_fk" FOREIGN KEY ("char_id") REFERENCES "public"."characters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "char_groups" ADD CONSTRAINT "char_groups_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "char_groups" ADD CONSTRAINT "char_groups_parent_id_char_groups_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."char_groups"("id") ON DELETE set null ON UPDATE no action;