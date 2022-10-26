import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

export function HamburgerLinks() {
  const navigate = useNavigate();
  return (
    <>
      <button className="" onClick={() => navigate(-1)}>
        <GrClose />
      </button>
      <h1>Hamburger Menu</h1>
    </>
  );
}
