# api-cocktails

<description>

API de cocktails pour retrouver vos recettes préférés. Il est également possible de rajouter ses propres recettes après s'être inscrit.

<description>

## Stack

- Node version 12+
  - Express
  - Joi
  - Bcrypt
  - Cors
  - Dotenv
- PostgreSQL version 11+
  - Sqitch

## Structure des données

<mcd>

COCKTAILS ( name, alcoholic, ingredients, instructions, glass, pictures )
INGREDIENTS ( name, type, name.1 )
USER ( email, firstname, lastname, mot de passe )
CONSULTE/RAJOUTE ( name, email )