import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Movie } from "./pages/movie/movie";
import { Header } from "./components/header/header";
import { NotFound } from "./pages/error/notFound";
import { Favorites } from "./pages/favorites/favorites";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<Movie />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}