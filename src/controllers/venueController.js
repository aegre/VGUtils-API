const VenueModel = require('../models/venueModel')

module.exports = {

  // GET api/venues
  getAll: async (_, res) => {
    try {
      const venues = await VenueModel.find({})
      res.status(200).send(venues)
    } catch (err) {
      res.status(500).send({ message: 'Error while trying to fetch list of venues' })
    }
  },

  // POST api/venues
  post: async (req, res) => {
    // Limit of minutes, we convert it to seconds
    if (req.body.duration && req.body.duration > 7200) {
      res.status(400).send({ message: 'El limite de minutos es 120 (7200 segundos)' })
      return
    }

    try {
      // Generate a venue model with all the parameters
      const venue = new VenueModel({ ...req.body })
      // save model
      const savedVenue = await venue.save()
      // return the saved venue
      res.status(200).send(savedVenue)
    } catch (err) {
      res.status(500).send({ message: 'Error while trying to create venue' })
    }
  }

}
