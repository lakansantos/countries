import React, {ReactNode} from "react";

type LayoutCountriesContainerCardType = {
  children: ReactNode;
};
const LayoutCountriesContainer = (props: LayoutCountriesContainerCardType) => {
  const {children} = props;
  return (
    <div className="countries-container gap-4 h-fit flex flex-wrap justify-evenly p-4 items-center">
      {children}
    </div>
  );
};

export default LayoutCountriesContainer;
