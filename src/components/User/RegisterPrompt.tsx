import React from "react";

export const RegisterPrompt: React.FC = () => {
  return (
    <p className="text-base font-black tracking-normal text-center text-black">
      Don't have an account?{" "}
      <a
        href="#"
        className="font-bold text-indigo-500 underline cursor-pointer"
      >
        Register
      </a>
    </p>
  );
};
