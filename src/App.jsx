// Importing necessary components from react-router-dom, App.css, and other custom components.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ImageGenerator from "./ImageGenerator";
import TextGenerator from "./TextGenerator";
import Home from "./Home";

function App() {
  // Render the main component which sets up the router and routes for the app.
  return (
    // Use the Router component to set up the routing for the app.
    <Router>
      {/* Use the Routes component to define the different routes for the app. */}
      <Routes>
        {/* Set up the route for the home page with the Home component. */}
        <Route path="/" element={<Home />} />
        {/* Set up the route for the image generator with the ImageGenerator component. */}
        <Route path="/image" element={<ImageGenerator />} />
        {/* Set up the route for the text generator with the TextGenerator component. */}
        <Route path="/text" element={<TextGenerator />} />
      </Routes>
    </Router>
  );
}

// Export the App component so it can be used elsewhere in the app.
export default App;
