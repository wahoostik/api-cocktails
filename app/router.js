const { Router } = require('express');
const router = Router();

// Page d'accueil
router.get('/', (request, response) => {
    response.send('Hello and Welcome! This is a cocktail API!');
  });

  module.exports = router;