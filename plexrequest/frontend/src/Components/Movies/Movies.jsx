import MovieCard from "./MovieCard/MovieCard";

const Movies = ({movies}) => {


    /* **TODO** add filter dropdown for genre */


  return (
    movies.map((movie)=>{
      return <MovieCard movie={movie}/>
    })
  )

}

export default Movies;