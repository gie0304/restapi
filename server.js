const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//parser application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil route
var router = require('./router');
router(app);

app.listen(3000, () => {
	console.log('Server started on port')
});

