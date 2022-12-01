import { GrClose } from "react-icons/gr";
import ReactDom from "react-dom";

const modal_styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
};

const overlay_styles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export const Modal = ({ onClose, open, children }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="" style={overlay_styles}>
      <div className="rounded " style={modal_styles}>
        <button onClick={onClose} className="fixed top-2 left-2">
          <GrClose />
        </button>
        <h1>{children}</h1>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
