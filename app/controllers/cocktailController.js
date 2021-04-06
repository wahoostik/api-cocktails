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
            response.status(404).json(error.message);
            console.log("Erreur dans le cocktail controller : ", error);
        }
    },

    cocktailById : async (request, response) => {
        try {
        //on récupère un cocktail en fonction de son ID en BDD
        const id = parseInt(request.params.id, 10);
        const theCocktail = await Cocktail.findOneById(id);

        if (!theCocktail.id) {
            return response.status(400).json("Ce cocktail n'existe pas");
        } else {
        console.log(theCocktail);
        response.json(theCocktail);
        }
        } catch (error) {
        response.status(404).json(error.message);
        console.log("Erreur dans l'id demandé : ", error);
        }
    },

    addCocktail : async (request, response) => {
        try {
        //les infos du cocktail à ajouter    
        const newCocktailData = request.body;

        const addCocktail = new Cocktail(newCocktailData);    
        
        await addCocktail.createCocktail();
        
        response.json(addCocktail);
        console.log("Le cocktail a bien été rajouté");

        } catch (error) {
        response.status(403).json(error.message);
        console.log("Erreur dans l'ajout d'un cocktail : ", error);
        }
    },

    deleteCocktail : async (request, response) => {
        try {
        //on récupère un cocktail en fonction de son ID en BDD    
        const id = parseInt(request.params.id, 10);
        const theCocktail = await Cocktail.findOneById(id);

        //si aucun cocktail trouvé avec cet ID => message d'erreur
        if (!theCocktail) {
            response.status(404).json("Nous n'avons pas trouvé l'id : " + id)
        } else {
            await theCocktail.deleteCocktail();
            response.json("Le cocktail avec l'id : " + id + ", a bien été supprimé");
        }
        } catch (error) {
        response.status(403).json(error.message);
        console.log("Erreur dans la suppression d'un cocktail : ", error);
        }
    },

    modifyCocktail : async (request, response) => {
        try {
            //on récupère un cocktail en fonction de son ID en BDD
            const id = parseInt(request.params.id, 10);
            const theCocktail = await Cocktail.findOneById(id);

            const { name, ingredients, instructions, glass, picturesLink, alcoolTagId } = request.body;
    
            //si aucun cocktail trouvé avec cet ID => message d'erreur
            if (!theCocktail.id) {
                return response.status(400).json("Nous n'avons pas trouvé le cocktail avec l'id : " + id);
            } else {
            // on ne change que les paramètres envoyés   
            if (name) {
            theCocktail.name = name;
            }
            if (ingredients) {
            theCocktail.ingredients = ingredients;
            }
            if (instructions) {
            theCocktail.instructions = instructions;
            }
            if (glass) {
            theCocktail.glass = glass;
            }
            if (picturesLink) {
            theCocktail.picturesLink = picturesLink;
            }
            if (alcoolTagId) {
            theCocktail.alcoolTagId = alcoolTagId;
            }

            //on envoie les modifications en BDD
            await theCocktail.modifyCocktail();
            console.log(theCocktail);
            response.json("Le cocktail avec l'id : " + id + ", a bien été modifié");
                
            }
            } catch (error) {
            response.status(403).json(error.message);
            console.log("Erreur dans la modification d'un cocktail : ", error);
            }
    },

};

module.exports = cocktailController;