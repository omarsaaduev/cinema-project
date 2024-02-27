import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/AboutPage/About";
import MoviesInfo from "./components/MoviesInfo/MoviesInfo";

function App() {
   
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/movies/:id" element={<MoviesInfo/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
