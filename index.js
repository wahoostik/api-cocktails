require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
const apiRouter = require('./app/router');
const app = express();

// on parle en JSON
app.use(express.json());
// on rajoute la gestion des POST body
app.use(express.urlencoded({extended: true}));

//CORS
app.use(cors());

app.use(apiRouter);

app.listen(port, () => console.log(`Server listenning on http://localhost:${port}`));