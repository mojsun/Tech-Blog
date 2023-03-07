const Sequelize = require("sequelize");
require("dotenv").config(); // Import sensitive data from .env

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // JAWSDB_URL is for HEROKU
  : new Sequelize("blog_db", "root", "@Mojde1373", {
      // This is for Local
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
