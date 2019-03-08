const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 1234

const connString = process.env.MONGO_CONN_STRING || 'mongodb://localhost:27017/vgUtils'
// Mongo DB Connection
mongoose.connect(connString, {
  useNewUrlParser: true
}, (error) => {
  if (error) {
    throw error
  } else {
    console.log('Database conection succesfull')
    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
  }
})
