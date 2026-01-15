import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const nav = useNavigate();
  const [data, setData] = useState({ name: "", email: "", mobile: "" });

  return (
    <div className="formBox">
      <h2>📝 Enter Details</h2>

      <input placeholder="Name" onChange={(e)=>setData({...data,name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setData({...data,email:e.target.value})}/>
      <input placeholder="Mobile" onChange={(e)=>setData({...data,mobile:e.target.value})}/>

      <button onClick={()=>nav("/success",{state:data})}>Submit</button>
    </div>
  );
}
