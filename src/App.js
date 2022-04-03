import { MovieList } from "./components/MovieList/MovieList";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
