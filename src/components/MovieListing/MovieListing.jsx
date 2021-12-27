import React from 'react'
import { useSelector } from "react-redux";
import "./MovieListing.scss"
import MovieCard from './../MovieCard/MovieCard';
import { getAllMovies, getAllShows } from './../../redux/movies/movieSlice';
import Slider from "react-slick";
import { Responsive } from '../../page/Responsive ';



const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies,
      renderShows = "";   
    renderMovies =
      movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <div className="movies-error">
          <h3>{movies.Error}</h3>
        </div>
      );
    
    renderShows =
      shows.Response === "True" ? (
        shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
      ) : (
        <div className="shows-error">
          <h3>{shows.Error}</h3>
        </div>
      );
    

    return (
        <div className="movie-wrapper">
      <div className="movie-list">
        <h2>ALL Movies</h2>
        <div className="movie-container">
         <Slider {...Responsive}>{renderMovies}</Slider> 
         
         </div>
      </div>
      <div className="show-list">
        <h2>TV Show</h2>
        <div className="movie-container">
        <Slider {...Responsive}> {renderShows}</Slider> 
         
          
          </div>
      </div>
    </div>
    )
}

export default MovieListing
