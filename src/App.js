import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import "./App.scss";
import { ColorProvider } from "./contexts/ColorContext";

function App() {
  return (
    <ColorProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ColorProvider>
  );
}

export default App;
