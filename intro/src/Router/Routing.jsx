import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import MovieDetails from "../Components/MovieDetails";
import Topratedpage from "../Pages/Topratedpage";
import Popularpage from "../Pages/Popularpage";
import Upcomingpage from "../Pages/Upcomingpage";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path="/topratedpage" element={<Topratedpage />} />
          <Route path="/popular" element={<Popularpage />} />
          <Route path="/upcoming" element={<Upcomingpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
