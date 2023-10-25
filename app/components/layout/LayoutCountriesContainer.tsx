import React, {ReactNode} from "react";

type LayoutCountriesContainerCardType = {
  children: ReactNode;
};
const LayoutCountriesContainer = (props: LayoutCountriesContainerCardType) => {
  const {children} = props;
  return (
    <div className="h-fit flex flex-wrap gap-10 justify-center items-center">
      {children}
    </div>
  );
};

export default LayoutCountriesContainer;
