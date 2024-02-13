import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./Components/Header/TopBar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import AddProduct from "./views/AddProduct";
import ProductDetail from "./views/ProductDetail";
import Products from "./views/Products";
import Profile from "./views/Profile";
import Favorites from "./components/Profile/Favorites";
//import Cart from "./views/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Header/NavBar";
import { Provider } from "./context/Context";
import Cart2 from "./views/Cart2";
import { UserContexProvider } from "./context/UserContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <UserContexProvider>
        <Provider>
          <BrowserRouter>
            <TopBar />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/productDetail/:id" element={<ProductDetail />} />
              <Route path="/products/:categoria" element={<Products />} />
              <Route path="/products/" element={<Products />} />
              <Route path="/favorites/" element={<Favorites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/Cart" element={<Cart2 />} />
            </Routes>
            
      <Footer />
          </BrowserRouter>
        </Provider>
      </UserContexProvider>
    </>
  );
}

export default App;
