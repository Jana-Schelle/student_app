const express = require('express');
const app = express();
const db_connection = require('./db/db_connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//import routes
const studentsRoute = require('./routes/students');

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'submit_new_students')));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', studentsRoute);


app.listen(3000);

