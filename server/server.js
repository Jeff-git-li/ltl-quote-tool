const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/quote', routes.get_quotes);

app.listen(config.server_port, () => console.log(`Server running on http://${config.server_host}:${config.server_port}/`));

module.exports = app;