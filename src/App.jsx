import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./components/movies_components/video/Video";
import CryptoHomePage from "./pages/cryptoPage/CryptoHomePage";
import Home from "./pages/home/Home";
import MovieHome from "./pages/movies/homePage/MovieHome";

import Login from "./pages/movies/login/Login";
import MainPage from "./pages/movies/mainPage/MainPage";
import Partners from "./pages/partners/Partners";
import Register from "./pages/movies/register/Register";
function App() {
  console.log(`${process.env.REACT_APP_NEWS_API}`)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/JMedia" element={<MainPage />} />
        <Route path="/JMedia/login" element={<Login />} />
        <Route path="/JMedia/signup" element={<Register />} />
        <Route path="/JMedia/crypto" element={<CryptoHomePage />} />
        <Route path="/JMedia/movie/home" element={<MovieHome />} />
        <Route path="/JMedia/movie/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
