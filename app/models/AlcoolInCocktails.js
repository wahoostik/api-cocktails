// Modèle Active Record
const db = require('../database.js');

class IngredientsInCocktail {
    //camelCase ici, snake_case côté BDD
    id;
    cocktailId;
    alcoolTagId;


    //setters
    set cocktail_id(val) {
        this.cocktailId = val;
    }

    set alcool_tag_id(val) {
        this.alcoolTagId = val;
    }


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    

}

module.exports = IngredientsInCocktail;