const { request } = require('express');
const Cocktail = require('../models/cocktail');

const cocktailController = {
    allCocktails : async (request, response) => {
        try {
            //on récupère tous les cocktails en BDD
            const cocktails = await Cocktail.findAllCoktails();

            console.log(cocktails);
            response.json(cocktails);
        } catch (error) {
            //si la page n'existe pas
            response.status(404).json(error.message);
            console.log("Erreur dans le cocktail controller : ", error);
        }
    },

    cocktailById : async (request, response) => {
        try {
        //on récupère un quiz en fonction de son ID en BDD
        const id = parseInt(request.params.id, 10);
        const theCocktail = await Cocktail.findOneById(id);
        
        console.log(theCocktail);
        response.json(theCocktail);
        } catch (error) {
        // si le cocktail n'existe pas
        response.status(404).json(error.message);
        console.log("Erreur dans l'id demandé : ", error);
        }
    },

};

module.exports = cocktailController;