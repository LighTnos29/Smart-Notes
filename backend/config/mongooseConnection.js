const mongoose = require('mongoose');
const debug = require('debug')('development:mongooseConnection');
const config = require('config');
require('dotenv').config();

mongoose
  .connect(`${config.get('MONGODB_URI')}/smartnotes`)
  .then(() => {
    debug("Connected to server");
    
  })
  .catch((err) => {
    debug("Error connecting to MongoDB:", err);
  });
