require('dotenv').config();
// Connect to the database
require('./config/database');

/*--- Require the app's Mongoose models ---*/
const Movie = require('./models/movie');
const Performer = require('./models/performer');

/*--- Define Variables to Hold Documents ---*/
let movie, movies;
let performer, performers;

/*--- Example ---*/

// console.log all movie documents
// Preview of promise syntax - coming SOON!
// Movie.find({}).then(console.log('found movies'));

// console.log('Time to CRUD!');
Movie.updateMany(
    {},  // Query object determines which docs to update
    {cast: []},  // Update object has properties to update
    function(err, result) {console.log(result)}
);
  