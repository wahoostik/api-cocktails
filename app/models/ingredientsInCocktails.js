// Modèle Active Record
const db = require('../database.js');

class IngredientsInCocktail {
    //camelCase ici, snake_case côté BDD
    id;
    cocktailId;
    ingredientsId;


    //setters
    set cocktail_id(val) {
        this.cocktailId = val;
    }

    set ingredients_id(val) {
        this.ingredientsId = val;
    }


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    

}

module.exports = IngredientsInCocktail;