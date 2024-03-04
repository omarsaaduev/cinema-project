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
import Search from "./components/Search/Search";
import Progressus from "./components/Progressus/Progressus";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import SignUp from "./components/Auth/SignUp/SignUp";
import AuthDetails from "./components/Auth/AuthDetails/AuthDetails";
import Drawer from "./pages/Drawer/Drawer.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./utils/router/PrivateRoute.jsx";

function App() {
  const [latestMovies, setLatestMovies] = useState([]);
  const [upMovies, setUpMovies] = useState([])
  const [allMovies, setAllMovies] = useState([]);
  const [limit,setLimit] = useState(8)
  const [authUser, setAuthUser] = useState(null);


  useEffect(() => {
    const fetchMovies = async (limit) => {
      const response = await getData(`?year=2023&limit=${limit}`);
      setLatestMovies(response.docs)
    }
    fetchMovies(limit)


    const fetchUpMovies = async () => {
      const response = await getData(`?year=2024&limit=${35}&page=1`);
      setUpMovies(response.docs)
    }
    fetchUpMovies()

    
  },[limit]);
   
  return (
    <>
    <Provider store={store}>
      <Context.Provider value={{latestMovies,setLimit, upMovies, allMovies, setAllMovies, authUser, setAuthUser}}>
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
          <Route path="/auth" element={<AuthLayout/>}>
            <Route path="/auth" element={<AuthDetails/>}/>
            <Route path="/auth/signup" element={<SignUp/>}/>
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/drawer" element={<Drawer/>}/>
          </Route>
        </Route>
    </Routes>
      </Context.Provider>
      </Provider>
    </>
  )
}

export default App;
