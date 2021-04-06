-- Deploy cocktail:data to pg

BEGIN;

INSERT INTO "cocktails" ("name", "instructions", "glass", "pictures_link") VALUES
('Irish Coffee (Irlande)',
'ÉTAPE 1 : Deux astuces avant de commencer : le whiskey sucré et le café doivent être à la même température, c''est à dire très chauds.
ÉTAPE 2 : L''autre astuce est un petit instrument très simple à réaliser, il vous suffit de "sacrifier" une petite cuillère : pliez une cuillère en "L" de façon à former un angle de 90°.
ÉTAPE 3 : Dans un grand verre à pied résistant à la chaleur, versez le whiskey et le sucre de canne bien chaud. Utilisez ensuite votre petite cuillère pliée : il faut la placer dans le verre, à la surface du mélange, versez ensuite le café chaud dans la cuillère, en la remontant au fur et à mesure. Cela permet au café de ne pas "plonger" dans le whiskey, donc de rester au dessus et former une deuxième couche.
ÉTAPE 4 : Ajoutez alors la chantilly, qui va former la troisième couche. Eventuellement, saupoudrez de cacao non sucré. Servez avec une paille.',
'Verre Irish Coffee',
'https://www.marmiton.org/recettes/recette_irish-coffee-irlande_12137.aspx#d44585-p1');

INSERT INTO "ingredients" ("name") VALUES
('Whisky'),
('Café'),
('Cacao'),
('Crème Chantilly'),
('Sucre'),
('Sucre de canne');

INSERT INTO "user" ("email", "firstname", "lastname", "password") VALUES
('azerty@gmail.com', 'tony', 'laperche', 'lesuperpassword');

INSERT INTO "ingredients_in_cocktails" ("cocktails_id", "ingredients_id") VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5);

INSERT INTO "user_made_cocktails" ("user_id", "cocktails_id") VALUES
(1, 1);

COMMIT;