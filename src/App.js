import { NavBar } from "./components/NavBar/NavBar";
import { Filter } from "./components/Filter/Filter";
import { MovieList } from "./components/MovieList/MovieList";

export const App = () => {
  return (
    <>
      <NavBar />
      <Filter />
      <MovieList />
      {console.log(process.env)}
    </>
  );
};
