import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing'
import "./Home.scss"

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Spider-Man";
    const seriesText = "Thrones";
    useEffect(() => {
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(seriesText));
    }, [dispatch]);
    return (
        <div>
        <div className="banner-img"></div>
        <MovieListing />
      </div>
    )
}

export default Home
