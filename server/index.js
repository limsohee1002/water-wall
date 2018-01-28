const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');

const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());
app.use('/', router);

app.listen(3000, () => {
    console.log('water wll listening on port 3000!')
})