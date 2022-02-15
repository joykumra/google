import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />}></Route>

        {/* SEARCH PAGE */}
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
