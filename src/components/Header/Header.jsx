import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"


const Header = () => {
    return (
        <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">MOVIE-WORLD-BD</div>
      </Link>
      <div className="user-image">
        <img src={"https://res.cloudinary.com/abidazad/image/upload/v1640542528/Vector_uslonh.png"} alt="user" />
      </div>
    </div>
    )
}

export default Header
