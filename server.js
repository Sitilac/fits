const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config()
require('./config/database');

const usersRouter = require('./routes/api/users')
const fitsRouter = require('./routes/api/fits')
const topsRouter = require('./routes/api/tops')
const bottomsRouter = require('./routes/api/bottoms')
const shoesRouter = require('./routes/api/shoes')
const accessoriesRouter = require('./routes/api/accessories')

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());


// Put API routes here, before the "catch all" route
app.use('/api/users',  usersRouter);
app.use(require('./config/auth'));
app.use('/api/fits',  fitsRouter);
app.use('/api/tops',  topsRouter);
app.use('/api/bottoms',  bottomsRouter);
app.use('/api/shoes',  shoesRouter);
app.use('/api/accessories',  accessoriesRouter);

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});