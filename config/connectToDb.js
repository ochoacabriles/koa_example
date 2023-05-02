const mongoose = require('mongoose');
const { mongoUri } = require('./environment');

let isConnected = false;

const connectToDb = async () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return;
  }

  console.log('=> using new database connection');
  const db = await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  isConnected = db.connections[0].readyState;
};

module.exports = connectToDb;
