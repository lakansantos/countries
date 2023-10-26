import React, {ReactNode} from "react";

type LayoutCountriesContainerCardType = {
  children: ReactNode;
};
const LayoutCountriesContainer = (props: LayoutCountriesContainerCardType) => {
  const {children} = props;
  return (
    <div className="countries-container h-fit flex flex-wrap gap-16 justify-evenly p-5 items-center">
      {children}
    </div>
  );
};

export default LayoutCountriesContainer;
