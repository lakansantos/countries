import Image from "next/image";
import React from "react";

type LayoutCountriesCardPropsType = {
  country_name: string;
  flag: string;
  languages: {[key: string]: string}[];
  population: number;
};
const LayoutCountriesCard = (props: LayoutCountriesCardPropsType) => {
  const {country_name, flag, languages, population} = props;

  return (
    <div className=" w-[220px] h-[350px] bg-white flex flex-col">
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
      <p>Capital: {country_name}</p>
      <p>Languages: {languages?.map((language) => language.name).join(", ")}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default LayoutCountriesCard;
