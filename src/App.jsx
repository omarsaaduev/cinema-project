import { Route, Routes } from "react-router-dom";
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

function App() {
  const [latestMovies, setLatestMovies] = useState([]);
  const [upMovies, setUpMovies] = useState([])
  const [allMovies, setAllMovies] = useState([]);
  const [limit,setLimit] = useState(8)
  useEffect(() => {
    const fetchMovies = async (limit) => {
      const response = await getData(`year=2023&limit=${limit}`);
      setLatestMovies(response.docs)
    }
    fetchMovies(limit)


    const fetchUpMovies = async () => {
      const response = await getData(`year=2024&limit=${25}&page=4`);
      setUpMovies(response.docs)
    }
    fetchUpMovies()
  },[limit]);
   
  return (
    <>
      <Context.Provider value={{latestMovies,setLimit, upMovies, allMovies, setAllMovies}}>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/movies/:id" element={<MoviesInfo/>}/>
          <Route path="/latest/:id" element={<LatestInfo/>}/>
          <Route path="/upcoming/:id" element={<UpcomingInfo/>}/>
          <Route path="/allmovies/:id" element={<AllMoviesInfo/>}/>
        </Route>
    </Routes>
      </Context.Provider>
    </>
  )
}

export default App;
