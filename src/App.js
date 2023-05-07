import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import TopNavbar from "./components/TopNavbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
