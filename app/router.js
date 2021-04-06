const { Router } = require('express');
const router = Router();

//on importe nos controllers
const cocktailController = require('./controllers/cocktailController');
const alcoolTagController = require('./controllers/alcoolTagController');

// Page d'accueil
router.get('/', (request, response) => {
    response.send('Hello and Welcome! This is a cocktail API!');
  });

//Routes Cocktail
router.get('/cocktails', cocktailController.allCocktails);
router.get('/cocktails/:id', cocktailController.cocktailById);
router.post('/cocktails', cocktailController.addCocktail); 
router.delete('/cocktails/:id', cocktailController.deleteCocktail); 
router.patch('/cocktails/:id', cocktailController.modifyCocktail);

//Routes Tag
router.get('/alcool', alcoolTagController.allTag);
router.get('/alcool/:id', alcoolTagController.alcoolTagById);
router.post('/alcool', alcoolTagController.addAlcoolTag); 
router.delete('/alcool/:id', alcoolTagController.deleteTag); 
router.patch('/alcool/:id', alcoolTagController.modifyAlcoolTag);

module.exports = router;