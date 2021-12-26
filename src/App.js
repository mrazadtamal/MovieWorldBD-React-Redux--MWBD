import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
