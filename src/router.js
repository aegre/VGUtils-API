const eventRoute = require('./routes/eventRoute')
const constants = require('./constants')

module.exports = (app) => {
  app.use(constants.BASE_ROUTE, eventRoute)
}
