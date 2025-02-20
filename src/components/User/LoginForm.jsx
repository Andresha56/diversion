"use client";
import React, { FormEvent, useState } from "react";
import { FormInput } from "./FormInput";
import { LoginButtons } from "./LoginButtons";
import { RegisterPrompt } from "./RegisterPrompt";
import { loginUser } from "../../context/userdata";
import { userAuth } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const { user, login } = userAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginUser(email, password)
    if (user.success) {
      toast.success(user.message)
      login(user.data.user)
      navigate("/dashboard")
    }
    else
      toast.error(user.message)
  };
  const handleEmail = (s) => {
    setEmail(s)
  }
  const handlePassword = (s) => {
    setPassword(s)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <FormInput
        label="Email"
        icon="at"
        type="email"
        value={email}
        change={handleEmail}
        placeholder="Ex: abc@example.com"
        required
      />
      <FormInput
        label="Your Password"
        icon="lock"
        type="password"
        value={password}
        change={handlePassword}
        required
        forgotPassword
      />
      <LoginButtons />
      <RegisterPrompt />
    </form>
  );
};
