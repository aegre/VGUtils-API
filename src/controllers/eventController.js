const EventModel = require('./../models/eventModel')

module.exports = {

  // GET API/TASK
  getAll: async (req, res) => {
    try {
      const events = await EventModel.find({})
      res.status(200).send(events)
    } catch (err) {
      res.status(500).send({ message: 'Error while trying to fetch list of events' })
    }
  }

}
