const express = require('express');
const app = express();
const mongoose = require('mongoose');

const sample = require("./routes/sample")

app.listen('3001', () => console.log("Server is on PORT 3001"));

const tempVarForPass = "testowehaslo12"

mongoose.connect(`mongodb+srv://matpich:${tempVarForPass}@tenminpho-bhr0w.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser:true})
    .then(() => console.log("Connected with database."))
    .catch(() => console.log("Something went wrong."))


app.use(express.json());

app.use(sample);