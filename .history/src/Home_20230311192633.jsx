import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css";

function Home(props) {
    const navigate = useNavigate();
  return (
    <div>
        <h1>HELLO in AkhmimGPT</h1>
        <button onClick={() => navigate("/text")}>Want to generate text</button>
        <button onClick={() => navigate("/image")}>Want to generate imge</button>
    </div>
  )
}

export default Home