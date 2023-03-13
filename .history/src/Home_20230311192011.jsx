import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css";

function Home(props) {
    const navigate = useNavigate();
  return (
    <div>
        <h1>HELLO AKHMIM DALL-E</h1>
        <button onClick={() => navigate("/text")}>Go to Contact</button>
        <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  )
}

export default Home