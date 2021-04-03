-- Deploy cocktail:init to pg

BEGIN;

DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "cocktails" CASCADE;
DROP TABLE IF EXISTS "ingredients" CASCADE;
DROP TABLE IF EXISTS "ingredients_in_cocktails" CASCADE;
DROP TABLE IF EXISTS "user_made_cocktails" CASCADE;

-- -----------------------------------------------------
-- Table "cocktails"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "cocktails" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "instructions" text NOT NULL,
  "glass" text NOT NULL,
  "pictures_link" text
);

-- -----------------------------------------------------
-- Table "ingredients"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "ingredients" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "type" text
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
-- Table "ingredients_in_cocktails"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "ingredients_in_cocktails" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "cocktails_id" int NOT NULL REFERENCES "cocktails"("id") ON DELETE CASCADE,
  "ingredients_id" int NOT NULL REFERENCES "ingredients"("id") ON DELETE CASCADE
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