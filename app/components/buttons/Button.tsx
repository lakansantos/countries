"use client";

import React, {useState} from "react";
import BaseButton from "./BaseButton";

type ButtonProps = {
  buttonItems: {
    label: string;
  }[];
};

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
        const {label} = item;
        return (
          <BaseButton
            key={key}
            label={label}
            active={activeButtonIndex === key}
            onClick={() => handleActiveClick(key)}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Button;
