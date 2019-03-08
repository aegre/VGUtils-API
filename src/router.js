const eventRoute = require('./routes/eventRoute')
const venueRoute = require('./routes/venueRoute')

const constants = require('./constants')

module.exports = (app) => {
  app.use(constants.BASE_ROUTE, eventRoute)
  app.use(constants.BASE_ROUTE, venueRoute)
}
