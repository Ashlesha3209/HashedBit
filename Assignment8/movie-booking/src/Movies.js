import { useNavigate } from "react-router-dom";
import "./App.css";

const movies = [
  {
    id: 1,
    name: "Avatar 2",
    img: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
  },
  {
    id: 2,
    name: "Jawan",
    img: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
  },
  {
    id: 3,
    name: "KGF 2",
    img: "https://image.tmdb.org/t/p/w500/khNVygolU0TxLIDWff5tQlAhZ23.jpg"
  }
];


export default function Movies() {
  const nav = useNavigate();

  return (
    <div className="page">
      <h2>🎬 Movie Booking</h2>

      <div className="grid">
        {movies.map((m) => (
          <div className="card" key={m.id} onClick={() => nav(`/movie/${m.id}`)}>
            <img src={m.img} alt={m.name} />
            <h4>{m.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
