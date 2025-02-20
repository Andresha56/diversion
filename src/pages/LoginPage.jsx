import React from "react";
import { BackButton } from "../components/User/BackButton";
import { LoginHeader } from "../components/User/LoginHeader";
import { LoginForm } from "../components/User/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-zinc-100">
        <div className="box-border px-5 pt-12 pb-5 w-[412px] bg-white shadow-lg rounded-lg max-md:px-5 max-md:py-10 max-md:w-full max-sm:p-5">
          <nav className="mb-5">
            <BackButton />
          </nav>
          <section className="flex flex-col">
            <LoginHeader />
            <LoginForm />
          </section>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
