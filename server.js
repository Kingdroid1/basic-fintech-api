
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./helpers/error-handler');

//use mongoose library to set up the database connection with MongoDB. We can also use Mongoose to save the data in the database using Mongoose ORM.
const mongoose = require('mongoose'), 
config = require('./DB');
require('./models/users');
 
//controllers for models
const rtsIndex = require('./routes/index');
const paymentRoute = require('./routes/payment-route');
const transactionRoute = require('./routes/trasaction-route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/api', rtsIndex);
app.use('/payment', paymentRoute);
app.use('/transaction', transactionRoute);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 5000;

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});
