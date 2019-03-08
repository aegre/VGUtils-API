const mongoose = require('mongoose')

const Schema = mongoose.Schema

// model definition
const eventSchema = new Schema({
  artists: { type: [String], default: [] },
  eventDate: { type: Date },
  price: {
    type: Map,
    of: String
  },
  schedule: {
    type: String, default: ''
  },
  imageURL: { type: String, default: '' },
  title: { type: String, required: true },
  isHightlight: { type: Boolean, default: false },
  hasBeenSaved: { type: Boolean, default: false },
  venue: { type: Schema.Types.ObjectId, ref: 'Venue' },
  tags: { type: [String], default: [] }
})

// model class
const EventClass = mongoose.model('Event', eventSchema)

module.exports = EventClass
