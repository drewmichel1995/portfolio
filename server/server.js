require('dotenv').config();
const express = require('express');
const app = express();
const mongo = require('mongoose');

mongo.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongo.connection;
db.on('error', error => console.log(error));
db.on('open', () => console.log('connected to Database'));

app.use(express.json());

const portfolioinfoRouter = require('./routes/portfolioinfo');
app.use('/portfolioinfo', portfolioinfoRouter);

/*const dockerRouter = require('./routes/docker');
app.use('/docker', dockerRouter);*/

app.listen(3000, () => console.log(process.env.DATABASE_URL));
