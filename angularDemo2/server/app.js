const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const url = 'mongodb://nhall27:webtechlab4@ds163226.mlab.com:63226/se3316-nhall27-lab4';

const User = require('./model/user');
const Post = require('./model/post');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		User.find({
			username : req.body.username, password : req.body.password
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					message: 'Login Failed'
				})
			}
			
		})
	});
})

app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connection established successfully');
	    Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
	    		console.log("finding posts")
				if(err) throw err;
				return res.status(200).json({
					status: 'success',
					data: doc
				})
		})
	
	});
})

app.post('/api/post/createPost', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err
		console.log('create post connection established ');
		const post = new Post({
			title: req.body.title,
			description: req.body.description
		})
		post.save((err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})

/*app.get('/api/user/login', (req, res) => {
    res.send('Hello World!')
})*/

 
app.listen(3000, () => console.log('blog server running on port 3000!'))