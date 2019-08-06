var MongoClient = require('mongodb').MongoClient;
	ObjectId = require('mongodb').ObjectID;

const url = "mongodb://localhost:27017/";

module.exports = async (app) => {
    await MongoClient
	.connect(url)
	.then(client => {
		var db = client.db('videosDB')
		var collection = db.collection('videos')
		app.set('db', db);
		app.set('collection', collection);
	})
	.catch(error => console.error(error));
};

