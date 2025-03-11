import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppStore from "./pages/appstore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppStore />} />
      </Routes>
    </Router>
  );
}

export default App;
