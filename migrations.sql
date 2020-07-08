CREATE TYPE roles as ENUM ('member', 'orga', 'admin');

CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  "firstName" VARCHAR(255), 
  "lastName" VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  role roles
);

INSERT INTO "public"."User" (
  "firstName", "lastName", email, role
) VALUES ('kroz', 'zle', 'kroz@zle.com', 'admin');