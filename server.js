var express = require('express');
	path = require('path');
	bodyParser = require('body-parser');
	cors = require('cors');

var configureRoutes = require('./routes/index');
var configureDBAsync = require('./db/index');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('port', 5000);

async function initializeAppAsync() {
    await configureDBAsync(app)
	configureRoutes(app);

    const server = app.listen(app.get('port'), function() {
		console.log(`Express server listening on port ${app.get('port')}`);
	})
}

initializeAppAsync();