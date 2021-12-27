import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"


const Header = () => {
const [movie, setMovie]=  useState("")
 const submitHandlar = (e)=>{
e.preventDifault()
console.log(movie);
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
