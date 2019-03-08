const express = require('express')
const constants = require('../constants')

// Controller module
const venueController = require('../controllers/venueController')

// Load router from express.js
const api = express.Router()

// define routes
api.get(constants.VENUE_ROUTE, venueController.getAll)
api.post(constants.VENUE_ROUTE, venueController.post)
/**
api.get(`${constants.EVENT_ROUTE}${constants.URL_PARAM_ID}`, venueController.get);
api.get(constants.EVENT_ROUTE, venueController.getAll);
api.post(constants.EVENT_ROUTE, venueController.post);
api.put(`${constants.EVENT_ROUTE}${constants.URL_PARAM_ID}`, venueController.put);
api.delete(`${constants.EVENT_ROUTE}${constants.URL_PARAM_ID}`, venueController.delete);
 */

// export router
module.exports = api
