require('dotenv').config();
const config = {
  port: process.env.port || 8000,
  jwt_secret: process.env.SECRET_KEY,
};

module.exports = config;
