const EventModel = require('./../models/eventModel')

module.exports = {

  // GET api/events
  getAll: async (req, res) => {
    try {
      const events = await EventModel.find({}).populate('venue')
      res.status(200).send(events)
    } catch (err) {
      res.status(500).send({ message: 'Error while trying to fetch list of events' })
    }
  },

  // POST api/events
  post: async (req, res) => {
    // Limit of minutes, we convert it to seconds
    if (req.body.duration && req.body.duration > 7200) {
      res.status(400).send({ message: 'El limite de minutos es 120 (7200 segundos)' })
      return
    }

    try {
      // Generate a event model with all the parameters
      const event = new EventModel({ ...req.body })
      // save model
      const savedEvent = await event.save()
      // return the saved event
      res.status(200).send(savedEvent)
    } catch (err) {
      console.error(err)
      res.status(500).send({ message: 'Error while trying to create venue' })
    }
  }
}
