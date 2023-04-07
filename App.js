import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
