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

    

}

module.exports = UserMadeCocktail;