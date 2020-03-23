/* eslint-disable new-cap, no-console */
require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
// const request = require('request');
// const _ = require('lodash');

const DiscordBot = require('./api/components/discord-bot');

const rootUrl = (process.env.ROOT_URL || 'http://localhost');
const port = Number(process.env.PORT || 3000);

/* ****************************** EXPRESS SETUP ***************************** */

const app = express();
app.set('json spaces', 2);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ****************************** EXPRESS ROUTES **************************** */

app.get('/', (req, res) => {
  res.send('Hello World');
});

/* ******************************* SERVER LISTEN **************************** */

// Server Listen
app.listen(port, () => {
  console.log(`\nApp server is running on ${rootUrl}:${port}\n`);
});
