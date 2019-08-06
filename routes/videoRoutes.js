const express = require('express');
const youtubeService = require('../services/youtube');
const router = express.Router();

router.post('/addToHistory', (req, response, next) => {
	var myobj = req.body.data;
	const collection = req.app.get('collection');

	collection
	.insertOne({video: myobj})
	.then( _ => {
		collection
		.find({})
		.toArray()
		.then(res=>response.send(JSON.stringify(res)))
		.catch(err => response.send(err))
	})
	.catch(err => response.send(err))
});

router.get('/history', (req, response, next) => {
	req.app.get('collection')
	.find({})
	.toArray()
	.then(res => response.send(JSON.stringify(res)))
	.catch(err => response.send(err))
});

router.delete('/delete/:id', (req, response, next) => {
	const id = req.params.id;
	const collection = req.app.get('collection');

	collection
	.deleteOne({"_id": ObjectId(id)})
	.then( _ => {
		collection
		.find({})
		.toArray()
		.then(res=>response.send(JSON.stringify(res)))
		.catch(err => response.send(err))
	})
	.catch(err => response.send(err))
});

router.get('/search/:search', (req, response, next) => {
	const search = req.params.search;

	youtubeService
	.search.list({part:"snippet", "q": search, type: "video" })
	.then(res=>response.send(JSON.stringify(res.data)))
	.catch(err => response.send(err))

});

module.exports = router;