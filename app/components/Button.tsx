import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};
const Button = (props: ButtonProps) => {
  const {label, onClick} = props;
  return (
    <div onClick={onClick} className="btn">
      {label}
    </div>
  );
};

export default Button;
