import {useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState(null);
  console.log(process.env.REACT_APP_API_URI + '/api/movies')

  useEffect(()=>{
    const fetchRecentMovies = async () => {
      //get all movies
      const response = await fetch(process.env.REACT_APP_API_URI + '/api/movies');
      const moviesJSON = await response.json();

      //if there are no errors, ie if the response status is in the range of 200-299
      if(response.ok) {
        setMovies(moviesJSON)
      }
    }

    fetchRecentMovies()
  }, [])


  return (
    <div className="home">
      <div className="movies">
        {movies && movies.map((movie) => (
          <p key={movie.title}>
            {movie.title}
          </p>
        ))}
      </div>
    </div>
  )
};

export default Home;