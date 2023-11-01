import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  active: boolean;
};
const BaseButton = (props: ButtonProps) => {
  const {label, onClick, active} = props;
  return (
    <div onClick={onClick} className={active ? "btn active" : "btn"}>
      {label}
    </div>
  );
};

export default BaseButton;