import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css";

function Home(props) {
    const navigate = useNavigate();
  return (
    <div>
        <h1>HELLO AKHMIM DALL-E</h1>
    </div>
  )
}

export default Home