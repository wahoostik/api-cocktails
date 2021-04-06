-- Deploy cocktail:init to pg

BEGIN;

DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "cocktails" CASCADE;
DROP TABLE IF EXISTS "alcool_tag" CASCADE;
DROP TABLE IF EXISTS "alcool_in_cocktails" CASCADE;
DROP TABLE IF EXISTS "user_made_cocktails" CASCADE;

-- -----------------------------------------------------
-- Table "cocktails"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "cocktails" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL UNIQUE,
  "ingredients" text NOT NULL,
  "instructions" text NOT NULL,
  "glass" text NOT NULL,
  "pictures_link" text NOT NULL
);

-- -----------------------------------------------------
-- Table "alcool_tag"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "alcool_tag" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL
);

-- -----------------------------------------------------
-- Table "user"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL UNIQUE,
  "firstname" text NOT NULL,
  "lastname" text NOT NULL,
  "password" text NOT NULL
);

-- -----------------------------------------------------
-- Table "alcool_in_cocktails"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "alcool_in_cocktails" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "cocktails_id" int NOT NULL REFERENCES "cocktails"("id") ON DELETE CASCADE,
  "alcool_tag_id" int NOT NULL REFERENCES "alcool_tag"("id") ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table "user_made_cocktails"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_made_cocktails" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" int NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
  "cocktails_id" int NOT NULL REFERENCES "cocktails"("id") ON DELETE CASCADE
);

COMMIT;