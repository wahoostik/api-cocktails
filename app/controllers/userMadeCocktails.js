const { request } = require('express');
const UserMadeCocktail = require('../models/userMadeCocktails');

const userMadeCocktailController = {
    userCocktailById : async (request, response) => {
    try {
        //on récupère les cocktails d'un utilisateur en fonction de son ID en BDD
        const id = parseInt(request.params.id, 10);
        const theUserMadeCocktail = await UserMadeCocktail.findCocktailsUserById(id);
        
        console.log(theUserMadeCocktail);
        response.json(theUserMadeCocktail);
    } catch (error) {
        response.status(404).json(error.message);
        console.log("Erreur dans l'id demandé : ", error);
    }
    },


};

module.exports = userMadeCocktailController;