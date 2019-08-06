var express = require('express');

const router = express.Router();

router.post('/addToHistory', (req, response, next) => {
	var myobj = req.body.data;
	req.app.get('collection').insertOne({video: myobj}, function(err, res) {
		if (err) return response.send(err);
		req.app.get('collection').find({}).toArray(function (err, result) {
			if (err) return response.send(err);
			response.send(JSON.stringify(result));
		})
	});
});

router.get('/history', (req, response, next) => {
	req.app.get('collection').find({}).toArray(function (err, result) {
		if (err) return response.send(err);
		response.send(JSON.stringify(result));
	})
});

router.delete('/delete/:id', (req, response, next) => {
	const id = req.params.id;
	req.app.get('collection').remove( {"_id": ObjectId(id)}, ()=>{
		req.app.get('collection').find({}).toArray(function (err, result) {
			if (err) return response.send(err);
			response.send(JSON.stringify(result));
		})
    });
});

module.exports = router;