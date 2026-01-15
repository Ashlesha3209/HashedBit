import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const nav = useNavigate();

  return (
    <div className="center">
      <h2>🎥 Movie Selected</h2>
      <p>Movie ID: {id}</p>
      <button onClick={() => nav("/book")}>Book Seat</button>
    </div>
  );
}
