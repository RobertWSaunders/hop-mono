require('dotenv').config();
const express = require('express');
const models = require('./models');

const app = express();
const port = process.env.PORT || 3000;

models.sequelize.sync().then(() => {
	console.log('Database is connected and is looking good!');
}).catch((err) => {
	console.log(err, 'Something went wrong with the database update!');
});

app.listen(port, () => {
	console.log('Server is running and is listening!');
});
