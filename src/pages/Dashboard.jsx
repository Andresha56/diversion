import React, { useEffect, useState } from "react";
import { Navigation } from "../components/User/Navbar";
import { StatsSection } from "../components/User/StatsSection";
import { ActionCards } from "../components/User/ActionCards";
import { ChatButton } from "../components/User/ChatBox";
import { Footer } from "../components/User/Footer";
import { logoutUser } from "../context/userdata";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../context/UserContext";
import axios from "axios";

 const DashboardLayout = () => {
    const navigate=useNavigate()
    const {logout}=userAuth()
    const {stats,setStat}=useState()
    const logoutuser=async ()=>{
        const user=await logoutUser();
        logout()
        navigate("/")
    }
    useEffect(async()=>{
    })
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Ravenna:wght@400;900&display=swap"
      />
      <main className="relative p-10 min-h-screen bg-zinc-100">
        <header>
          <h1 className="mb-5 text-6xl font-black text-indigo-600 max-sm:text-4xl">
            Welcome
          </h1>
        </header>
        <StatsSection />
        <ActionCards />
        <ChatButton />
        <button onClick={logoutuser}>Logout</button>
      </main>
    </>
  );
};

export default DashboardLayout