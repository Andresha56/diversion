import { Modal } from "../../modal";
import { ImageEditor } from "./image-add-edit-form";
import "./dialog.css";
import { CloseIcon } from "../../../../icons";
export const ImageUploaderDialog = ({
  isOpen,
  onClose,
  onFileUploaded,
  filePath,
  fileName,
  title,
  cropType,
}) => {
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <Modal isOpen={isOpen} placement={"center"}>
        <div className="dialog-wrapper">
          <div className="flex justify-between">
            <p className="mb-2">{title}</p>
            <button onClick={onClose} className="mb-2">
              {" "}
              X
            </button>
          </div>
          {
            <ImageEditor
              filePath={filePath}
              fileName={fileName}
              onFileUploaded={(file) => {
                onFileUploaded(file);
                onClose();
              }}
              onClose={onClose}
              cropType={cropType}
            />
          }
        </div>
      </Modal>
    </div>
  );
};
