const VenueModel = require('./../models/venueModel')

module.exports = {

  // GET API/TASK
  getAll: async (req, res) => {
    try {
      const venues = await VenueModel.find({})
      res.status(200).send(venues)
    } catch (err) {
      res.status(500).send({ message: 'Error while trying to fetch list of venues' })
    }
  }

}
