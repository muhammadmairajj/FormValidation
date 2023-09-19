import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import "./styles.css";

export default function App() {
  const [screen, setScreen] = useState("./Login.js");

  return (
    <div className="App">
      {screen === "./Register.js" ? <Register /> : <Login />}
    </div>
  );
}
