import React from "react";

export const LoginButtons= () => {
  return (
    <div>
      <button
        className="p-4 mb-7 w-full text-base font-black tracking-normal leading-6 text-white bg-indigo-600 rounded-2xl cursor-pointer border-[none] max-sm:p-3.5"
        type="submit"
      >
        Login
      </button>
      <hr className="mb-7 h-px bg-black" />
      <button
        className="p-4 mb-7 w-full text-xl font-black tracking-tight leading-6 rounded-2xl border-black border-solid cursor-pointer border-[1.5px] text-zinc-900 max-sm:p-3.5"
        type="button"
      >
        Login with OTP
      </button>
    </div>
  );
};
