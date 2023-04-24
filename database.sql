
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "notepad" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "header" VARCHAR (100) NOT NULL,
    "description" VARCHAR (1000) NOT NULL,
    "user_id" INT REFERENCES "user"(id)
);

CREATE TABLE "todo_pad" (
    "id" SERIAL PRIMARY KEY,
    "date_created" DATE NOT NULL,
    "task" VARCHAR (255) NOT NULL,
    "status" INT NOT NULL,
    "user_id" INT REFERENCES "user"(id)
);

CREATE TABLE "joke_pad" (
    "id" SERIAL PRIMARY KEY,
    "joke" VARCHAR (1000) NOT NULL,
    "answer" VARCHAR (500) NOT NULL,
    "rating" INT
);