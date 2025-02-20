import React, { InputHTMLAttributes } from "react";

export const FormInput = ({
  label,
  icon,
  change,
  value,
  forgotPassword,
  ...props
}) => {
  return (
    <div className="mb-7">
      <label className="mb-1.5 text-base font-black tracking-normal leading-6 text-black">
        {label}
      </label>
      <div className="box-border flex items-center px-5 py-4 h-14 bg-white rounded-2xl border-indigo-500 border-solid border-[1.5px] max-sm:px-4 max-sm:py-3 max-sm:h-[50px]">
        <i className={`ti ti-${icon} mr-3 text-indigo-500`} />
        <input 
          className="w-full text-base text-black border-[none]"
          onChange={e=>change(e.target.value)}
          value={value}
          {...props}
        />
      </div>
      {forgotPassword && (
        <button className="mt-2 text-xs font-black tracking-normal leading-6 text-indigo-600 underline">
          Forgot Password?
        </button>
      )}
    </div>
  );
};
