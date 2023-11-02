"use client";

import React, {useState} from "react";
import BaseButton from "./BaseButton";

type ButtonProps = {
  buttonItems: {
    label: string;
    onClick?: () => void;
  }[];
};

//this component will be used for multiple inline buttons
const Button = (props: ButtonProps) => {
  const {buttonItems} = props;
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  );

  const handleActiveClick = (key: number) => {
    if (key === activeButtonIndex) {
      setActiveButtonIndex(null);
    }
    setActiveButtonIndex(key);
  };

  return (
    <React.Fragment>
      {buttonItems.map((item, key) => {
        const {label, onClick} = item;
        return (
          <BaseButton
            key={key}
            label={label}
            active={activeButtonIndex === key}
            onClick={() => {
              handleActiveClick(key);
              if (onClick) onClick();
            }}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Button;
