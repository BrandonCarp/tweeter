import { GrClose } from "react-icons/gr";

export const Modal = ({ onClose, open, children }) => {
  if (!open) return null;
  return (
    <div>
      {" "}
      <button onClick={onClose} className="">
        <GrClose />
      </button>
      <h1>{children}</h1>
    </div>
  );
};
