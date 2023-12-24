import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import MenuPage from "../views/MenuPage";
import BottomNavigation from "../components/bottom-navigation";

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const validation = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken && location.pathname !== "/login") {
        navigate("/login");
      }
      if (accessToken && location.pathname === "/login") {
        navigate("/");
      }
    };

    validation();
  }, [navigate, location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageWithBottomNav />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPageWithBottomNav />} />
      </Routes>
    </>
  );
};

const HomePageWithBottomNav: React.FC = () => (
  <>
    <HomePage />
    <BottomNavigation />
  </>
);

const MenuPageWithBottomNav: React.FC = () => (
  <>
    <MenuPage />
    <BottomNavigation />
  </>
);

export default MainLayout;
