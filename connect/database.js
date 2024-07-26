const mongoose = require("mongoose");
DATABASE_URL = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(DATABASE_URL);

    console.log(`Base de dados conectada: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;