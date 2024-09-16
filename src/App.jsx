import { useState } from "react";
import "./App.css";

import Navbar from "./navbar";
import Home from "./home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="summary">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
