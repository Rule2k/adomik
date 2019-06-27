var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

var components = require('./components.json');
var users      = require('./users.json');
app.use(morgan('dev')); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


var port = process.env.PORT || 3000; 

var router = express.Router();

router.use(function(req, res, next) {
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'API started' });	
});

router.route('/components')

	.get(function(req, res) {
		res.json(components);
		});

router.route('/users')

	.get(function(req, res) {
		res.json(users);
		});

app.use('/api', router);

app.listen(port);
console.log('Server running on port ' + port);
