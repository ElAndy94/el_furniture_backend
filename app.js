const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
// const logger = require('./utility/logger');
// const config = require('./config/config');

const furnitureRoutes = require('./routes/furniture');
const storeRoutes = require('./routes/store');
// const authRoutes = require('./routes/auth');
// const isAuth = require('./middleware/is-auth');

// mongoose.set('useCreateIndex', true);
// mongoose
//   .connect(
//     `mongodb://${config.name}:${config.pw}@ds125263.mlab.com:25263/react-gym`,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     logger.info('Connected to the database!');
//   })
//   .catch(() => {
//     logger.error('Connection failed');
//   });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// app.use(isAuth);

app.use('/api/furniture', furnitureRoutes);
app.use('/api/stores', storeRoutes);

module.exports = app;
