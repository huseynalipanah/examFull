import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";
import NoPage from "./Pages/NoPage/NoPage";
import Basket from "./Pages/Basket/Basket";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Detail from "./Pages/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/detail/:id" element={<Detail />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
