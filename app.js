const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
// const logger = require('./utility/logger');
const config = require('./config/config');

const furnitureRoutes = require('./routes/furniture');
const storeRoutes = require('./routes/store');
const userRoutes = require('./routes/user');
// const isAuth = require('./middleware/is-auth');

mongoose.set('useCreateIndex', true);
mongoose
  .connect(
    `mongodb://${config.name}:${config.pw}@ds125945.mlab.com:25945/elfurniture`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(() => {
    console.log('Connection failed');
  });

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
app.use('/api/store', storeRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
