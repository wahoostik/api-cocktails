const { request } = require('express');
const AlcoolTag = require('../models/alcoolTag');

const alcoolTagController = {
    allTag : async (request, response) => {
        try {
            //on récupère tous les tags en BDD
            const tags = await AlcoolTag.findAllTag();

            console.log(tags);
            response.json(tags);
        } catch (error) {
            response.status(404).json(error.message);
            console.log("Erreur dans le cocktail controller : ", error);
        }
    },

    alcoolTagById : async (request, response) => {
        try {
        //on récupère un tag et ses cocktails en fonction de son ID en BDD
        const id = parseInt(request.params.id, 10);
        const theTag = await AlcoolTag.findAllCocktailsByTag(id);

        console.log(theTag);
        response.json(theTag);
        
        } catch (error) {
        response.status(404).json(error.message);
        console.log("Erreur dans l'id demandé : ", error);
        }
    },

    addAlcoolTag : async (request, response) => {
        try {
        //les infos du  tag à ajouter    
        const newTagData = request.body;

        const addTag = new AlcoolTag(newTagData);    
        
        await addTag.createAlcoolTag();
        
        response.json(addTag);
        console.log("Le tag a bien été rajouté");

        } catch (error) {
        response.status(403).json(error.message);
        console.log("Erreur dans l'ajout d'un tag : ", error);
        }
    },

    deleteTag : async (request, response) => {
        try {
        //on récupère un tag en fonction de son ID en BDD    
        const id = parseInt(request.params.id, 10);
        const theTag = await AlcoolTag.findOneTag(id);

        //si aucun tag trouvé avec cet ID => message d'erreur
        if (!theTag) {
            response.status(404).json("Nous n'avons pas trouvé l'id : " + id)
        } else {
            await theTag.deleteAlcoolTag();
            response.json("Le Tag avec l'id : " + id + ", a bien été supprimé");
        }
        } catch (error) {
        response.status(403).json(error.message);
        console.log("Erreur dans la suppression d'un tag : ", error);
        }
    },

    modifyAlcoolTag: async (request, response) => {
        try {
            //on récupère un cocktail en fonction de son ID en BDD
            const id = parseInt(request.params.id, 10);
            const theTag = await AlcoolTag.findOneTag(id);

            const { name } = request.body;
    
            //si aucun tag trouvé avec cet ID => message d'erreur
            if (!theTag.id) {
                return response.status(400).json("Nous n'avons pas trouvé le tag avec l'id : " + id);
            } else {
            // on ne change que les paramètres envoyés   
            if (name) {
            theTag.name = name;
            }

            //on envoie les modifications en BDD
            await theTag.modifyAlcoolTag();
            console.log(theTag);
            response.json("Le tag avec l'id : " + id + ", a bien été modifié");
                
            }
            } catch (error) {
            response.status(403).json(error.message);
            console.log("Erreur dans la modification d'un tag : ", error);
            }
    },

};

module.exports = alcoolTagController;