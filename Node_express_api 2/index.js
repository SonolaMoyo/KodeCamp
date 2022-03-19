import express from "express";  //const express = require("express"); is the same as line above
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();  //the application
const PORT = 4000;  //port number

app.use(bodyParser.json());  //statement states that json format will be used for data transfer

app.use('/users', usersRoutes);

app.listen(PORT, () => console.log(`Server running on the port: http://localhost:${PORT}`));  //listener

app.get('/', (req, res) => res.send('Hello from Homepage.'));