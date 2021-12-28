import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/movies/movieSlice";
import "./Header.scss";
import { FaSearchengin } from "react-icons/fa";

const Header = () => {
  const [movie, setMovie] = useState("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const submitHandlar = (e) => {
    e.preventDefault();
    if (movie === "") return alert("Please Enter a Movie Name");
    dispatch(fetchAsyncMovies(movie));
    dispatch(fetchAsyncShows(movie));
    setMovie("");
  };
  return (
    <div>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo desktop">MOVIE-WORLD-BD</div>
          <div className="logo mobile">MWB</div>
        </Link>
        <div className="search desktop">
          <form onSubmit={submitHandlar}>
            <input
              type="text"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              placeholder="Search"
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="user-image">
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1640542528/Vector_uslonh.png"
            }
            alt="user"
          />
        </div>

        <div className="search mobile">
          <button onClick={() => setActive((prev) => !prev)}>
            <FaSearchengin />
          </button>
        </div>
      </div>
      <div className={!active ? "search-m active" : "search-m"}>
        <form onSubmit={submitHandlar}>
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
