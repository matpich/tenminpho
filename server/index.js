const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

const user = require('./routes/user');
const login = require('./routes/login');

app.listen('3001', () => console.log('Server is on PORT 3001'));

const tempVarForPass = 'testowehaslo12';

mongoose
  .connect(
    `mongodb+srv://matpich:${tempVarForPass}@tenminpho-bhr0w.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected with database.'))
  .catch(() => console.log('Something went wrong.'));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/users', user);
app.use('/signin', login);
