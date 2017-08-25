let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let heroesRoutes = require('./routes/heroes');
let mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect(require('./config').mongoUrl, {useMongoClient: true});



app.use(bodyParser.urlencoded({extended: false}));
app.use(heroesRoutes);



app.listen(4242, () => console.log('server running on port 4242'));