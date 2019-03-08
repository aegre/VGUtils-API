const mongoose = require('mongoose')

const Schema = mongoose.Schema

// model definition
const venueSchema = new Schema({
  name: { type: String, required: true },
  address: {
    type: String, default: ''
  },
  isCustom: { type: Boolean, default: false }
})

// model class
const VenueClass = mongoose.model('Venue', venueSchema)

module.exports = VenueClass
