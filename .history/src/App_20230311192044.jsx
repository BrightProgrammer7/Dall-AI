"User-Agent"

import { rowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ImageGenerator from "./ImageGenerator";
import TextGenerator from "./TextGenerator";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/image" element={<ImageGenerator />} />
          <Route path="/text" element={<TextGenerator />} />

      </Routes>
    </Router>
    // <div className="App">
    //   <h1>HELLO AKHMIM DALL-E</h1>
    //   <ImageGenerator />
    //   <br/>
    //   <TextGenerator />
    // </div>
  );
}

export default App;
