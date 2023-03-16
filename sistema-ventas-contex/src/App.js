import { Routes, Route } from "react-router-dom";
import './App.css';
import { NotFound } from "./components/404/NotFound";
import { Cart } from "./components/Cart/Cart";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Login />} />
    <Route index path="home" element={<Home />} />
    <Route path="cart" element={<Cart />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
    </div>
  );
}

export default App;
