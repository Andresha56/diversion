import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboad/Dashboard.jsx";
import { UserContextProvider } from "./context/UserContext.js";
import { Footer } from "./components/User/Footer";
import Protected from "./components/Protected";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
import { UploadProduct } from "./components/product/upload/index.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [authStatus, setAuthStatus] = useState(false);
  const navigate = useNavigate();

  const login = (userDetail) => {
    setUser(userDetail);
    setAuthStatus(true);
  };

  const logout = () => {
    setAuthStatus(false);
    setUser(null);
  };

  const loginUserContext = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/profile`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        const userDetail = res.data.data;
        login(userDetail);
        navigate("/dashboard");
      }
    } catch (error) {
      navigate(`${window.location.pathname}`);
    }
  };

  useEffect(() => {
    loginUserContext();
  }, []);
  return (
    <div>
      <UserContextProvider value={{ user, authStatus, login, logout }}>
        <ToastContainer
          position="top-center"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastClassName="bg-white text-gray-800 shadow-lg"
          bodyClassName="text-sm font-medium"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload/products" element={<UploadProduct />} />
        </Routes>
        {authStatus && <Footer />}
      </UserContextProvider>
    </div>
  );
}

export default App;
