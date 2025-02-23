import { ReactNode, FC, memo } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "../../../icons";
import "./modal.css";

const ModalComponent = ({
  children,
  onClose,
  isOpen,
  placement,
  closePlacement = "right",
  closeIconColor = "#00033e",
  closeTop,
  width,
}) => {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "scroll";
  //   };
  // }, []);

  if (!isOpen) {
    return null;
  }

  return isOpen && document.body
    ? ReactDOM.createPortal(
        <>
          <button className="modal-mask" />
          <div className={`modal-container ${placement || "right"}`}>
            <div className="modal-wrapper" style={{ width }}>
              {onClose ? (
                <button
                  onClick={onClose}
                  className={`close ${closePlacement}`}
                  style={{ top: closeTop }}
                >
                  <CloseIcon color={closeIconColor} size={16} />
                </button>
              ) : null}
              {children}
            </div>
          </div>
        </>,
        document.body // Ensure document.body exists
      )
    : null;
};

export const Modal = memo(ModalComponent);
