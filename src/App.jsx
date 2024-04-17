import "./App.css";

import SearchBox from "./components/SearchBox";
import Dashboard from "./components/Dashboard";

import { useSelector } from "react-redux";

function App() {
  const isUser = useSelector((state) => state.user.isUser);

  return <>{isUser ? <Dashboard /> : <SearchBox />}</>;
}

export default App;
