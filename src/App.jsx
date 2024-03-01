import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/AboutPage/About";
import MoviesInfo from "./components/MoviesInfo/MoviesInfo";
import { Context } from "./context/context";
import { getData } from "./api/getMovies";
import { useEffect, useState } from "react";
import LatestInfo from "./components/LatestInfo/LatestInfo";
import UpcomingInfo from "./components/UpcomingInfo/UpcomingInfo";
import Movies from "./pages/Movies/Movies";
import AllMoviesInfo from "./components/AllMoviesInfo/AllMoviesInfo";
import Search from "./components/Search/Search";
import Progressus from "./components/Progressus/Progressus";

function App() {
  const [latestMovies, setLatestMovies] = useState([]);
  const [upMovies, setUpMovies] = useState([])
  const [allMovies, setAllMovies] = useState([]);
  const [limit,setLimit] = useState(8)
  const location = useLocation()
  useEffect(() => {
    const fetchMovies = async (limit) => {
      const response = await getData(`?year=2023&limit=${limit}`);
      setLatestMovies(response.docs)
    }
    fetchMovies(limit)


    const fetchUpMovies = async () => {
      const response = await getData(`?year=2024&limit=${25}&page=4`);
      setUpMovies(response.docs)
    }
    fetchUpMovies()

    window.scrollTo(0,0)
  },[limit, location]);
   
  return (
    <>
      <Context.Provider value={{latestMovies,setLimit, upMovies, allMovies, setAllMovies}}>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:id" element={<MoviesInfo/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/latest/:id" element={<LatestInfo/>}/>
          <Route path="/upcoming/:id" element={<UpcomingInfo/>}/>
          <Route path="/allmovies/:id" element={<AllMoviesInfo/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/progressus" element={<Progressus/>}/>
        </Route>
    </Routes>
      </Context.Provider>
    </>
  )
}

export default App;
