CREATE TYPE roles as ENUM ('member', 'orga', 'admin');

CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  "firstName" VARCHAR(255), 
  "lastName" VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL ,
  handle VARCHAR(255) UNIQUE NOT NULL,
  role roles,
  confirmed BOOLEAN NOT NULL DEFAULT false,
  "mainGame" VARCHAR(255),
  "sideGames" VARCHAR(255),
  created_at timestamp  NOT NULL  DEFAULT current_timestamp,
  updated_at timestamp  NOT NULL  DEFAULT current_timestamp,
  "isActive" BOOLEAN NOT NULL DEFAULT true
);

INSERT INTO "public"."User" (
  "firstName", "lastName", email, role, 'confirmed',  "mainGame", "sideGames", "isActive"
) VALUES ('kroz', 'zle', 'kroz@zle.com', 'admin', 'true', 'sfv', 'mhw', 'true');


-- add password (not cleartext)