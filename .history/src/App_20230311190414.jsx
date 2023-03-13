"User-Agent"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ImageGenerator from "./ImageGenerator";
import TextGenerator from "./TextGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          
        </Route>
        <Route path="/" element={<TextGenerator />} />
        <Route path="/" element={<TextGenerator />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <h1>HELLO AKHMIM DALL-E</h1>
    //   <ImageGenerator />
    //   <br/>
    //   <TextGenerator />
    // </div>
  );
}

export default App;
