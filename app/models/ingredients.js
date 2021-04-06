// Modèle Active Record
const db = require('../database.js');

class Ingredient {
    //camelCase ici, snake_case côté BDD
    id;
    name;


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }


}

module.exports = Ingredient;