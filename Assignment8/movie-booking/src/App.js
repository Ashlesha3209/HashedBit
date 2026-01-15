import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import BookingForm from "./BookingForm";
import Success from "./Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
