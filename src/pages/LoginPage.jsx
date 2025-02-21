import React, { useState } from "react";
import { BackButton } from "../components/User/BackButton";
import { LoginHeader } from "../components/User/LoginHeader";
import { FormInput } from "../components/User/FormInput"; // Reusing same input component as RegisterPage
import { RegisterPrompt } from "../components/User/RegisterPrompt";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const updateField = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="p-6 mx-auto my-0 min-h-screen  max-w-md sm:p-8">
      <div className="bg-white p-6 shadow-lg rounded-2xl max-w-lg mx-auto sm:p-8">
        {/* Back Button */}
        <nav className="mb-4">
          <BackButton />
        </nav>

        {/* Login Header */}
        <LoginHeader />

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-4">
          <FormInput
            label="Email"
            type="email"
            placeholder="Ex: abc@example.com"
            icon="mail"
            value={formData.email}
            onChange={updateField("email")}
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="••••••••"
            icon="lock"
            value={formData.password}
            onChange={updateField("password")}
          />

          {/* Main Login Button */}
          <button
            type="submit"
            className="p-3 mt-5 w-full text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-md"
          >
            Login
          </button>

          {/* OR Separator */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm font-medium">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Login with OTP Button */}
          <button
            type="button"
            className="p-3 w-full text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition-all shadow-md mb-2"
          >
            Login with OTP
          </button>

          {/* Footer - Signup Link */}
          <RegisterPrompt />
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
