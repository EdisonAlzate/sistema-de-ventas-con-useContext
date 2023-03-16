import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { NotFound } from "./components/404/NotFound";
import { Cart } from "./components/Cart/Cart";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { ProviderUsuario } from "./contexts/global";

function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [count, setCount] = useState(0);
  const [addCar, setAddCart] = useState(0);
  const [current, setCurrent] = useState('');

  return (
    <ProviderUsuario
      value={{
        user,
        count,
        addCar,
        current,
        setCurrent,
        setAddCart,
        setCount,
        setUser,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProviderUsuario>
  );
}

export default App;
