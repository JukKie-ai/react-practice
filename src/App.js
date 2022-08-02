import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";

function App() {
  return (
    <Router>
      <nav className="topnav">
        <Link to="/">Main Page</Link>
        <Link to="/usestate">UseState</Link>
        <Link to="/useeffect">UseEffect</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/usestate" element={<UseState></UseState>}></Route>
        <Route path="/useeffect" element={<UseEffect></UseEffect>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
