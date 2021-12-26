import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"


const Header = () => {
    return (
        <div className="header">
      <Link to="/">
        <div className="logo">MWBD</div>
      </Link>
      <div className="user-image">
        <img src={"https://res.cloudinary.com/abidazad/image/upload/v1637747947/user_xsd3a7.png"} alt="user" />
      </div>
    </div>
    )
}

export default Header
