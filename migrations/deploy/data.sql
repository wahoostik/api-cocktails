-- Deploy cocktail:data to pg

BEGIN;

INSERT INTO "alcool_tag" ("name") VALUES
('Sans alcool'),
('Whisky'),
('Vodka'),
('Rhum'),
('Rhum Ambré'),
('Rhum Blanc'),
('Pastis'),
('Tequila');

INSERT INTO "cocktails" ("name", "ingredients", "instructions", "glass", "pictures_link", "alcool_tag_id") VALUES
('Irish Coffee (Irlande)',
'Whisky, Café, Cacao, Crème chantilly, Sucre',
'Plongez une grande tasse transparente (ou une petite chope) dans l’eau chaude afin de la chauffer. Séchez-la et réservez-la sur le côté.
Fouettez la crème fraîche et réservez.
Faites chauffer l’irish whiskey avec le sucre ; le mélange doit être très chaud mais ne pas bouillir.
Versez l’irish whiskey sucré dans la tasse transparente.
Rajoutez le café, chaud lui aussi, délicatement pour qu’il ne se mélange pas à l’irish whiskey.
Ajoutez enfin la crème fouettée en la déposant avec le dos d’une cuillère.',
'Verre Irish Coffee',
'https://www.marmiton.org/recettes/recette_irish-coffee-irlande_12137.aspx#d44585-p1',
2),
('Mojito',
'Rhum blanc, Citron vert, Feuilles de menthe, Sirop de canne, Eau gazeuse, Glace Pilée',
'Dans un verre à Mojito, disposez 6 à 8 feuilles de menthe entières préalablement lavées et essuyées.
Coupez 1/2 citron vert en dés, et versez les 2 cl de sirop de canne.
Écrasez délicatement avec un pilon les dés de citron vert sur les feuilles de menthe afin d’en extraire le jus.
Préparez la glace pilée en déposant les glaçons dans un torchon, refermez, puis à l’aide d’un pilon spécial cocktail, frappez fortement pour casser la glace.
Versez ensuite dans votre verre à cocktail 4 cl de rhum blanc 40°, la glace pilée et allongez avec l’eau gazeuse.
Mélangez de bas en haut avec une cuillère ou un touilleur à mojito avant dégustation.',
'Verre à Cocktail',
'https://www.destinationcocktails.fr/wp-content/uploads/2018/04/138_irishcoffee.jpg',
6),
('Piña Colada',
'Rhum blanc, Jus d''ananas, Lait de coco, Sirop de canne, Glaçons',
'Dans un shaker, versez les ingrédients en commençant par la dose de rhum blanc, puis en rajoutant successivement les autres.
Secouez énergiquement pendant une minute afin de bien les mélanger.
Servez votre cocktail dans un grand verre, sur un lit généreux de glaçons, en ayant pris soin de soigner la décoration.
Dégustez votre Piña Colada très fraîche.',
'Verre à Cocktail',
'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-pinacolada.jpg',
6),
('Passion Tropicale',
'Nectar de maracuja, nectar de mangue, jus d''ananas',
'Dans un shaker à moitié rempli de glaçons, mélangez : 6 cl de nectar de maracuja, 6 cl de nectar de mangue et 6 cl de jus d’ananas.
Secouez énergiquement et versez dans un verre old fashioned.',
'Verre old fashioned',
'https://www.destinationcocktails.fr/wp-content/uploads/recipes/269_passiontropicale.jpg',
1);


INSERT INTO "user" ("email", "firstname", "lastname", "password") VALUES
('azerty@gmail.com', 'tony', 'laperche', 'lesuperpassword');


INSERT INTO "user_made_cocktails" ("user_id", "cocktails_id") VALUES
(1, 1);

COMMIT;