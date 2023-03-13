"User-Agent"

import { rowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ImageGenerator from "./ImageGenerator";
import TextGenerator from "./TextGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>HELLO AKHMIM DALL-E</h1>}>
          <Route path="/image" element={<ImageGenerator />} />
          <Route path="/text" element={<TextGenerator />} />
        </Route>
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