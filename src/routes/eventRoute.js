const express = require('express')
const constants = require('../constants')

// Controller module
const eventController = require('../controllers/eventController')

// Load router from express.js
const api = express.Router()

// define routes
api.get(constants.EVENT_ROUTE, eventController.getAll)
api.post(constants.EVENT_ROUTE, eventController.post)
/**
api.get(`${constants.EVENT_ROUTE}${constants.URL_PARAM_ID}`, eventController.get);
api.get(constants.EVENT_ROUTE, eventController.getAll);
api.post(constants.EVENT_ROUTE, eventController.post);
api.put(`${constants.EVENT_ROUTE}${constants.URL_PARAM_ID}`, eventController.put);
api.delete(`${constants.EVENT_ROUTE}${constants.URL_PARAM_ID}`, eventController.delete);
 */

// export router
module.exports = api
