import Mongoose from 'mongoose';
const config = {
  server: {
    port: 9000
  },
  database: {
    url: `mongodb://localhost/node-express-skeleton-dev`,
    properties: {
      useMongoClient: true
    }
  },
  key: {
    privateKey: '37LvDSm4XvjYOh9Y',
    tokenExpireInMinutes: 1440
  },
  pagination: {
    defaultPage: 1,
    defaultLimit: 10
  }
};


Mongoose.connect(config.database.url, config.database.properties);

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error.'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

exports.db = db;
