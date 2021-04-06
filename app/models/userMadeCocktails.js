// Modèle Active Record
const db = require('../database.js');

class UserMadeCocktail {
    //camelCase ici, snake_case côté BDD
    id;
    userId;
    cocktailId;


    //setters
    set user_id(val) {
        this.userId = val;
    }

    set cocktail_id(val) {
        this.cocktailId = val;
    }


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

static async findCocktailsUserById(id) {

        const { rows } = await db.query(`SELECT * FROM "user_made_cocktails"
        JOIN cocktails ON cocktails.id = user_made_cocktails.cocktails_id
        JOIN "user" on "user".id = user_made_cocktails.user_id
        WHERE user_id = $1;`, [id]);

        return rows.map(allCocktails => new UserMadeCocktail(allCocktails));

    }

    

}

module.exports = UserMadeCocktail;