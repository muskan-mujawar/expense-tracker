import { useState } from "react";
import "./App.css";
import ListItems from "./listItems";
import Expense from "./expense";
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
