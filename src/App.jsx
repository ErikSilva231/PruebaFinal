import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './Components/Header/TopBar';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import AddProduct from './views/AddProduct';
import ProductDetail from './views/ProductDetail';
import Products from './views/Products';
import Profile from './views/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
