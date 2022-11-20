import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./Admin/AddProduct/AddProduct";
import AdminHome from "./Admin/Home/Home";
import Login from "./Login/Login";

export default function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
