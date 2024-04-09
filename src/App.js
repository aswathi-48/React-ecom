
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ProductList from "./Components/product/ProductList";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import { ProductDetails } from "./Pages/Product/ProductDetails";
import CartPage from "./Pages/cart/CartPage";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
// import product from './Components/product/ProductList.jsx'


function App() {

  const [isLogin, setIsLoggedIn] = useState("");
  const value = { isLogin, setIsLoggedIn };
  // const [isLogin, setIsLoggedIn] = useState(false);

  const accessToken = localStorage.getItem('accessToken');

  // const login = () => {
  //   setIsLoggedIn(true)
  // };

  // const login {isLogin,setIsLoggedIn};
  useEffect(() => {
    console.log("testing");
    setIsLoggedIn(accessToken !== null);
    // if(accessToken){
    //   setIsLoggedIn(true)
    // }
  },[accessToken]);

  
  return (
    //  <UserContext.Provider value={{ isLogin, setIsLoggedIn: () => {} }}>
    <UserContext.Provider value={value}>

    <div className="App">

     <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/productdetails/:id" element={<ProductDetails/>}/>
        <Route path="/cart/:id" element={<CartPage/>}/>
      </Routes>
     </Layout>
     </BrowserRouter>
    </div>
     </UserContext.Provider>
  );
}

export default App;
