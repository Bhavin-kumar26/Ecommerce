import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MenPage from "./Pages/MenPage";
import WomenPage from "./Pages/WomenPage";
import ShoePage from "./Pages/ShoePage";
import WatchPage from "./Pages/WatchPage";
import PerfumePage from "./Pages/PerfumePage";
import DisplayProductsDetails from "./Components/DisplayProductsDetails";
import { dataPhoto,womenCollections,watchData,shoeData,perfumeData } from "./assets/assets";
import Cart from "./Components/Cart";
const App = () => {
  return (
    <>
      <Navbar scrollLength={50} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<MenPage />} />
        <Route path="/Men/:productId" element={<DisplayProductsDetails CollectionData={dataPhoto}/>} />
        <Route path="/Women" element={<WomenPage />} />
        <Route path="/Women/:productId" element={<DisplayProductsDetails CollectionData={womenCollections}/>} />
        <Route path="/Watch" element={<WatchPage />} />
        <Route path="/Watch/:productId" element={<DisplayProductsDetails CollectionData={watchData}/>} />
        <Route path="/Shoe" element={<ShoePage />} />
        <Route path="/Shoe/:productId" element={<DisplayProductsDetails CollectionData={shoeData}/>} />
        <Route path="/Perfume" element={<PerfumePage />} />
        <Route path="/Perfume/:productId" element={<DisplayProductsDetails CollectionData={perfumeData}/>} />
      </Routes>
      <Cart/>
    </>
  );
};

export default App;
