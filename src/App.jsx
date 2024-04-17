import "./App.css";
import Logo from "../src/assets/github.svg";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  console.log(username);

  return (
    <div className="outer-section">
      <img src={Logo} alt="logo" width={40} />
      <input
        type="text"
        placeholder="Enter github username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default App;
