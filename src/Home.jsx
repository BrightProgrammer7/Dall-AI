import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css";

function Home(props) {
    const navigate = useNavigate();
  return (
    <div>
        <h1>HELLO in AkhmimDALL-E</h1>
        <button onClick={() => navigate("/image")}>Want to generate image</button>
    </div>
  )
}

export default Home
