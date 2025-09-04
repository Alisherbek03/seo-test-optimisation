import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Shop } from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Shop />} />
    </Routes>
  );
}

export default App;
