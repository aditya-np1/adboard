import Home from "./Home/home";
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ShopRegister from "./shopRegister/shopRegister";
import ShopShow from "./shopShow/shopShow";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register_shop" element={<ShopRegister />} />
          <Route path="/shopShow" element={<ShopShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;