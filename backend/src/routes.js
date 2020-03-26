const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/incidentController')
const ProfileControler = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions',SessionController.create)

routes.get('/ongs',OngController.index);

routes.post('/ongs',OngController.create);

routes.post('/incidents',IncidentsController.create)

routes.get('/incidents',IncidentsController.index)

routes.get('/profile',ProfileControler.index)

routes.delete('/incidents/:id',IncidentsController.delete)

module.exports = routes;    