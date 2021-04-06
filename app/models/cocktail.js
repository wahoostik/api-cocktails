// Modèle Active Record
const db = require('../database.js');

class Cocktail {
    //camelCase ici, snake_case côté BDD
    id;
    name;
    instructions;
    glass;
    pictureLink;


    //setters
    set picture_link(val) {
        this.pictureLink = val;
    }


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findOneById(id) {

        const { rows } = await db.query(`SELECT * FROM "cocktails" WHERE "id" = $1;`, [id]);

        return new Cocktail(rows[0]);

    }


}

module.exports = Cocktail;