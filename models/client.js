const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error:'));

db.once('open', function() {
  // we're connected!
  console.log("Database connected!");
});