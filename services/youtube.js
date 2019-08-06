const {google} = require('googleapis');
const service = google.youtube({ version: 'v3', auth: 'AIzaSyDJabsoqQKhXrBhY-uigkQnNX3MEjpakcw' });
module.exports = service;