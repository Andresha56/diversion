import { Modal } from "../../modal";
import { ImageEditor } from "./image-add-edit-form";

export const ImageUploaderDialog = ({
  isOpen,
  onClose,
  onFileUploaded,
  filePath,
  fileName,
  title,
  cropType,
}) => {
  console.log("calling");
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <Modal isOpen={isOpen} placement={"center"}>
        <div className="">
          <p>{title}</p>
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
