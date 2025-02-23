import { useRef, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./image-add-edit.css";
import AvatarEditor from "react-avatar-editor";
export const ImageEditor = ({
  filePath,
  fileName,
  onFileUploaded,
  cropType,
  onClose,
}) => {
  const editorRef = useRef(null);
  const [scaleValue, setScaleValue] = useState(1);
  const [selectedImage, setSelectedImage] = useState();
  const [error, setError] = useState();
  const [isFileUploading, toggleFileUploading] = useState(false);

  const onSave = () => {
    const formData = new FormData();
    if (!selectedImage || !editorRef) {
      return;
    }

    editorRef?.current?.getImageScaledToCanvas().toBlob(async (file) => {
      if (!file) {
        return;
      }

      if (!filePath || !fileName) {
        return;
      }

      formData.append("filePath", filePath);
      formData.append("file", file, fileName);
      console.log(file, "file");
      try {
        toggleFileUploading(true);
        onFileUploaded(file);
      } catch (error) {
        setError("Error Uploading file");
      } finally {
        toggleFileUploading(false);
      }
    });
  };
  const onScaleChange = (scaleChangeEvent) => {
    const scaleValue = parseFloat(scaleChangeEvent.target.value);
    setScaleValue(scaleValue);
  };
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const { type, size } = file;
    if (size > 1e6) {
      setError("Please upload image size of 1MB or less");
      return;
    }
    if (
      !(type.endsWith("jpeg") || type.endsWith("png") || type.endsWith("jpg"))
    ) {
      setError("We only accept JPG, JPEG or PNG files");
      return;
    }
    setSelectedImage(file);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: openFileDialog,
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
  });
  const onChangePicture = useCallback(() => {
    setSelectedImage(undefined);
    openFileDialog();
  }, [openFileDialog]);
  return (
    <div className="image-cropper">
      {error ? <p>{error}</p> : null}
      {selectedImage ? (
        <>
          <div className="avatar-container">
            <AvatarEditor
              ref={editorRef}
              image={selectedImage}
              color={[0, 0, 0, 0.35]}
              border={10}
              width={250}
              height={250}
              scale={scaleValue}
              rotate={0}
              borderRadius={cropType === "SQUARE" ? 0 : 500}
            />
          </div>
          <input
            type="range"
            value={scaleValue}
            name="points"
            step={0.5}
            min="1"
            max="10"
            className="slider-input"
            onChange={onScaleChange}
          />
        </>
      ) : (
        <div {...getRootProps()} className="input">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the file here ...</p>
          ) : (
            <p>
              Drag & Drop your image here, <br /> or click to select an image
            </p>
          )}
        </div>
      )}

      <div className="action">
        <button
          onClick={onSave}
          loading={isFileUploading}
          loaderHeight={24}
          disabled={!selectedImage}
          className="bg-indigo-600 save"
        >
          Save
        </button>
        <button
          className="cancel"
          onClick={onChangePicture}
          disabled={!selectedImage || isFileUploading}
        >
          Change Picture
        </button>
      </div>
    </div>
  );
};
