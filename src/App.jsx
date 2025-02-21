import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { UserContextProvider } from "./context/UserContext.js";
import { Navigation } from "./components/User/Navbar";
import { Footer } from "./components/User/Footer";
import Protected from "./components/Protected";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

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
        {authStatus && <Navigation />}
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
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
        {authStatus && <Footer />}
      </UserContextProvider>
    </div>
  );
}

export default App;
