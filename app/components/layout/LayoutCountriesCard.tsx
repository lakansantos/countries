import Image from "next/image";
import React from "react";

type LayoutCountriesCardPropsType = {
  country_name: string;
  flag: string;
};
const LayoutCountriesCard = (props: LayoutCountriesCardPropsType) => {
  const {country_name, flag} = props;

  return (
    <div className=" w-[220px] h-[350px] bg-white flex flex-col">
      {country_name}
      <Image
        src={flag}
        alt={country_name}
        width={100}
        height={300}
        style={{
          height: "100px",
          margin: "10px",
          width: "auto",
        }}
        priority
      />
    </div>
  );
};

export default LayoutCountriesCard;
