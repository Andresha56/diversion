import React from "react";
import { Link } from "react-router-dom";

export const RegisterPrompt: React.FC = () => {
  return (
    <p className="text-base font-black tracking-normal text-center text-black">
      Don't have an account?{" "}
      <Link
        to="/register"
        className="font-bold text-indigo-500 underline cursor-pointer"
      >
        Register
      </Link>
    </p>
  );
};
