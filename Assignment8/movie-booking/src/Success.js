import { useLocation } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();
  const id = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="center">
      <h2>✅ Booking Confirmed</h2>
      <p><b>Booking ID:</b> {id}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
}
