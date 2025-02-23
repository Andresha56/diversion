import { useCallback, useEffect, useState } from "react";
import { ImageUploaderDialog } from "../../dialog/imageEditorDialog";
import { ImageIcon } from "../../../../icons";
import queryString from "query-string";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./product.css";
export const CreateOrUpdateProduct = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    unit: "piece",
  });
  const [amount, setAmount] = useState();
  const [isisUpdateMode, setIsUpdateMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const queries = queryString.parse(window.location.search);
    if (!queries) {
      setIsUpdateMode(false);
      return;
    }
    setFormData(queries);
    setIsUpdateMode(true);
  }, []);
  const onFileUploaded = useCallback((file) => {
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setModalOpen(false);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isisUpdateMode) {
      const result = axios.post(
        `${import.meta.VITE_BACKEND_BASE_URL}/api/products/create`,
        {
          ...formData,
        }
      );
      if (result) {
        toast.success("Product created successfully");
      }
    } else {
      const result = axios.post(
        `${import.meta.VITE_BACKEND_BASE_URL}/api/products/update/quantity`,
        {
          productId: formData.productId,
          quantity: form.quantity,
        }
      );
      if (result) {
        toast.success("Product updated successfully");
        navigate("/dashboard");
      }
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-gray-300 min-h-screen py-8"
      >
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-indigo-600 mb-4">
            Add Payment Screenshort
          </h1>

          {/* Image Upload */}
          <div className="flex flex-col items-center mb-4">
            <Box
              sx={{
                width: "50%",
                borderRadius: "5px",
                minHeight: "200px",
              }}
              className="w-24 h-100 flex justify-center items-center bg-gray-200 overflow-hidden cursor-pointer image-container"
              onClick={() => setModalOpen(true)}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImageIcon color={"black"} />
              )}
            </Box>
            <button
              type="button"
              className="mt-2 text-indigo-600 text-sm font-semibold"
              onClick={() => setModalOpen(true)}
            >
              Add Payment Image
            </button>
          </div>

          {/* Product Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="amount"
                  onChange={() => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="pl-7 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Upload
            </button>
          </div>
        </div>
      </form>

      {/* Image Upload Modal */}
      <ImageUploaderDialog
        isOpen={isModalOpen}
        title="Upload Image"
        fileName="product-image"
        onClose={() => setModalOpen(false)}
        cropType="SQUARE"
        filePath="uploaded/product/"
        onFileUploaded={onFileUploaded}
      />
    </>
  );
};
