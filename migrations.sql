CREATE TYPE roles as ENUM ('member', 'orga', 'admin');

CREATE TABLE "public"."users" (
  id SERIAL PRIMARY KEY NOT NULL,
  "firstName" VARCHAR(255), 
  "lastName" VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL ,
  handle VARCHAR(255) UNIQUE NOT NULL,
  role roles,
  confirmed BOOLEAN NOT NULL DEFAULT false,
  "mainGame" VARCHAR(255),
  "sideGames" VARCHAR(255),
  "isActive" BOOLEAN NOT NULL DEFAULT true
);

INSERT INTO "public"."users" (
  "firstName", "lastName", "handle", "email", "role", "confirmed",  "mainGame", "sideGames", "isActive"
) VALUES ('kroz', 'zle', 'kbrownie', 'kroz@zle.com', 'admin', 'true', 'sfv', 'mhw', 'true');


-- created_at timestamp  NOT NULL  DEFAULT current_timestamp,
-- updated_at timestamp  NOT NULL  DEFAULT current_timestamp,
-- add password (not cleartext)