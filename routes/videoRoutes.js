var express = require('express');

const router = express.Router();

router.post('/addToHistory', (req, response, next) => {
	var myobj = req.body.data;
	req.app.get('collection')
	.insertOne({video: myobj})
	.then( _ => req.app.get('collection'))
	.find({})
	.toArray()
	.then(res=>response.send(JSON.stringify(res)))
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
	req.app.get('collection')
	.remove( {"_id": ObjectId(id)})
	.then( _ => req.app.get('collection'))
	.find({})
	.toArray()
	.then(res=>response.send(JSON.stringify(res)))
	.catch(err => response.send(err))
});

module.exports = router;