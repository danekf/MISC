import MovieCard from "./MovieCard/MovieCard";

const Movies = (props) => {
  const { movies } = props;
  console.log(movies);

  return (
    movies.map((movie)=>{
      return <MovieCard movie={movie}/>
    })
  )

}

export default Movies;