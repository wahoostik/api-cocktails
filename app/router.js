const { Router } = require('express');
const router = Router();

//on importe nos controllers
const cocktailController = require('./controllers/cocktailController');
const alcoolTagController = require('./controllers/alcoolTagController');
const userController = require('./controllers/userController');
const userMadeCocktailController= require('./controllers/userMadeCocktails');


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

// Routes Login, Register
router.post('/login', userController.login);
router.patch('/settings/user/:id', userController.modifyUserData);
router.patch('/settings/email/:id', userController.modifyUserEmail);
router.delete('/settings/delete/:id', userController.deleteUser);
router.post('/register', userController.signupForm);
router.get('/settings/cocktail/:id', userMadeCocktailController.userCocktailById);

module.exports = router;