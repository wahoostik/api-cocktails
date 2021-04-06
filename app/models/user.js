// Modèle Active Record
const db = require('../database.js');

class User {
    //camelCase ici, snake_case côté BDD
    id;
    email;
    firstname;
    lastname;
    password;


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findOneById(id) {

        const { rows } = await db.query(`SELECT * FROM "user" WHERE "id" = $1;`, [id]);

        return new User(rows[0]);

    }


}

module.exports = User;