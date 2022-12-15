import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

export function HamburgerLinks() {
  const navigate = useNavigate();

  const pageNavigation = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1)
  };
  return (
    <>
      <button className="" onClick={pageNavigation}>
        <GrClose />
      </button>
      <h1>Hamburger Menu</h1>
    </>
  );
}
