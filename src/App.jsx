import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home.jsx"
import Login from "./views/Login.jsx"
import Register from "./views/Register.jsx"
import AddProduct from "./views/AddProduct.jsx"
import ProductDetail from "./views/ProductDetail.jsx"
import Products from "./views/Products.jsx"
import Profile from "./views/Profile.jsx"

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/ProductDetail" element={<ProductDetail/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
      <Route path="/AddProduct" element={<AddProduct/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
