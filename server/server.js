
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');


// Route includes
// const userRouter = require('./routes/user.router');
// const pcnRouter = require('./routes/pcn.router');
// const partsRouter = require('./routes/parts.router');
// const eolRouter = require('./routes/eol.router');
// const npiRouter = require('./routes/npi.router');
// const awsRouter = require('./routes/aws.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
// app.use(sessionMiddleware);

// // start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

// /* Routes */
// app.use('/api/user', userRouter);
// app.use('/api/pcn', pcnRouter);
// app.use('/api/parts', partsRouter);
// app.use('/api/eol', eolRouter);
// app.use('/api/npi', npiRouter);
// app.use('/api/aws', awsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
