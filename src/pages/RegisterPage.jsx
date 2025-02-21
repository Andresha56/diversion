import { useState } from "react";
import { BackButton } from "../components/User/BackButton";
import { FormHeader } from "../components/User/FormHeader";
import { SignatureUpload } from "../components/User/SignatureUpload";

const FormInput = ({ label, type, placeholder, icon, value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex items-center px-4 py-3 bg-white rounded-lg border border-gray-300 focus-within:border-indigo-500 transition-all">
        {icon && <i className={`ti ti-${icon} text-indigo-600 mr-2`} />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full text-gray-800 text-sm outline-none bg-transparent placeholder-gray-400"
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
    <main className="p-6 mx-auto my-0 min-h-screen  max-w-2xl sm:p-8">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
      />

      <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <BackButton />
        <FormHeader />

        <form onSubmit={handleSubmit}>
          {/* Two-column grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              label="Password"
              type="password"
              placeholder="••••••••"
              icon="lock"
              value={formData.password}
              onChange={updateField("password")}
            />
            <FormInput
              label="Phone"
              type="tel"
              placeholder="Ex. 9999999999"
              icon="phone"
              value={formData.phone}
              onChange={updateField("phone")}
            />
            <FormInput
              label="Business Name"
              type="text"
              placeholder="Ex. SP Stores"
              value={formData.businessName}
              onChange={updateField("businessName")}
            />
            <FormInput
              label="Business Address"
              type="text"
              placeholder="Ex. 32 Sukhia St, Kol-700021"
              value={formData.businessAddress}
              onChange={updateField("businessAddress")}
            />
          </div>

          {/* Full-width input for GST Number */}
          <div className="mt-4">
            <FormInput
              label="GST Number (Optional)"
              type="text"
              placeholder="27AAAPA1234A1Z5"
              value={formData.gstNumber}
              onChange={updateField("gstNumber")}
            />
          </div>

          {/* Signature Upload */}
          <div className="mt-4">
            <SignatureUpload
              onFileSelect={(file) =>
                setFormData((prev) => ({ ...prev, image: file }))
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="p-3 mt-5 w-full text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-md"
          >
            Register
          </button>

          {/* Footer */}
          <footer className="text-center text-gray-600 mt-4 text-sm">
            Already have an account?
            <a href="#" className="text-indigo-600 underline ml-1">
              Login
            </a>
          </footer>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
