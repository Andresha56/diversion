import { useState } from "react";
import { BackButton } from "../components/User/BackButton";
import { FormHeader } from "../components/User/FormHeader";
import { SignatureUpload } from "../components/User/SignatureUpload";

const FormInput = ({ label, type, placeholder, icon, value, onChange }) => {
  return (
    <div className="mb-7 max-sm:mb-5">
      <label className="mb-1.5 text-base font-black tracking-normal leading-6 text-black">
        {label}
      </label>
      <div className="flex relative items-center px-5 py-4 bg-white rounded-2xl border-indigo-600 border-solid border-[1.5px] max-sm:px-4 max-sm:py-3.5">
        {icon && <i className={`ti ti-${icon} mr-2.5 text-indigo-600`} />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full text-base text-black border-[none]"
        />
      </div>
    </div>
  );
};

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    businessName: "",
    businessAddress: "",
    gstNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const updateField = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="p-5 mx-auto my-0 min-h-screen  max-w-[412px] max-sm:p-4">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
      />

      <BackButton />
      <FormHeader />

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          placeholder="Ex: abc@example.com"
          icon="mail"
          value={formData.email}
          onChange={updateField("email")}
        />

        <FormInput
          label="Your Name"
          type="text"
          placeholder="Ex. Saul Ramirez"
          icon="user"
          value={formData.name}
          onChange={updateField("name")}
        />

        <FormInput
          label="Your Password"
          type="password"
          placeholder="••••••••"
          icon="lock"
          value={formData.password}
          onChange={updateField("password")}
        />

        <FormInput
          label="Phone number"
          type="tel"
          placeholder="Ex. 9999999999"
          icon="phone"
          value={formData.phone}
          onChange={updateField("phone")}
        />

        <FormInput
          label="Business name"
          type="text"
          placeholder="Ex. Sp stores"
          value={formData.businessName}
          onChange={updateField("businessName")}
        />

        <FormInput
          label="Business address"
          type="text"
          placeholder="Ex. 32 sukhia street,kol-700021"
          value={formData.businessAddress}
          onChange={updateField("businessAddress")}
        />

        <FormInput
          label="GST number (optional)"
          type="text"
          placeholder="27AAAPA1234A1Z5"
          value={formData.gstNumber}
          onChange={updateField("gstNumber")}
        />

        <SignatureUpload
          onFileSelect={(file) =>
            setFormData((prev) => ({ ...prev, image: file }))
          }
        />

        <button
          type="submit"
          className="p-4 mt-8 mb-6 w-full text-2xl font-black text-white bg-indigo-600 rounded-2xl cursor-pointer border-[none] max-sm:p-3.5 max-sm:text-xl"
        >
          Register
        </button>

        <footer className="text-base font-black text-center">
          Already have an account?
          <a href="#" className="text-indigo-600 underline cursor-pointer ml-1">
            Login
          </a>
        </footer>
      </form>
    </main>
  );
};

export default RegisterPage;
