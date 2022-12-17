import React from "react";
import "./App.css"
import Header from "./components/Header/Header"
import ProductComponents from "./components/ProductComponents/ProductComponents"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import ProductList from "./components/ProductList/ProductList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return(
   <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="ProductComponents"  element={<ProductComponents/>} />
      <Route path="/product/:productId"  element={<ProductDetails/>} />
      <Route>404 file Not Found</Route>
    </Routes>
   </Router>
  )
}

export default App;