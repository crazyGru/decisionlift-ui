import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Home";

axios.defaults.baseURL = import.meta.env.VITE_REACT_BASE_URL;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
