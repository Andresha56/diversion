import { useCallback, useState } from "react";
import { ImageUploaderDialog } from "../../dialog/imageEditorDialog";
import { ImageIcon } from "../../../../icons";
import axios from "axios";
export const UploadProduct = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    price: "",
    unit: "piece",
  });
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
    const result = axios.post(
      "https://diversionbackend.onrender.com/api/products/create",
      {
        ...formData,
      }
    );
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-gray-100 min-h-screen py-8"
      >
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-indigo-600 mb-4">
            Add Product
          </h1>

          {/* Image Upload */}
          <div className="flex flex-col items-center mb-4">
            <div
              className="w-24 h-24 flex justify-center items-center bg-gray-200 rounded-full overflow-hidden cursor-pointer"
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
            </div>
            <button
              type="button"
              className="mt-2 text-indigo-600 text-sm font-semibold"
              onClick={() => setModalOpen(true)}
            >
              Add Product Image
            </button>
          </div>

          {/* Product Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="pl-7 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Unit Type
              </label>
              <select
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="piece">per piece</option>
                <option value="kgs">kgs</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>

      {/* Image Upload Modal */}
      <ImageUploaderDialog
        isOpen={isModalOpen}
        title="Add Product Image"
        fileName="product-image"
        onClose={() => setModalOpen(false)}
        cropType="CIRCLE"
        filePath="uploaded/product/"
        onFileUploaded={onFileUploaded}
      />
    </>
  );
};
