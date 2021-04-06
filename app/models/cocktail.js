// Modèle Active Record
const db = require('../database.js');

class Cocktail {
    //camelCase ici, snake_case côté BDD
    id;
    name;
    ingredients;
    instructions;
    glass;
    picturesLink;
    alcoolTagId;


    //setters
    set pictures_link(val) {
        this.picturesLink = val;
    }

    set alcool_tag_id(val) {
        this.alcoolTagId = val;
    }


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }


    static async findAllCoktails() {
        const { rows } = await db.query(`SELECT cocktails.name AS cocktail_name, cocktails.ingredients AS cocktail_ingredients, cocktails.instructions AS cocktail_instructions, cocktails.glass AS cocktail_glass, cocktails.pictures_link AS cocktail_picture,
        alcool_tag.name AS alcool_tag
        FROM cocktails
        JOIN alcool_tag ON alcool_tag.id = cocktails.alcool_tag_id;`);

        return rows.map(allCocktail => new Cocktail(allCocktail));
    }

    static async findOneById(id) {

        const { rows } = await db.query(`SELECT * FROM "cocktails" WHERE "id" = $1;`, [id]);

        return new Cocktail(rows[0]);
    }

    // pas statique car propre à chaque instance
    async createCocktail() {
        // props de this => insérer une ligne dans la bdd
        const { rows } = await db.query(`INSERT INTO cocktails (name, ingredients, instructions, glass, pictures_link, alcool_tag_id)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`,
        [this.name, this.ingredients, this.instructions, this.glass, this.picturesLink, this.alcoolTagId]);

        this.id = rows[0].id;
    }

    async deleteCocktail() {
        const { rows } = await db.query(`DELETE FROM cocktails WHERE id = $1;`, [this.id]);
    }

    async modifyCocktail() {
        const { rows } = await db.query(`UPDATE cocktails SET name = $2, ingredients = $3, instructions = $4, glass = $5, pictures_link = $6, alcool_tag_id = $7
        WHERE id = $1;`, [this.id, this.name, this.ingredients, this.instructions, this.glass, this.picturesLink, this.alcoolTagId]);
    }


}

module.exports = Cocktail;