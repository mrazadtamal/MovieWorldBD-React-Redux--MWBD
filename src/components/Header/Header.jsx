import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice'
import "./Header.scss"


const Header = () => {
const [movie, setMovie]=  useState("")
const dispatch =  useDispatch()
 const submitHandlar = (e)=>{
      e.preventDefault()
      console.log(movie);
      dispatch(fetchAsyncMovies(movie))
      dispatch(fetchAsyncShows(movie))
      setMovie("")
 }
   return (
        <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">MOVIE-WORLD-BD</div>
      </Link>
      <div className='search'>
      <form onSubmit={submitHandlar}>
        <input type="text" value={movie} onChange={(e)=>setMovie(e.target.value)} placeholder='Search' />
        <button type='submit'>Search</button>
      </form>
      </div>
      <div className="user-image">
        <img src={"https://res.cloudinary.com/abidazad/image/upload/v1640542528/Vector_uslonh.png"} alt="user" />
      </div>
    </div>
    )
}

export default Header
