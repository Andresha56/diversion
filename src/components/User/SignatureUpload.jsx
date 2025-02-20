
export const SignatureUpload = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="mb-7 max-sm:mb-5">
      <label className="mb-1.5 text-base font-black tracking-normal leading-6 text-black">
        Add Signature (optional)
      </label>
      <label
        className="p-4 text-2xl font-black bg-white rounded-2xl border-indigo-600 border-solid cursor-pointer border-[1.5px] block text-center"
        role="button"
        tabIndex={0}
      >
        +
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
};
