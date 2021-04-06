// Modèle Active Record
const db = require('../database.js');

class AlcoolTag {
    //camelCase ici, snake_case côté BDD
    id;
    name;


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAllTag() {
        const { rows } = await db.query(`SELECT * FROM alcool_tag;`);

        return rows.map(allTag => new AlcoolTag(allTag));
    }

    static async findOneTag(id) {
        const { rows } = await db.query(`SELECT * FROM alcool_tag WHERE "id" = $1;`, [id]);

        return new AlcoolTag(rows[0]);
    }

    static async findAllCocktailsByTag(id) {
        const { rows } = await db.query(`SELECT * FROM alcool_tag
        JOIN cocktails ON cocktails.alcool_tag_id = alcool_tag.id
        WHERE alcool_tag.id = $1;`, [id]);

        return rows;
    }

    // pas statique car propre à chaque instance
    async modifyAlcoolTag() {
        const { rows } = await db.query(`UPDATE alcool_tag SET name = $2 WHERE id = $1;`,
        [this.id, this.name]);
    }

    async createAlcoolTag() {
        // props de this => insérer une ligne dans la bdd
        const { rows } = await db.query(`INSERT INTO alcool_tag (name)
        VALUES ($1) RETURNING id;`, [this.name]);

        this.id = rows[0].id;
    }

    async deleteAlcoolTag() {
        const { rows } = await db.query(`DELETE FROM alcool_tag WHERE id = $1;`, [this.id]);
    }


}

module.exports = AlcoolTag;