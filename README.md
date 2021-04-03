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

- COCKTAILS ( name, instructions, glass, pictures )
- INGREDIENTS ( name, type )
- USER ( email, firstname, lastname, password )