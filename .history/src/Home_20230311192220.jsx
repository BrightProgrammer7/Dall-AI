import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css";

function Home(props) {
    const navigate = useNavigate();
  return (
    <div>
        <h1>HELLO AKHMIM DALL-E</h1>
        <button onClick={() => navigate("/text")}>Want to generate text</button>
        < onClick={() => navigate("/image")}>Want to generate text</button>
    </div>
  )
}

export default Home