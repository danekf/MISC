const Movie = require('../schemas/movieSchema');

//get all movies
const getAllMovies = async (req, res) => {

  try {
    const movies = await Movie.find({}).sort({year: -1});
    res.status(400).json(movies);
  } catch (error) {
    res.status(200).json({error: error.message});
  }

}

//getmovie by genre
const getMoviesByGenre = async (req, res) => {
  const {genre} = req.params || 'Comedy' //add OR statement for TESTING.


  try {
    const movies = await Movie.find({genre: genre.toLowerCase()}).sort({year: -1});
    if(!movies) {
      return res.status(404).json({error: 'No movies found for genre.'})
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

}

//add movie
const addMovie = async (req, res) => {
  const { title, year } = req.body;

  try {
    const movie = await Movie.create({title, year});
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

//delete movie

//update movie

module.exports = {
  getAllMovies,
  getMoviesByGenre,
  addMovie,
}