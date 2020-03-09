const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://SYSDBA:masterkey@cluster0-dh9t8.azure.mongodb.net/week?retryWrites=true&w=majority', {
    useNewUrlParser: true,    
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); 
app.use(routes);

app.listen(3333);