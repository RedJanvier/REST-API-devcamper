const mongoose = require('mongoose');

const CONNECTDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  console.log(`MongoDB connected at ${conn.connection.host}`);
};

module.exports = CONNECTDB;
