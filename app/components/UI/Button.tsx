import { ButtonProps } from "@/data/types";
import React from "react";

type Props = {};

const Button = ({
  title,
  buttonStyles,
  btnType,
  isDisabled,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`${buttonStyles} py-3 px-5`}
      type={btnType}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
