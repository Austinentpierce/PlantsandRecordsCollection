TRUNCATE TABLE "Plants" RESTART IDENTITY;

INSERT INTO "Plants" ("Name", "Type", "Location", "Watering", "Pot", "Description") VALUES ('Fig', 'Normal', 'Outdoor', 'Every other day', 5, 'Medium size stems and round leaves');
INSERT INTO "Plants" ("Name", "Type", "Location", "Watering", "Pot", "Description") VALUES ('Mango', 'Fruit', 'Outdoor', 'Every other day', 3, 'Tall plant and thin leaves');
INSERT INTO "Plants" ("Name", "Type", "Location", "Watering", "Pot", "Description") VALUES ('Monstera', 'Normal', 'Outdoor', 'Every other day', 6, 'Medium size plant had slits in leave typically 2-8 slits in each leaf');
INSERT INTO "Plants" ("Name", "Type", "Location", "Watering", "Pot", "Description") VALUES ('Red pepper', 'Vegetable', 'Outdoor', 'Every other day', 1, 'Small plant 1 foot tall small leaves white flowers before it blooms');

TRUNCATE TABLE "Vinyls" RESTART IDENTITY;

INSERT INTO "Vinyls" ("Album", "Artist", "ReleaseYear", "Genre") VALUES ('E. 1999 Eternal', 'Bone Thugs-n-Harmony', 1995, 'Rap');
INSERT INTO "Vinyls" ("Album", "Artist", "ReleaseYear", "Genre") VALUES ('Thriller', 'Michael Jackson', 1982, 'Pop');

TRUNCATE TABLE "Crystals" RESTART IDENTITY;

INSERT INTO "Crystals" ("Name", "Size", "Color", "Description") VALUES ('Rock', 'Medium', 'Gray', 'Normal rock you find anywhere');
INSERT INTO "Crystals" ("Name", "Size", "Color", "Description") VALUES ('Pebble', 'Small', 'Gray', 'Small piece of rock');
INSERT INTO "Crystals" ("Name", "Size", "Color" , "Description") VALUES ('Diamond', 'Small', 'Clear', 'Very valuable clear stone');
