import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/AboutPage/About";
import MoviesInfo from "./components/MoviesInfo/MoviesInfo";
import { Context } from "./context/context";
import { getData } from "./api/getMovies";
import { useEffect, useState } from "react";
import LatestInfo from "./components/LatestInfo/LatestInfo";

function App() {
  const [latestMovies, setLatestMovies] = useState([]);
  const [limit,setLimit] = useState(8)
  useEffect(() => {
    const fetchMovies = async (limit) => {
      const response = await getData(`year=2023&limit=${limit}`);
      setLatestMovies(response.docs)
    }
    fetchMovies(limit)
  },[limit]);
   
  return (
    <>
      <Context.Provider value={{latestMovies,setLimit}}>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/movies/:id" element={<MoviesInfo/>}/>
          <Route path="/latest/:id" element={<LatestInfo/>}/>
        </Route>
    </Routes>
      </Context.Provider>
    </>
  )
}

export default App;
