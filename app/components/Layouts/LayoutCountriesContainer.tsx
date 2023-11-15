import React, {ReactNode} from "react";

type LayoutCountriesContainerCardType = {
  children: ReactNode;
};
const LayoutCountriesContainer = (props: LayoutCountriesContainerCardType) => {
  const {children} = props;
  return (
    <div className="countries-container gap-4 py-4 h-[700px] overflow-auto flex flex-wrap justify-center items-center">
      {children}
    </div>
  );
};

export default LayoutCountriesContainer;
