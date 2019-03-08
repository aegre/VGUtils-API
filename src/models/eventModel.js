const mongoose = require('mongoose')

const Schema = mongoose.Schema

// model definition
const eventSchema = new Schema({
  artists: { type: [String] },
  eventDate: { type: Date },
  price: {
    type: Map,
    of: String
  },
  hour: {
    type: String, default: ''
  },
  imageURL: { type: String, default: '' },
  title: { type: String, required: true },
  isHightlight: { type: Boolean, default: false },
  hasBeenSaved: { type: Boolean, default: false },
  venue: { type: Schema.Types.ObjectId, ref: 'Venue' }
})

// model class
const EventClass = mongoose.model('Event', eventSchema)

module.exports = EventClass
